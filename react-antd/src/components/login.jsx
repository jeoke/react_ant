import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox , message } from 'antd';
import '../styles/login.css';
import axios from 'axios';
import '../helper/cookie.js';
const FormItem = Form.Item;
class NormalLoginForm extends React.Component {
 
   handleSubmit = (e) => {
     e.preventDefault();
     const { getFieldValue } = this.props.form; 
     this.props.form.validateFields((err, values) => {
       if (!err) {
         const user = getFieldValue('userName');
         const password = getFieldValue('password'); 
         axios.post('/signup',{
             user:user,
             password:password
         }).then(function(res) {
           if(typeof res.data === 'object'){
              if (getFieldValue('remember')) {
                 cookie.set('username',user,{
                    maxAge: 3001
                 });
                 cookie.set('password',password,{
                    maxAge: 3001
                 });
              }
               window.location.href = 'http://localhost:3000/api';
           }else{
            message.error(res.data);
           }
         })
       }
       });
   }
 
  componentDidMount() {
      const { setFieldsValue } = this.props.form; 
      if(document.cookie){
          setFieldsValue({
            'userName': cookie.getCookie('username'),
            'password': cookie.getCookie('password')
          })
      }
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住我</Checkbox>
          )}
          <a className="login-form-forgot" href="">忘记密码</a>
         <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
          <Link to='/register'><Button type="primary" htmlType="submit" className="login-form-button">
            注册
            </Button>
          </Link>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;