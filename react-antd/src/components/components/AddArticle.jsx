import React from 'react';
import axios from 'axios';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

class AddArticleForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const { getFieldValue } = this.props.form; 
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const article = getFieldValue('article');
        const title = getFieldValue('title');
        const avatar = getFieldValue('avatar');
        const href = getFieldValue('href');
        const current = getFieldValue('current');
        const content = getFieldValue('content');
        const description = getFieldValue('description');
        axios.post('/v1/css/article',{
          article:article,
          title:title,
          avatar:avatar,
          href:href,
          current:current,
          content:content,
          description:description
        }).then(function(res) {
          if(res.data){
          window.location.href  = 'http://localhost:3000/api/ContentCSS';
        }
        })
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;

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
      <Form onSubmit={this.handleSubmit} className="register-form">
        <FormItem
          {...formItemLayout}
          label="Article"
        >
          {getFieldDecorator('article', {
            rules: [{
              type: 'string', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="title"
        >
          {getFieldDecorator('title', {
            rules: [{
              required: true, message: 'Please input your title!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="avatar"
        >
          {getFieldDecorator('avatar', {
            rules: [{
              type: 'string' , message: 'Please confirm your avatar address!',
            }, {
              required: true , message: 'Please input your avatar!'
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              href&nbsp;
              <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('href', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="current"
        >
          {getFieldDecorator('current', {
            rules: [{ type: 'string', required: true, message: 'Please input current!' }],
          })(
             <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="description"
        >
          {getFieldDecorator('description', {
            rules: [{ required: true, type:'string', message: 'Please input your phone number!' }],
          })(
             <TextArea placeholder="description" autosize={{ minRows: 2, maxRows: 3 }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="content"
        >
          {getFieldDecorator('content', {
            rules: [{ required: true, type:'string', message: 'Please input website!' }],
          })(
           <TextArea rows={4} />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Register</Button>
        </FormItem>
      </Form>
    );
  }
}

const AddArticle = Form.create()(AddArticleForm);

export default AddArticle;
