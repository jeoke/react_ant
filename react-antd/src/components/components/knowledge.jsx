import React from 'react';
import { Carousel , Modal , Button } from 'antd';
import BreacdcrumbCustom from './components/Breacdcrumb.jsx';
import 'animate.css';
import ReactDOM from 'react-dom';
import echarts from 'echarts';

class Knowledge extends React.Component {

	constructor(props) {
		super(props);
      this.state = {
	  		loading: false,
	  		visible: false,
	  }
	}

    componentDidMount() {
    	let myChart = echarts.init(ReactDOM.findDOMNode(this.knowledgegraph));
    	myChart.setOption({
 			   backgroundColor: '#ccc',
   			   title: {
    	       text: '知识',
  		       left: 'center',
               top: 20,
               textStyle: {
                   color: '#fff'
               }
           },

           tooltip : {
               trigger: 'item',
               formatter: "{a} <br/>{b} : {c} ({d}%)"
           },

           visualMap: {
               show: false,
               min: 80,
               max: 600,
               inRange: {
                   colorLightness: [0, 1]
               }
           },
           series : [
               {
                   name:'访问来源',
                   type:'pie',
                   radius : '55%',
                   center: ['50%', '50%'],
                   data:[
                       {value:335, name:'时间管理'},
                       {value:310, name:'经济学视角'},
                       {value:274, name:'美的视角'},
                       {value:235, name:'运动'},
                       {value:400, name:'生活'},
                       {value:400, name:'随便看看'}
                   ].sort(function (a, b) { return a.value - b.value; }),
                   roseType: 'radius',
                   label: {
                       normal: {
                           textStyle: {
                               color: 'rgba(241, 241, 241, 1)'
                           }
                       }
                   },
                   labelLine: {
                       normal: {
                           lineStyle: {
                               color: 'rgba(241, 241, 241, 1)'
                           },
                           smooth: 0.2,
                           length: 10,
                           length2: 20
                       }
                   },
                   itemStyle: {
                       normal: {
                           color: '#859491',
                           shadowBlur: 200,
                           shadowColor: 'rgba(97, 111, 108, 0.3)'
                       }
                   },
       
                   animationType: 'scale',
                   animationEasing: 'elasticOut',
                   animationDelay: function (idx) {
                       return Math.random() * 200;
                   }
               }
           ]
       });
    }
//走马灯待补
	render() {
		const { visible, loading } = this.state;
		return (
		  <div>
			<BreacdcrumbCustom first='knowledge'/>
			<div className='slideInUp animated' ref={(node) => {this.knowledgegraph = node}} style={{height:'490px',width:'1000px' , margin:'0'}}>
            </div>
		  </div>
		);
	}
}

export default Knowledge;
