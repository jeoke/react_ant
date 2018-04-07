import React from 'react';
import { Switch ,BrowserRouter　as Route , Link ,Router } from 'react-router-dom';
import { Layout, Menu, Icon , Input , Avatar } from 'antd';
import '../styles/layout.css';
import avater from '../img/avater.png';
import Routes from './route.js';
import Complete from './components/components/Complete.jsx';
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
             <Link to='/app/ContentHtml'>
              <Icon type="file" />
              <span>HTML</span>
              </Link>
            </Menu.Item>
          <SubMenu
              key="sub1"
              title={<span><Icon type="tag-o" /><span>CSS</span></span>}
            >
            <Menu.Item key="2">
             <Link to='/app/ContentCss'>
              <span>Sass</span>
             </Link>
            </Menu.Item>
            <Menu.Item key="3">
             <Link to='/app/ContentCss'>
              <span>Stylus</span>
             </Link>
            </Menu.Item>
             <Menu.Item key="4">
              <Link to='/app/ContentCss'>
               <span>Postcss</span>
              </Link>
             </Menu.Item>
            </SubMenu>
            <Menu.Item key="5">
             <Link to='/app/ContentJs'>  
              <Icon type="bars" />
              <span>原生js</span>
             </Link>
            </Menu.Item>
            <Menu.Item key="6">
             <Link to='/app/ContentVue'>
              <Icon type="paper-clip" />
              <span>VueJS</span>
             </Link>
            </Menu.Item>
            <Menu.Item key="7">
             <Link to='/app/ContentReact'> 
              <Icon type="google" />
              <span>ReactJS</span>
             </Link>
            </Menu.Item>
             <Menu.Item key="8">
             <Link to='/app/ContentNodeJs'>
              <Icon type="bulb" />
              <span>NodeJS</span>
             </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
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
             <SubMenu title={<span><img src={avater} style={{ width:'50px' , height:'50px' }} alt="头像" /></span>}>
                <MenuItemGroup title="用户中心">
                    <Menu.Item key="setting:1">你好</Menu.Item>
                        <Menu.Item key="setting:2">个人信息</Menu.Item>
                        <Menu.Item key="logout"><span>退出登录</span></Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="设置中心">
                         <Menu.Item key="setting:3">个人设置</Menu.Item>
                         <Menu.Item key="setting:4">系统设置</Menu.Item>
                    </MenuItemGroup>
            </SubMenu>
            </Menu>
          </Header>
 
             <Routes/>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default SiderDemo;