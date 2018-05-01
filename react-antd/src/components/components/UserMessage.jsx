import React from 'react';
import { Modal , Form, Input, Tooltip, Icon, Cascader, Select , message , Row, Col , Checkbox, Button ,  Card , Upload } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
import './styles/UserMessage.css';
import axios from 'axios';
import '../../helper/cookie.js';
//图片上传待改动，

const residences = [{
  value: '浙江',
  label: '浙江',
  children: [{
    value: '杭州',
    label: '杭州',
    children: [{
      value: '西湖',
      label: '西湖',
    }],
  }],
}, {
  value: '江苏',
  label: '江苏',
  children: [{
    value: '南京',
    label: '南京',
    children: [{
      value: '中华门',
      label: '中华门',
    }],
  }],
}];

//modify user message
class UsermessageForm extends React.Component {
  state = {
    autoCompleteResult: [],
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    return (
      <Form onSubmit={this.props.handleSubmitMessage} >
        <FormItem
          {...formItemLayout}
          label="E-mail"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
            initialValue:this.props.email
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              姓名&nbsp;
              <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
            initialValue: this.props.nickname
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="地址"
        >
          {getFieldDecorator('residence', {
            initialValue: this.props.residence,
            rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
          })(
            <Cascader options={residences} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="电话"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, pattern:/^1\d{10}$/, message: 'Please input your phone number!' }],
            initialValue:this.props.phone
          })(
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">保存</Button>
          <Button type="primary" onClick={this.props.onClick} style={{ marginLeft:'10px' }}>取消</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedUsermessageForm = Form.create()(UsermessageForm);

//modify password
class ModifyPassword extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }
  render() {
      const { getFieldDecorator } = this.props.form;
      const { autoCompleteResult } = this.state;

      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };


      return (
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label="旧密码"
          >
            {getFieldDecorator('oldpassword', {
              rules: [{
                required: true, message: 'Please input your password!',
              }, {
                validator: this.validateToNextPassword,
              }],
            })(
              <Input type="password" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="新密码"
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Please input your password!',
              }, {
                validator: this.validateToNextPassword,
              }],
            })(
              <Input type="password" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="密码验证"
          >
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: 'Please confirm your password!',
              }, {
                validator: this.compareToFirstPassword,
              }],
            })(
              <Input type="password" onBlur={this.handleConfirmBlur} />
            )}
          </FormItem>
        </Form>
      );
    }
  }
const ModifyPasswordForm = Form.create()(ModifyPassword);

//upload avatar
const getBase64 = (img, callback) => {
         const reader = new FileReader();
         reader.addEventListener('load', () => callback(reader.result));
         reader.readAsDataURL(img);
         }

const beforeUpload = (file) => {
         const isIMAGE = file.type === 'image/jpeg' || 'image/png' || 'image/jpg';
         if (!isIMAGE) {
           message.error('请上传图片!');
         }
         const isLt2M = file.size / 1024 / 1024 < 2;
         if (!isLt2M) {
           message.error('图片不超过 2MB!');
         }
         return isIMAGE && isLt2M;
       }

class PicturesWall extends React.Component {
   constructor(props) {
        super(props);
        this.state={
            loading: false
        }
    }

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          getBase64(info.file.originFileObj, imageUrl => {
            this.setState({
                loading: false,
            });
            this.props.updateAvatar(imageUrl);
          });
        }
      }


  render() {
    const uploadButton = (
      <div>
        <Icon type='plus' />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
 
    let imageUrl = this.props.avatar;

    return (
      <div className="clearfix" style={{ position: 'relative' , left: '45%' , marginBottom: '40px' }}>
        <Upload
          action="/imgStorage"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          beforeUpload={beforeUpload}
          onChange={this.handleChange}
        >
          {imageUrl ? <img src={imageUrl} alt="" /> : uploadButton}
        </Upload>
      </div>
    );
  }
}

class UserMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            _active: true,
            residence:'',
            nickname:'',
            phone:'',
            email:'',
            password:'',
            ModalText: 'Content of the modal',
            visible: false,
            confirmLoading: false,
            avatar:''
        }
    }
  
    componentWillMount() {
    	axios.get('/v1/UserMessage').then((res)=>{
    		if (typeof res.data === 'object') {
              let data=res.data;
              this.setState({
              	residence:data.residence,
              	nickname:data.username,
              	phone:data.phone,
              	email:data.email,
                avatar:data.avatarPath
              });
            }else{
             	window.location.href = 'http://localhost:3000'; 
            }
    	});
    }

    onClick = (e) => {
    	e.preventDefault();
    	let _active = !this.state._active;
    	this.setState({
    		_active:_active
    	})
    }
    
    showModal = () => {
      this.setState({
        visible: true,
      });
    }
    //异步表单验证
    handleOk = () => {
      this.setState({
        confirmLoading: true
      });
      //password change
      let form = this.passwordForm;
      form.validateFields((err,values)=>{
        const { getFieldValue } = form;
        const oldpassword = getFieldValue('oldpassword');
        const password = getFieldValue('password');
        axios.put('/v1/users/password',{
        	oldpassword:oldpassword,
        	password:password
        }).then((res)=>{
            if(typeof res.data === 'object'){
            	cookie.remove(password);
                cookie.set('password',password,{
                    maxAge: 3001
                 });
                 this.setState({
                 	visible:false,
                 	confirmLoading:false
                 });
            }else{
                 message.error(res.data);
                 this.setState({
                     visible:false,
                     confirmLoading:false
                 });
            }
        });
      });

      setTimeout(() => {
        this.setState({
          visible: false,
          confirmLoading: false,
        });
      }, 2000);
    }
    handleCancel = () => {
      console.log('Clicked cancel button');
      this.setState({
        visible: false,
      });
    }
    
    saveMessage = (message) =>{
    	this.setState(message)
    }

    handleSubmitMessage=(e)=>{
      e.preventDefault();
      let form = this.userMessageFormRef;
      let username = cookie.getCookie('username');
      form.validateFields((err, values) => {
      	const { getFieldValue } = form; 
      	const email = getFieldValue('email');
      	const nickname = getFieldValue('nickname'); 
      	const residence = getFieldValue('residence'); 
      	const phone = getFieldValue('phone');
        if (!err) {
          console.log('Received values of form: ', values);
          axios.put('/v1/users/message',{
                residence:residence,
                username:username,
                newname:nickname,
                phone:phone,
                email:email
          }).then((res) => {
            if(typeof res.data === 'object'){
                let data = res.data;
                let _active = true;
                this.setState({
                    residence:data.residence,
                    nickname:data.username,
                    phone:data.phone,
                    email:data.email,
                    _active:_active
                });
                cookie.remove('username');
                cookie.set('username',data.username,{
                    maxAge: 3001
                });
              }else{
                  message.warning(res.data);   
              }
            }
          );
      }});

      }

    updateAvatar = (imageUrl) => {
       this.setState({
          avatar:imageUrl
       });
       window.location.href = '//localhost:3000/api/UserMessage';
    }

    render() {
    	const { visible, confirmLoading, ModalText } = this.state;
        return (
            <div>
            	<PicturesWall avatar={this.state.avatar} updateAvatar={this.updateAvatar}/>
            	<div  className={true === this.state._active ? '_active' : '_hidden'}>
                <Card title="个人信息" extra={<a href="#" onClick={this.onClick}>修改</a>} style={{ marginLeft: '100px' , width:300}}>
                    <p>姓名：{this.state.nickname}</p>
                    <p>住址：{this.state.residence}</p>
                    <p>电话：{this.state.phone}</p>
                    <p>邮箱: {this.state.email}</p>
                    <a href='javascript:void(0);' onClick={this.showModal}>修改密码</a>
                </Card>
                </div>
                <div className={true !== this.state._active ? '_active' : '_hidden'}>
                <WrappedUsermessageForm password={this.state.password} email={this.state.email} phone={this.state.phone} nickname={this.state.nickname}
                 residence={this.state.residence}
                 onClick={this.onClick} 
                 ref={(node)=>{this.userMessageFormRef=node}}
                 handleSubmitMessage={this.handleSubmitMessage}
                 />
                 </div>
                 <Modal title="请输入密码"
                   style={{top: '26%' , left: '131px' }}
                   visible={visible}
                   onOk={this.handleOk}
                   confirmLoading={confirmLoading}
                   onCancel={this.handleCancel}
                 >
                 <div style={{ marginLeft: '-25px' , marginRight: '60px' }}>
                  <ModifyPasswordForm ref={(node)=>{this.passwordForm=node}} />
                 </div>
                 </Modal>
            </div>
        );
    }
}

export default UserMessage;







