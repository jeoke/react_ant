import React from 'react';
import ReactDOM from 'react-dom';
//import { renderRoutes } from 'react-router-config';
//import Loadable from 'react-loadable';
import 'normalize.css/normalize.css';
import Login from './components/login.jsx';
import Register from './components/register.jsx';
import Layout from './components/layout.jsx';
//import PropTypes from 'prop-types';
import './styles/app.css';
import { BrowserRouter ,  Switch ,　Route , Redirect} from 'react-router-dom';
//import routes from './routes';

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<BrowserRouter>
			<Switch>
			 <Route exact path='/' component={Login} />
			 <Route exact path='/register' component={Register} />
			 <Route exact path='/api' render={() => <Redirect to='/api/ContentHtml'/>}/>
			 <Route  path='/api' component={Layout}/>
			</Switch>
			</BrowserRouter>
		);
	}
}

//Loadable.preloadReady().then(() => {
ReactDOM.render(<App/>,document.getElementById('app'));
//});

module.hot.accept();