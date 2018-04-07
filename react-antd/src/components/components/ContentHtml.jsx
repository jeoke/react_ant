import React from 'react';
import BreacdcrumbCustom from './components/Breacdcrumb.jsx';
import StepTip from './components/stepTip.jsx';
class ContentHtml extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
              <BreacdcrumbCustom first='html'/>
              <StepTip />
			</div>
		);
	}
}

export default ContentHtml;