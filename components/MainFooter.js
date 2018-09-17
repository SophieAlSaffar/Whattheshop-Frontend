import React, { Component } from "react";

// NativeBase
import { Footer, FooterTab, Button, Icon } from "native-base";

// Router
import { Link } from "react-router-native";

class MainFooter extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Link component={Button} to="/ProductList">
            <Icon name="home" />
          </Link>
          <Link component={Button} to="/privateLul">
            <Icon name="cart" />
          </Link>
          <Link component={Button} to="/profile">
            <Icon name="person" />
          </Link>
        </FooterTab>
      </Footer>
    );
  }
}

export default MainFooter;
