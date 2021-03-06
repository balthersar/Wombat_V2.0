import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal  from './components/Modal';
import Checkout from './components/checkout';
import Footer from './components/footer';

function App() {
  return <React.Fragment>
    <Navbar />
    <Switch>
      <Route exact path="/" component={ProductList} />
      <Route exact path="/kollektion" component={ProductList} />
      <Route exact path="/details" component={Details} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/checkout" component={Checkout} />
      <Route component={Default} />
    </Switch>
    <Footer/>
    <Modal />
  </React.Fragment>;
}

export default App;
