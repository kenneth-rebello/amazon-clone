import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";

import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Checkout from './components/checkout/Checkout';
import Payment from './components/payment/Payment';

import { useContextValue } from './context/Provider';
import Orders from './components/orders/Orders';

const stripePromise = loadStripe(
  'pk_test_51JL1XcSGZ6Ut1iHeeOy36YUizKLeJvsiLXYjuOCQTVpAN2UXKYfRagah6ZFnYC4WWunr8M4i4LHf0XW4S9LIdlxs00R0Fs8C3b'
)

const App = () => {

  const [{}, dispatch] = useContextValue();

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
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route exact path="/payment">
            <Header/>
            <Elements stripe={stripePromise}>
              <Payment/>
            </Elements>          
          </Route>
          <Route exact path="/orders">
            <Header/>
            <Orders/>
          </Route>
          <Route exact path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
