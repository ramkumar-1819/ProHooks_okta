import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';
import Home  from './Components/Home'
import Search from './Components/Search';

function App() {
  //This is home component and conatin link to search component
  //Here in this component we use okta developer api for user authentication
  return (
    <div className="App">
  <Router>
    <header className="header"> 
      <div>ProHooks</div>
      <ul className="menu"><li><Link to="/">Home</Link></li><li><Link to="/search">Search</Link></li></ul>
    </header>
    <Security issuer='https://dev-07992770.okta.com/oauth2/default'
              clientId='0oakladyvMoGOUqNU5d6'
              redirectUri={window.location.origin + '/callback'}
              pkce={true}>
      <Route path='/' exact={true} component={Home}/>
      <SecureRoute path='/search' exact={true} component={Search}/>
      <Route path='/callback' component={LoginCallback}/>
    </Security>
  </Router>
</div>
  );
}

export default App;
