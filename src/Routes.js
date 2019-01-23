import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';
import {CardProduct} from "./components/products/CardProduct";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/product" component={CardProduct}/>

   </Switch>
);

export default Routes;