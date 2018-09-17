import React, { Component } from "react";

// NativeBase
import { Content } from "native-base";

// Component
import Login from "./Login";
import Profile from "./Profile";
import Lol from "./Lol";
import ProductList from "./ProductList";
import PrivateLul from "./PrivateLul";
import Register from "./Register";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";

// Router
import { Route, Switch, Redirect } from "react-router-native";

// Common
import PrivateRoute from "../common/PrivateRoute";

class MainContent extends Component {
  render() {
    return (
      <Content>
        <Switch>
          <PrivateRoute path="/ProductList" component={ProductList} />
          <PrivateRoute
            path="/ProductDetail/:index"
            component={ProductDetail}
          />
          <PrivateRoute path="/Cart" component={Cart} />
          <PrivateRoute path="/privateLul" component={PrivateLul} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Redirect to="/ProductList" />
        </Switch>
      </Content>
    );
  }
}

export default MainContent;
