import React from 'react';
import { Route , Switch } from 'react-router-dom';
import ContentCss from './components/ContentCss.jsx';
import ContentHtml from './components/ContentHtml.jsx';
import ContentJs from './components/ContentJs.jsx';
import ContentVue from './components/ContentVue.jsx';
import ContentReact from './components/ContentReact.jsx';
import ContentNodeJs from './components/ContentNodeJs.jsx';
 class Routes extends React.Component {
 
 	constructor(props) {
 		super(props);
 	}
 
 	render() {
 		return (
 			<Switch>
 			  <Route exact path='/app/ContentHtml' component={ContentHtml}/>
 			  <Route path='/app/ContentCss' component={ContentCss}/>
 			  <Route path='/app/ContentJs' component={ContentJs}/>
 			  <Route path='/app/ContentVue' component={ContentVue}/>
 			  <Route path='/app/ContentReact' component={ContentReact}/>
 			  <Route path='/app/ContentNodeJs' component={ContentNodeJs}/>
 			</Switch>
 		);
 	}
 }
 
 export default Routes;
