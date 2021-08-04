import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Checkout from './components/checkout/Checkout';
import Header from './components/header/Header';
import { useEffect } from 'react';
import { auth } from './firebase/firebase';
import { useContextState } from './context/Provider';

const App = () => {

  const [{}, dispatch] = useContextState();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS', authUser);
      if(authUser){
        dispatch({
          type: 'USER_LOGIN',
          user: authUser
        })
      } else {
        dispatch({
          type: 'USER_LOGIN',
          user: null
        })
      }
    });
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header/>
            <Home/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
