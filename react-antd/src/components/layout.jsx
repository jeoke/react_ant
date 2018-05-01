import React from 'react';
import ReactDOM from 'react-dom';
import { Switch , BrowserRouter　as  Router , Route , Link } from 'react-router-dom';
import { Layout, Menu , Icon , Input , Avatar ,  Modal , message } from 'antd';
import '../styles/layout.css';
import Routes from './route.js';
import Complete from './components/components/Complete.jsx';
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const confirm = Modal.confirm;
import axios from 'axios';

//avatar 图片加载好设置路径

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    avatar:''
  }

  componentDidMount() {
    axios.get('/v1/users/avatar').then((res)=>{
         this.setState({
          avatar : res.data.avatarPath
        });
    });
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  
  logout= () =>{   
  axios.get('/logout').then((res)=>{
      window.location.href  = 'http://localhost:3000';
    });
  }

  destoryAcount = () => {
     confirm({
        title: '你确定要销毁账号么?',
        content: '销毁账号后只能以游客的身份登录',
        okText: '是',
        okType: 'danger',
        cancelText: '否',

        onOk(){
          axios.delete('/v1/UserMessage').then((res)=>{
                cookie.remove('username');
                cookie.remove('password');
                window.location.href = '//localhost:3000/register'
          }).catch(function(err) {
                message.error('请登录');
          });
        },
     });

  }

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" >
            <Menu.Item key="1">
             <Link to='/api/ContentHtml'>
              <Icon type="file" />
              <span>HTML</span>
              </Link>
            </Menu.Item>
     
            <Menu.Item key="2">
             <Link to='/api/ContentCss'>
              <Icon type="skin" />
              <span>CSS</span>
             </Link>
            </Menu.Item>
        
            <Menu.Item key="3">
             <Link to='/api/ContentJs'>  
              <Icon type="tag-o" />
              <span>原生js</span>
             </Link>
            </Menu.Item>
            <Menu.Item key="4">
             <Link to='/api/ContentMVC'>
              <Icon type="api" />
              <span>MVC框架</span>
             </Link>
            </Menu.Item>
            <Menu.Item key="5">
             <Link to='/api/ContentNodeJs'> 
              <Icon type="export" />
              <span>NodeJS</span>
             </Link>
            </Menu.Item>
             <Menu.Item key="6">
             <Link to='/api/DIYitem'>
              <Icon type="bulb" />
              <span>DIY</span>
             </Link>
            </Menu.Item>
             <Menu.Item key="7">
             <Link to='/api/knowledge'>
              <Icon type="bar-chart" />
              <span>知识体系构建</span>
             </Link>
            </Menu.Item>
             <Menu.Item key="8">
             <Link to='/api/peotry'>
              <Icon type="info" />
              <span>一首诗</span>
             </Link>
            </Menu.Item>
            <Menu.Item key="9">
             <Link to='/api/goal'>
              <Icon type="contacts" />
              <span>小目标</span>
             </Link>
            </Menu.Item>
             <Menu.Item key="10">
             <Link to='/api/AddArticle'>
              <Icon type="bulb" />
              <span>提交文章数据</span>
             </Link>
            </Menu.Item>
             <Menu.Item key="11">
             <Link to='/api/addknowledge'>
              <Icon type="bulb" />
              <span>提交诗文数据</span>
             </Link>
            </Menu.Item>
          </Menu>

        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 , position:'relative'}}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <Complete />
             <Menu
                mode="horizontal"
                className="avater"
             >
             <SubMenu title={<span><img src={this.state.avatar} style={{ width:'65px' , height:'50px' }} alt="头像" /></span>}>
                <MenuItemGroup title="用户中心">
                      <Menu.Item key="setting:1"> <Link to='/api/UserMessage'>个人信息</Link></Menu.Item>
                        <Menu.Item key="logout"><div  onClick = {this.logout}>退出登录</div></Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="设置中心">
                         <Menu.Item key="setting:2"><div onClick = {this.destoryAcount}>注销</div></Menu.Item>
                         <Menu.Item key="setting:3"><Link to='/api/proposal'>意见栏</Link></Menu.Item>
                         <Menu.Item key="setting:4"><a href='//localhost:3000/chartroom/index.html' target="_blank">在线沟通</a></Menu.Item>
                    </MenuItemGroup>
            </SubMenu>
            </Menu>
          </Header>
          <Content style={{ background: '#fff', padding: 24, margin: 0}}>
             <Routes/>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default SiderDemo;