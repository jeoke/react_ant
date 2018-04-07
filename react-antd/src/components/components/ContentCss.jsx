import React from 'react';
import { List, Avatar, Icon } from 'antd';
import BreacdcrumbCustom from './components/Breacdcrumb.jsx';

const listData = [];
for (let i = 0; i < 10; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const pagination = {
  pageSize: 5,
  defaultCurrent: 1,
  total: listData.length,
  onChange: ((page) => {
    this.setState = {
      current: page
    }  //改变数据源
  }),
};

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);


class ContentCss extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BreacdcrumbCustom first='css'/>
        <List
            itemLayout="vertical"
            size="large"
            pagination={pagination}
            dataSource={listData}
            rowKey = '5'
            renderItem={item => (
                          <List.Item
                             key={item.title}
                             actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                             extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                          >
                          <List.Item.Meta
                             avatar={<Avatar src={item.avatar} />}
                             title={<a href={item.href}>{item.title}</a>}
                             description={item.description}
                           />
                              {item.content}
                          </List.Item>)}
            />
      </div>
    );
  }
}

export default ContentCss;