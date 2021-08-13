import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Components/Home/Header';
import HomeProducts from './Components/Home/HomeProducts';
import Footer from './Components/Home/Footer';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import Login from './Components/Authentication/Login/Login';
import Signup from './Components/Authentication/Signup/Signup';
import CategoryList from './Components/Home/CategoryList';


function App() {
  return (
    <Router>
      <div>
        <Switch>
            <Route exact path = '/'>
              <Header />
              <CategoryList />
              <HomeProducts />
              <Footer />              
            </Route>
            <Route exact path = "/cart" >
              <ShoppingCart />
            </Route>
            <Route path = "/login">
              <Login />
            </Route>
            <Route path = "/signup">
              <Signup/>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
