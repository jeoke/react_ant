import React from 'react';
import { Tree, Icon } from 'antd';
const TreeNode = Tree.TreeNode;
import BreacdcrumbCustom from './components/Breacdcrumb.jsx';
import './styles/ContentHtml.css';
import htmlAPI from '../../img/html.png';
class ContentHtml extends React.Component {

	constructor(props) {
		super(props);
	}
 
   onSelect = (selectedKeys, info) => {
   	if (selectedKeys[0] === '0-1') {
   		window.location.hash = '#xhtml';
   	}
   	if (selectedKeys[0] === '0-2') {
   		window.location.hash = '#html5';
   	}
   }

	render() {

		return (
			<div className='htmlInfo'>
              <BreacdcrumbCustom first='html'/>
              <div style={{ float:'left' }}>
              <Tree
                showIcon
                defaultExpandAll
                defaultSelectedKeys={['0-0-0']}
                onSelect={this.onSelect}
              >
                <TreeNode icon={<Icon type='smile-o' />} title='HTML' key='0-0'>
                  <TreeNode icon={<Icon type='meh-o' />} title='语义化' key='0-0-0' />
                  <TreeNode icon={<Icon type='meh-o' />} title='iframe和map' key='0-0-2' />
                  <TreeNode icon={<Icon type='meh-o' />} title='表单' key='0-0-3' />
                  <TreeNode icon={<Icon type='meh-o' />} title='默认样式' key='0-0-4' />3
                </TreeNode>
             <TreeNode icon={<Icon type='smile-o' />} title='XHTML' key='0-1'>
                  <TreeNode
                    icon={({ selected }) => (
                      <Icon type={selected ? 'frown' : 'frown-o'} />
                    )}
                    title='文档声明和meta'
                    key='0-0-1'
                  />
                  <TreeNode icon={<Icon type='meh-o' />} title='更严格的HTML' key='0-1-2' />
                </TreeNode>
                 <TreeNode icon={<Icon type='smile-o' />} title='HTML5' key='0-2'>
                  <TreeNode icon={<Icon type='meh-o' />} title='canvas' key='0-2-1' />
                  <TreeNode icon={<Icon type='meh-o' />} title='存储' key='0-2-2' />
                  <TreeNode icon={<Icon type='meh-o' />} title='web worker' key='0-2-3' />
                  <TreeNode icon={<Icon type='meh-o' />} title='更丰富的webAPI' key='0-2-4' />
                </TreeNode>
              </Tree>
              </div>
              <div style={{ float:'left' , width:'590px' , marginLeft: '50px' }}>
                   <h3>html</h3>
                   <h4>语义化</h4>
                   <p>作为超文本标记语言，和xml不同的是，xml的标签是承载数据的，而html是用来描述网页的,就像你正在看的这段，虽然语义化不是很良好，但是不是一大段杂乱的文字<br/>
                   语义化良好的标签会优先被搜索引擎收录<br/>
                   html框架和页面内自定区域的锚点也是html的一大特色<br/>
                   iframe能实现以下等功能
                   <ul>
                   	 <li>websocket不可用时替代使用的长连接</li>
                   	 <li>跨域通信</li>
                   	 <li>网页调起客户端应用</li>
                   	 <li>文件无刷新上传</li>
                   </ul>
                   map可在图片中添加锚点，是除标签外一个实用的作用<br/>
                   html每个标签拥有默认样式，是为了在css不生效的情况下更好的描述页面内容<br/>
                   </p>
                   <h3><a name='xhtml'>XHTML</a></h3>
                   <p>XHTML是更为严格的html,有特殊的文档声明来规范浏览器行为<br/>
                   html文档声明，meta标签对解释和规范浏览器行为有细微的差别，善用会起到意想不到的效果,比如seo优化，响应式布局等<br/>
                   在html刚出现的时候，开发人员对它的重视程度不足，所以才有了XHMTML.保持良好的html书写习惯,统一浏览器规范，对于维护和开发而言是水平的提升
                   </p>
                   <h3><a name='html5'>HTML5</a></h3>
                	<p>HTML5的推出,使得浏览器有了更多的可能<br/>
               		 常说HTML5新特性，习惯之后你会发现它其实已经不新了,只是深度的问题<br/>
               		 canvas和javascript的结合将浏览器延伸到了可视化和WebGL(三维图像)的领域<br/>
               		 地理定位，音频，视频，web worker等,这是W3C文档对浏览器常用功能所需特性介绍<br/>
               		 其实还有更多的内容，不过已经不属于标签的范畴了,而是webAPI的领域<br/>
               		</p>
                  <img src={htmlAPI} /> 
              </div>
			</div>
		);
	}
}

export default ContentHtml;