import React from 'react';
import ReactDOM from 'react-dom';
import CommentApp from './components/commentapp.jsx';
import CommentList from './components/commentlist.jsx';
import { message , Pagination } from 'antd';
import axios from 'axios';
import './styles/proposal.css';

let comment = [];
class Proposal extends React.Component {

    constructor(props) {
        super(props);
        this.state={
        	comment:[],
        	count:1
        }
    }
    
    componentDidMount() {
    	axios.get('/v1/proposal',{
    		params: {
    		     count:1
    		 }
    	}).then((res)=>{
          for (var i = 0; i < res.data.length; i++) {
          	comment.push(res.data[i]);
          }
          this.setState({
          	comment:comment
          });
    	});
    }
    
    addProposal(){
        let content = this.editorInstance.getContent('html');
        let author = cookie.getCookie('username');
        console.log(content);
        if(author === 'undefined'){
            message.error("请登录"); 	
        }else if(!/(^(<.+>\s{0,}<.+>\s{0,})+$)|(^(<p><\/p>)+$)|(^(<blockquote><\/blockquote>)(<p><\/p>)+$)|(^(<pre><code><div><br><\/div><\/code><\/pre>)+$)/.test(content)){
        	axios.post('/v1/proposal',{
        		   author:author,
        		   content:content
        	}).then((res)=>{
        		 this.editorInstance.setContent('', 'html');
             this.props.forceUpdate(this.props.count);
        	});
        }else{
             message.warning('请输入内容');
             this.editorInstance.setContent('', 'html');
             return false;
        }
    }

    onChange = (page) => {
        this.setState({
          count: page,
        });
        let count = page;
        axios.get('/v1/proposal',{
         params:{
           count:count
         }
        }).then((res)=>{
         if(typeof res.data === 'object'){
                 this.setState({
                   comment:res.data
                 });
           }else{
             message.info(res.data);
           }
        });
    }

    update = (count) => {
        axios.get('/v1/proposal',{
                params: {
                     count:count
                 }
              }).then((res)=>{
                  this.setState({
                    comment:res.data
                  });
              });
    }

    render() {
        return (
            <div >
            	<CommentApp addProposal={this.addProposal} forceUpdate={this.update} count = {this.state.count}/>
            	<Pagination current={this.state.count} onChange={this.onChange} total={50} />  
            	<CommentList comment={this.state.comment} ref={(node) => {this.commentArea = node}} />
            </div>
        );
    }
}

export default Proposal;
