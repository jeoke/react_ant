import React from 'react';
import ReactDOM from 'react-dom';
import echarts from 'echarts';
import BreacdcrumbCustom from './components/Breacdcrumb.jsx';

class ContentJs extends React.Component {

	constructor(props) {
		super(props);
	}
    
    componentDidMount() {
    let myChart = echarts.init(ReactDOM.findDOMNode(this.jsgraph));
    myChart.setOption({
				title: {
		            text: 'js基础和应用方向图'
		        },
		        tooltip: {
		            trigger: 'item',
		            triggerOn: 'mousemove'
		        },
		       series: [
                        {
                        type: 'sankey',
                        layout:'none',
                        data: [
                            {name:'javascript'},
                            {name:'javascript基础语法'},
                            {name:'数据结构与算法'},
                            {name:'javascript设计模式'},
                            {name:'网络协议'},
                            {name:'自动化测试'},
                            {name:'DOM,BOM,webAPI调用'},
                            {name:'web安全'},
                            {name:'几何,线性代数'},
                            {name:'统计学'},
                            {name:'计算机图形学'},
                            {name:'其他工具的应用'},
                            {name:'网页端'},
                            {name:'移动端'},
                            {name:'后端'},
                            {name:'hybrid app'},
                            {name:'nosql'},
                            {name:'WebGL'},
                            {name:'深度学习'},
                            {name:'框架组织'},
                            {name:'库的设计'},
                            {name:'小程序'},
                            {name:'游戏'}
                        ],
                        links:[
                            {source:'javascript',target:'javascript基础语法',value:15},
                            {source:'javascript',target:'数据结构与算法',value:20},
                            {source:'javascript',target:'javascript设计模式',value:20},
                            {source:'javascript',target:'自动化测试', value:8},
                            {source:'javascript',target:'DOM,BOM,webAPI调用',value:15},
                            {source:'javascript',target:'web安全',value:2},
    //                        {source:'javascript',target:'统计学',value:5},
        //                    {source:'javascript',target:'几何,线性代数',value:5},
                            {source:'javascript',target:'WebGL',value:10 },
                            {source:'javascript基础语法',target:'网页端',value:2},
                            {source:'javascript基础语法',target:'移动端',value:2},
                            {source:'javascript基础语法',target:'后端',value:5},
                            {source:'javascript基础语法',target:'hybrid app',value:2.3},
                            {source:'javascript基础语法',target:'nosql',value:0.2},
                            {source:'javascript基础语法',target:'WebGL', value:1},
                            {source:'javascript基础语法',target:'深度学习',value:1},
                            {source:'javascript基础语法',target:'框架组织', value:1},
                            {source:'javascript基础语法',target:'库的设计',value:2.5},
                            {source:'javascript基础语法',target:'小程序', value:1},
                            {source:'javascript基础语法',target:'游戏', value:1},
                            {source:'数据结构与算法',target:'网页端',value:1},
                            {source:'数据结构与算法',target:'移动端',value:1},
                            {source:'数据结构与算法',target:'后端',value:3},
                            {source:'数据结构与算法',target:'hybrid app',value:1},
                            {source:'数据结构与算法',target:'WebGL',value:4},
                            {source:'数据结构与算法',target:'深度学习',value:3},
                            {source:'数据结构与算法',target:'库的设计',value:3},
                            {source:'数据结构与算法',target:'小程序',value:1},
                            {source:'数据结构与算法',target:'游戏',value:3},
                            {source:'javascript设计模式',target:'网页端',value:2},
                            {source:'javascript设计模式',target:'移动端',value:1},
                            {source:'javascript设计模式',target:'后端',value:1},
                            {source:'javascript设计模式',target:'hybrid app',value:1},
                            {source:'javascript设计模式',target:'框架组织',value:2},
                            {source:'javascript设计模式',target:'库的设计',value:11.5},
                            {source:'javascript设计模式',target:'小程序', value:1},
                            {source:'javascript设计模式',target:'游戏',value:0.5},
                            {source:'自动化测试',target:'网页端',value:1},
                            {source:'自动化测试',target:'移动端',value:1},
                            {source:'自动化测试',target:'后端',value:1},
                            {source:'自动化测试',target:'hybrid app',value:1},
                            {source:'自动化测试',target:'WebGL',value:1},
                            {source:'自动化测试',target:'深度学习',value:1},
                            {source:'自动化测试',target:'库的设计',value:1},
                            {source:'自动化测试',target:'游戏',value:1},
                            {source:'DOM,BOM,webAPI调用',target:'网页端',value:2},
                            {source:'DOM,BOM,webAPI调用',target:'移动端',value:2},
                            {source:'DOM,BOM,webAPI调用',target:'hybrid app',value:4},
                            {source:'DOM,BOM,webAPI调用',target:'WebGL',value:1},
                            {source:'DOM,BOM,webAPI调用',target:'小程序',value:2},
                            {source:'DOM,BOM,webAPI调用',target:'库的设计',value:1},
                            {source:'DOM,BOM,webAPI调用',target:'游戏',value:3},
                            {source:'web安全',target:'网页端',value:0.5},
                            {source:'web安全',target:'移动端',value:0.5},
                            {source:'web安全',target:'hybrid app',value:0.8},
                            {source:'web安全',target:'游戏',value:1.2},
                            {source:'统计学',target:'深度学习',value:5},
                            {source:'几何,线性代数',target:'WebGL',value:5},
                            {source:'计算机图形学',target:'WebGL', value:5}
                        ],
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#aaa'
                    }
                },
                lineStyle: {
                    normal: {
                        curveness: 0.8
                    }
                }
            }
        ]
		       
	});
    }
	render() {
		return (
			<div>
				<BreacdcrumbCustom first='js'/>
				<div ref={(node) => {this.jsgraph = node}} style={{height:'490px',width:'1000px' , margin:'0'}}></div>
		    </div>
		);
	}
}

export default ContentJs;
