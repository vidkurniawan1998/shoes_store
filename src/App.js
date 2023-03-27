import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React,{ Component } from 'react';
import Navbar from './Component/Navbar';
import ProductList from './Component/ProductList';
import Product from './Component/Product';
import Details from './Component/Details';
import Cart from './Component/Cart';
import Default from './Component/Default';
import {Switch,Route} from 'react-router-dom';
import Modal from './Component/Modal'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route path="/details" component={Details}/>
          <Route path="/cart" component={Cart}/>
          <Route component={Default}/>
        </Switch>
        <Modal />
      </React.Fragment>

    );
  }
}

export default App;
