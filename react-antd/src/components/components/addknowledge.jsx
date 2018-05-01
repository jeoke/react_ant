import React from 'react';
import axios from 'axios';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

class addknowledgeForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const { getFieldValue } = this.props.form; 
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const article = getFieldValue('article');
        const title = getFieldValue('title');
        const mark = getFieldValue('mark');
        const content = getFieldValue('content');
        const author = getFieldValue('author');
        axios.post('/v1/poetry/article',{
          article:article,
          title:title,
          mark:mark,
          content:content,
          author:author
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
          label="author"
        >
          {getFieldDecorator('author', {
            rules: [{
              required: true, message: 'Please input your title!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="mark"
        >
          {getFieldDecorator('mark', {
            rules: [{ type: 'string', required: true, message: 'Please input current!' }],
          })(
             <Input />
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
          <Button type="primary" htmlType="submit">提交信息</Button>
        </FormItem>
      </Form>
    );
  }
}

const addknowledge = Form.create()(addknowledgeForm);

export default addknowledge;
