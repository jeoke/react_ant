import React from 'react';
import { Tabs , Icon } from 'antd';
const TabPane = Tabs.TabPane;
import BreacdcrumbCustom from './components/Breacdcrumb.jsx';

class ContentVue extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
		<div>
            <BreacdcrumbCustom first='VueJs'/>
			<Tabs defaultActiveKey="1">
			  <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">
			    Tab 1
			  </TabPane>
			  <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">
			    Tab 2
			  </TabPane>
			  <TabPane tab={<span><Icon type="android" />Tab 3</span>} key="3">
			    Tab 3
			  </TabPane>
			</Tabs>
		</div>
		);
	}
}

export default ContentVue;
