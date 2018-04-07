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
		title:{
			text: 'js基础知识分类'
		},
		legend: {
		    data:['重要程度']
		},
		tooltip: {},
		xAxis: {
			data: ['js语法','dom操作','js对象','window对象','ajax','web安全','js的特点','设计模式','数据结构'
			]
		},
		yAxis: {},
		series:[{
			name:'重要程度',
			type:'bar',
			data:[ 10 , 20 , 5 , 5 , 8 , 3 , 9 , 20 , 20 ]
		}]
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
