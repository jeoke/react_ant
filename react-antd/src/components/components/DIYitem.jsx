import React from 'react';
import ReactDOM from 'react-dom';
import BallMove from './components/ball.jsx';
import BreacdcrumbCustom from './components/Breacdcrumb.jsx';
import './styles/DIYitem.css';

class DIYitem extends React.Component{
    	constructor(props) {
    		super(props);
    	}
    
    	render() {
    		return (
    		  <div>
    			<BreacdcrumbCustom first='DIY'/>
                <BallMove height='540'  width='1050' />
                <div className='container'>
                <div>
                <h3>node+jquery+socket.io小聊天室</h3>
                 <ul>
                      <li>node读取文件</li>
                      <li>websocket通信机制</li>
                      <li>socket.io API关于聊天室安排更详细的理解</li>
                      <li>jquery实现DOM操作</li>
                      <li>聊天室所需要的标识数据及交互</li>
                 </ul>
                </div>
                <div>
                <h3>vue简单的前端实现</h3>
                  <ul>
                      <li>vue的组件结构跟路由的安排</li>
                      <li>vue常用指令</li>
                      <li>vue为什么被称为MVVC框架</li>
                      <li>vue的局部组件和全局组件及VM对象</li>
                      <li>vue进行的数据交互</li>
                  </ul>
                  <p>DIY地址：https:github.com/jeoke</p>
                </div>
                <div> 
                <h3>webpack4/react/eslint脚手架</h3>
                   <ul>
                      <li>webpack4的优点</li>
                      <li>为什么不用create-react-app脚手架</li>
                      <li>webpack4使用注意事项</li>
                      <li>webpck4如何与express结合使用</li>
                   </ul>
                </div>
                <div>
                <h3>react制作小简历</h3>
                   <ul>
                      <li>异步编程</li>
                      <li>css in jsx 简单的实现</li>
                      <li>raw-loader的作用</li>
                      <li>react操作DOM</li>
                      <li>不要使用react自带脚手架</li>
                   </ul>
                </div>
                <div>
                <h3>github + hexo生成的博客</h3>
                <li>markdown语法</li>
                <li>github是什么</li>
                <li>内容简单</li>
    		    </div>
    		    </div>
    		  </div>
    		);
    	}
}
export default DIYitem;