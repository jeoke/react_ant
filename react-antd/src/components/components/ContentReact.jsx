import React from 'react';
import { Carousel } from 'antd';
import './styles/ContentReact.css';
import BreacdcrumbCustom from './components/Breacdcrumb.jsx';
class ContentReact extends React.Component {

	constructor(props) {
		super(props);
	}
//走马灯待补
	render() {
		return (
		  <div>
			<BreacdcrumbCustom first='ReactJS'/>
			<Carousel autoplay vertical>
			  <div><h3>1</h3></div>
			  <div><h3>2</h3></div>
			  <div><h3>3</h3></div>
			  <div><h3>4</h3></div>
			</Carousel>
		  </div>
		);
	}
}

export default ContentReact;