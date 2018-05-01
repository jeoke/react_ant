import React from 'react';
import { List, Avatar, Icon , Pagination } from 'antd';
import axios from 'axios';
import BreacdcrumbCustom from './components/Breacdcrumb.jsx';
import '../../styles/ContentCss.css';
 
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

//根据换页请求过滤数据

class ContentCss extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData:[],
      current: 1
    }
  }

  componentDidMount() {
     axios.get('/v1/css/article',{
         params: {
           article:'css',
           current: 1
         }
     }).then((res) => {
        let newListData = this.state.listData;
        for(var i=0;i < res.data.length;i++){
          newListData.push(res.data[i]);
          this.setState({
            listData:newListData,
            current: res.data[i].current
          });
        }
    });

  }

  onChange = ((page) => {
      axios.get('/v1/css/article',{
        params: {
           article:'css',
           current: page
         }
      }).then((res) => {
         let newListData = [];
         for(var i=0;i < res.data.length;i++){
           newListData.push(res.data[i]);
           console.log(res.data[i].current);
             this.setState({
               listData:newListData,
               current: res.data[i].current
             });
         };
    })
  });

  render() {
    return (
      <div>
        <BreacdcrumbCustom first='css'/>
        <List
            itemLayout="vertical"
            size="large"
            dataSource={this.state.listData}
            renderItem={item => (
                          <List.Item
                             key={item.title}
                             actions={[<IconText type="star-o" text={"156"} />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                             extra={<div  alt="logo" className={'css ' + item.avatar} />}
                          >
                          <List.Item.Meta
                             avatar={<Avatar src={item.avatar} />}
                             title={<a href={item.href}>{item.title}</a>}
                             description={item.description}
                           />
                              {item.content}
                          </List.Item>)}
            />
             <Pagination style={{ float:'right' }} defaultCurrent={1} total={10} pageSize={5} onChange={this.onChange} />
      </div>
    );
  }
}

export default ContentCss;