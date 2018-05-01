const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('mime');
const chatServer = require('./socket/chat_server');
const multipart = require('connect-multiparty')
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server/lib/Server');
const webpackConfig = require('./webpack.config');
const mongDB = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser')
const User = require('./src/models/user.js');
const Article = require('./src/models/article.js');
const Poetry = require('./src/models/poetry.js');
const Proposal = require('./src/models/proposal.js');
const compiler = Webpack(webpackConfig);
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);


const devServerOptions = Object.assign({}, webpackConfig.devServer, {
  stats: {
    colors: true
  },
  historyApiFallback: true,
  before(app) {
    let serverSocket = http.Server(app);
    chatServer.listen(serverSocket);
    serverSocket.listen(3000);

    mongDB.connect('mongodb://127.0.0.1:27017/runoob');
    app.use(bodyParser.json());
    app.locals.moment = require('moment'); 

    app.use(session({
      secret:'a secret', 
      cookie: { 
        maxAge: 1000*60*30
      },
      store:new MongoStore({
        url:'mongodb://127.0.0.1:27017',
        collection:'session'
      })
    }));

    //预处理
    app.use((req, res, next) => {
      let _Suser = req.session.user;
      app.locals.user = _Suser;
      next();
    });

    app.post('/signup',function(req,res) {
      let _username = req.body.user;
      let _password = req.body.password;
      let user = new User({
        _username,
        _password
      });
      
      User.findOne({username:_username},function(err,username){
        //如果被占用异步提醒
        if (err) {
            
        }
        if(!username){
           //用户不存在，返回信息
           return res.send('用户不存在').end();
        }

        username.comparePassword(_password,function(err,isMatched) {
           if (err) {
             //
           }
           if (isMatched) {
            req.session.user = _username;
            res.status(200).send({});
            return res.end(); 
           }else{
            res.send('密码错误').end();            
           }
        })
      })

     // user.save(function(err,user) {
          // 取出数据，回送      
      
     // })
     // res.redirect('/api/ContentHtml');

    });

    app.get('/logout',function(req,res) {
      delete req.session.user;
      res.sendStatus(200);
      return res.end('200,ok');
    });

    app.post('/register',function(req,res) {
      let _user = req.body;
      let _username = req.body.username;
      User.findOne({username:_username},function(err,username){
          if (err) {
              //占用提醒
              console.log('cc');
          }
          if(!username){
             //存储用户信息
             let defaultRandom = Math.ceil(Math.random()*9+1);
             let defaultImgPath = '/default/defaultAvatar' + defaultRandom + '.png';
             let avatarName = 'defaultAvatar' + defaultRandom;
             _user.avatar = avatarName;
             _user.avatarPath = defaultImgPath;
             let user = new User(_user); 
             user.save(function(err,user) {
                if (err) {
                  console.log(err);
                } 
               res.sendStatus(200);
               return res.end('200,ok');
             });
        }
      });
    });

    app.post('/v1/css/article',function(req,res){
      let articleInformation = req.body;
      let article = articleInformation.article;
      let title = articleInformation.title;
      let avatar = articleInformation.avatar;
      let href = articleInformation.href;
      let current = articleInformation.current;
      let content = articleInformation.content;
      let articleIntroduce = new Article(articleInformation);
      Article.findOne({title:title,article:article},function(err,title){
           if (err) {

           }

           if(!title){
  articleIntroduce.save(function(err,articleIntroduce){
                    if (err) {
                      console.log(err);
                    } 
                   res.sendStatus(200);
                   return res.end('200,ok');
              });
           }
      });
    });

    app.get('/v1/css/article',function(req,res){
      let  article = req.query.article;
      let  current = req.query.current; 
      Article.find({article:article,current:current}).lean().exec(function(err,doc){
        if (err) {
          console.log(err);
        }
        for (var i = 0; i < doc.length; i++) {
              delete doc[i]._id;
        }
             res.status(200).send(doc);
             return res.end();
      });
    });

    app.post('/v1/poetry/article',function(req,res){
      let articleInformation = req.body;
      let article = articleInformation.article;
      let title = articleInformation.title;
      let mark = articleInformation.mark;
      let content = articleInformation.content;
      let poetryContent = new Poetry(articleInformation);
              Poetry.findOne({title:title,article:article},function(err,title){
                   if (err) {

                   }

                   if(!title){
          poetryContent.save(function(err,articleIntroduce){
                            if (err) {
                              console.log(err);
                            } 
                           res.sendStatus(200);
                           return res.end('200,ok');
                      });
                   }
              });
    });

    app.get('/v1/poetry/article',function(req,res){
      let  article = req.query.article;
      let mark = Math.floor(Math.random() * 20);
      Poetry.find({article:article,mark:mark}).lean().exec(function(err,doc){
        if (err) {
          console.log(err);
        }
        for (var i = 0; i < doc.length; i++) {
              delete doc[i]._id;
        }
             res.status(200).send(doc);
             return res.end();
      });
    });

    app.get('/v1/UserMessage',function(req,res){
       let username = req.session.user;
       if(req.session.user){
            User.findOne({username:username}).lean().exec(function(err,doc){
             //如果被占用异步提醒
             if (err) {
                 
             }
                   delete doc.password;   
             res.send(doc).end();
            });
       }else{
          res.send('请登录').end();
     }
    });

    app.put('/v1/users/message',function(req,res){
       let message = req.body;
       //rename avatarPath
       if (message.newname !== message.username) {
        console.log(message.username);
          req.session.user = message.newname;
       }
       let username = message.username;
       let email = message.email;
       let newname = message.newname;
       let residence = message.residence;
       let phone = message.phone;
       let avatarPath = '/UserAvatar/'+ newname +'.png';
       console.log(username);
       User.findOneAndUpdate({username:username},{
            username:newname,
            email:email,
            residence:residence,
            phone:phone,
            avatarPath:avatarPath
      },{new:true}).lean().exec(function(err,doc){
                if(err){
                   return res.send('用户名已存在').end();
                }
                                console.log(doc);
                let pattern = /\/default/;
                if (!pattern.test(doc.avatarPath)) {
                fs.rename('./public/userImgStorage/UserAvatar/' + username + '.png','./public/userImgStorage/UserAvatar/' + newname + '.png',function(err){
                      if(err){
                       throw err;
                      }
                      });

                }
                   delete doc._id;
                   delete doc.password;
                   res.send(doc).end();
      });
    });

    app.put('/v1/users/password',function(req,res){
        let message = req.body;
        const vilidate = require('crypto').createHash('md5').update(message.oldpassword).digest('hex');
        const vilidatePW = require('crypto').createHash('md5').update(message.password).digest('hex');
        User.findOneAndUpdate({password:vilidate},{$set:{
             password: vilidatePW
        }},{new:true}).lean().exec(function(err,doc){
          console.log(doc);
             if (err) {
               return res.send('密码不正确').end();
             }
             return res.send({}).end(); 
        });
    });
   /*
    app.post('/imgStorage',function(req,res){
          console.log(req.files);
    });
    */
   //proposal
   app.get('/v1/proposal',function(req,res){
       let count = req.query.count * 10 ;
       Proposal.find().limit(count).exec(function(err,doc){
         if( count <= doc.length ){
          return res.status(200).send(doc).end();
         }else if( count > doc.length && (count-10) < doc.length){
          return res.status(200).send(doc.slice(count-10,doc.length)).end();
         }else{
          return res.status(200).send('评论已加载完成').end();
         }
       });
   });

   app.post('/v1/proposal',function(req,res){
       let cement = req.body;
       let proposalMessage = new Proposal(cement); 
       proposalMessage.save(function(err,proposalMessage) {
         if (err) {
          console.log(err);
         } 

        res.status(200);
        res.end('200,ok');
       });
   });

   app.delete('/v1/UserMessage',function(req,res){
         let username = req.session.user;
       if (username) {
         User.remove({username:username}).exec(function(err){
            if(err){
              console.log(err);
            }
            res.status(200).end('200,ok');
         });
       }else{
          res.status(404).end();
       }
   });
   //socket.io chat
   app.use('/chartroom', express.static( __dirname + '/src/websocket/'));
   //avatar catalog
   app.use('/default', express.static( __dirname + '/public/userImgStorage/default'));
   app.use('/UserAvatar',express.static(__dirname + '/public/userImgStorage/UserAvatar'))

   app.get('/v1/users/avatar',function(req,res){
          let username = req.session.user;
          let avatarMessage = {};
          if (username) {
          User.findOne({username:username}).lean().exec(function(err,doc){
                    avatarMessage.avatar = doc.avatar;
                    avatarMessage.avatarPath = doc.avatarPath;
                    res.send(avatarMessage).end();
          });
        }else{
          let defaultRandom = Math.ceil(Math.random()*9+1);
          let defaultImgPath = '/default/defaultAvatar' + defaultRandom + '.png';
              avatarMessage.avatarPath = defaultImgPath;
              res.send(avatarMessage).end(); 
        }
   });

   //avatar updload
  app.post('/imgStorage',multipart(),function(req,res){
      let username = req.session.user;
      let filename = req.files.file.originalFilename || path.basename(req.files.file.path);
      let newfilename ='/UserAvatar/' + username + '.png';
      let targetPath = './public/userImgStorage/UserAvatar/' + username + '.png';

      //delete oldAvatar
      User.findOne({username:username},function(err,doc){
             let pattern = /\/default/;
             if (!pattern.test(doc.avatarPath)) {
                  let absPath = './public/userImgStorage' + doc.avatarPath;
                  fs.unlink(absPath,function(err){
                    if (err) {
                        return console.log(err);
                    }
                    fs.createReadStream(req.files.file.path,{
                      highWaterMark: 1024 * 1024 * 2
                    }).pipe(fs.createWriteStream(targetPath));
                  console.log(absPath);
                  });  
             }
      });


      console.log('1',targetPath);
      console.log("2",newfilename);
      console.log(username);
      User.findOneAndUpdate({username:username},{
                   avatarPath: newfilename
           },{new:true}).lean().exec(function(err,doc){
                   if (err) {
                     return res.send('上传失败').end();
                   }
                  console.log("3",doc.avatarPath);
                   return res.send(newfilename).end(); 
      });
      

  });

  }

});
const server = new WebpackDevServer(compiler, devServerOptions);
server.listen(3000, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:3000');
});

