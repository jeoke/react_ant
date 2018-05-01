import React from 'react';
import { Route , Switch } from 'react-router-dom';
import ContentCss from './components/ContentCss.jsx';
import ContentHtml from './components/ContentHtml.jsx';
import ContentJs from './components/ContentJs.jsx';
import ContentMVC from './components/ContentMVC.jsx';
import ContentNodeJs from './components/ContentNodeJs.jsx';
import AddArticle from './components/AddArticle.jsx';
import DIYitem from './components/DIYitem.jsx';
import knowledge from './components/knowledge.jsx';
import addknowledge from './components/addknowledge.jsx';
import peotry from './components/peotry.jsx';
import goal from './components/goal.jsx';
import UserMessage from './components/UserMessage.jsx';
import Proposal from './components/proposal.jsx';

 class Routes extends React.Component {
 
 	constructor(props) {
 		super(props);
 	}
 
 	render() {
 		return (
 			<Switch>
 			  <Route exact path='/api/ContentHtml' component={ContentHtml}/>
 			  <Route path='/api/ContentCss' component={ContentCss}/>
 			  <Route path='/api/ContentJs' component={ContentJs}/>
 			  <Route path='/api/ContentMVC' component={ContentMVC}/>
 			  <Route path='/api/ContentNodeJs' component={ContentNodeJs}/>
 			  <Route path='/api/AddArticle' component={AddArticle}/>
 			  <Route path='/api/DIYitem' component={DIYitem}/>
 			  <Route path='/api/knowledge' component={knowledge}/>
 			  <Route path='/api/addknowledge' component={addknowledge}/>
 			  <Route path='/api/peotry' component={peotry}/>
 			  <Route path='/api/goal' component={goal}/>
 			  <Route path='/api/UserMessage' component={UserMessage} />
 			  <Route path='/api/proposal' component={Proposal}/>
 			</Switch>
 		);
 	}
 }
 
 export default Routes;

////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time
/*
const AuthExample = () => (
  <Router>
    <div>
      <AuthButton />
      <ul>
        <li>
          <Link to="/public">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Route path="/public" component={Public} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/protected" component={Protected} />
    </div>
  </Router>
);

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default AuthExample;
*/