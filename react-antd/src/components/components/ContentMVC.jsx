import React from 'react';
import { Tabs , Icon } from 'antd';
const TabPane = Tabs.TabPane;
import BreacdcrumbCustom from './components/Breacdcrumb.jsx';
import './styles/ContentMVC.css'; 
class ContentVue extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
		<div>
            <BreacdcrumbCustom first='MVC'/>
			<Tabs defaultActiveKey="1">
			  <TabPane tab={<span><Icon type="desktop" />Tab 1</span>} key="1">
			    <div> 
			    <h2>MVC</h2>
			      <p>MVC总纲:模板,视图,控制器</p>
			      <h3>Backbone.js</h3>
			      <ul>
			      	<li>2010年发布最初版本</li>
			      	<li>在最初的技术，前端是Backbone + jquery或者underscore。</li>
                    <li>Backbone更多的是处理数据，灵活，小巧，缺点是不够强大</li>
			      </ul>
			      <h3>angular.js</h3>
			      <ul>
			        <li>诞生于2009年</li>
			        <li>采用scope作用域绑定的原理,克服了将view层与model绑定</li>
			        <li>在js中使用Controller控制model的更改</li>
			        <li>通过指令将view层与model双向绑定</li>
			        <li>严谨的说，它并不是严格的MVC框架</li>
			      </ul>
			    </div>
			    <h3>react.js</h3>
			    <ul>
			      <li>于2013年5月facebook开源</li>
			      <li>react也经常被认为是mvc库，但是它的核心理念是render(UI),组件化，虚拟DOM，状态控制，生命周期</li>
			      <li>render(UI),就是jsx语法，在js里写html,而这里的html是抽象出来,也就是虚拟DOM，将DOM抽象出来了，就形成了组件</li>
			      <li>组件化，一套的状态有自己内部的一套逻辑，也可以通过父组件传入属性更改组件的显示</li>
			      <li>状态控制，一句话解释，js必须符合预期行为</li>
			      <li>生命周期规定了，当状态改变时，做什么</li>
			      <li>抽象的布置，和精准的控制使整个结构清晰，但是react全家桶结合利用是极为复杂的</li>
			    </ul>
			   <h3>vue.js</h3>
			   <ul>
			     <li>vue紧跟react在2014年推出</li>
			     <li>vue的特点就是简单，容易入手，但是当整个页面复杂的时候，有些问题就不容易看出来了</li>
			     <li>因为它在组件里上下传递的指令，父属性的传递需要隔着一层控制器</li>
			     <li>vuex状态控制是组件间共享的，而并非是放在全局中，嵌套过深和复杂，状态过多难以维护，假如在全局中，状态维护就可能更加困难</li>
			     <li>生命周期的设计十分清晰和简单</li>
			     <li>文档齐全，中文版</li>
			     <li>vue脚手架对新手十分友好</li>
			   </ul>
			  </TabPane>
			  <TabPane tab={<span><Icon type="flag" />Tab 2</span>} key="2">
			      <h3>angular大而全，受到很多人的推崇</h3>
			      <p>
			      	angular分为angular.js和angular,angular使用Typescript编写<br/>
			      	去github上你会看到它只有30.9k的star,其实只是因为它不只一个版本<br/>
			      	<h4>angular生态</h4>
			      	<ul>
			      	  <li>ionic框架</li>
			      	  <li>Supersonic</li>
			      	  <li>UI Grid</li>
			      	  <li>Angular UI Bootstrap</li>
			      	</ul>
			      </p>
			  </TabPane>
			  <TabPane tab={<span><Icon type="facebook" />Tab 3</span>} key="3">
			      <h3>react的理念是组件化，状态管理</h3>
			      <p>
			      	react中为了实现组件化，react-router4中的路由也变成了组件，this.refs改变了方案<br/>
			      	状态管理就不得不说到函数式编程，redux<br/>
			      	以下生态第四行下所用的依赖是为贯彻react理念的全家桶，也是ssr所需要的一些中间件。
			      	<h4>react生态</h4>
			      	<ul>
			      	  <li>react-native框架</li>
			      	  <li>antd</li>
			      	  <li>antd-pro</li>
			      	  <li>react-router-config</li>
			      	  <li>react-router</li>
			      	  <li>react-loadable</li>
			      	  <li>react-redux</li>
			      	  <li>react-helmet</li>
			      	  <li>redux-thunk</li>
			      	  <li>history</li>
			      	</ul>
			      </p>
			  </TabPane>
			  <TabPane tab={<span><Icon type="dingding" />Tab 2</span>} key="4">
			      <h3>vue是一个MVVC框架，在国内极受欢迎</h3>
			      <p>	
			      	vue在国内的公司使用极多<br/>
			      	有人说学会了vue就相当于学会了react和angular,然而他们并没有去学angular和react<br/>
			      </p>
			      	<h4>vue生态</h4>
			      	<ul>
			      	  <li>weex框架</li>
			      	  <li>Element-UI</li>
			      	  <li>BootstrapVue</li>
			      	  <li>Nuxt.js</li>
			      	</ul>
			      <p>注：以上只是简单的概述，因为这些框架还涉及具体使用和许多github上的插件等。</p>
			  </TabPane>
			</Tabs>
		</div>
		);
	}
}

export default ContentVue;
