import React, { Component } from 'react';
import Description from './description/description';
import Footer from './footer/footer';
import Header from './header/header';
import Hero from './hero/hero';
import Restaurants from './restaurants';
import Basket from './basket';
import Card from './card/card';
import { Route, Switch, Redirect } from 'react-router-dom';
import ErrorPage from './error-page/error-page';
import OrderStatus from './order-status/order-status';
import Contacts from './contacts/contacts';
import FAQ from './faq/faq';
import About from './about/about';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Description />
        <Switch>
          <Redirect exact from="/" to="/restaurants" />
          <Route path="/checkout" component={Basket} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/about" component={About} />
          <Route path="/faq" component={FAQ} />
          <Route path="/restaurants" component={Restaurants} />
          <Route path="/order-status" component={OrderStatus} />
          <Route path="/error" component={ErrorPage} />
        </Switch>
        <Card />
        <Footer />
      </div>
    )
  }
}