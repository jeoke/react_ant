import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => {
	return <div>loading</div>;
};
 const routesConfig = [{
 	routes:[{
 		path:'/',
 		exact: true,
 		component: Loadable({
 			loader:() => import('./components/login.jsx'),
 			loading: Loading
 		})
 	},{
 		path:'/register',
 		component:Loadable({
 			loader:() => import('./components/register.jsx'),
 			loading: Loading
 		})
 	}]
 }];

 export default routesConfig;
