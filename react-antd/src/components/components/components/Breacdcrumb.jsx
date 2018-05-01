import React from 'react';
import { Breadcrumb, Switch, Icon } from 'antd';
import { Link } from 'react-router-dom';


class BreacdcrumbCustom extends React.Component {

	constructor(props) {
		super(props);
		this.state = {

		}
	}
    
	render() {
		const first = <Breadcrumb.Item>{this.props.first}</Breadcrumb.Item> || '';
		return (
			<Breadcrumb style={{ margin:'12px 0' }}>
			  <Breadcrumb.Item><Link to='/api/contenthtml'>首页</Link></Breadcrumb.Item>
			   {first}
			</Breadcrumb>
		);
	}
}

export default BreacdcrumbCustom;