import React, { Component } from "react";

// NativeBase Components
import { Text, Left, Body, Right, List, ListItem } from "native-base";

// Style
import ProductDetail from "./ProductDetail";
import ListStore from "../../Stores/ListStore";
import productStore from "../stores/productStore";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem(item, index) {
    return (
      <ListItem key={index}>
        <Left>
          <Text>
            {item.drink === 0 ? "Espresso" : "Latte"}
            {"\n"}
            {item.option === 0 ? "Small" : "Large"}
          </Text>
        </Left>
        <Body>
          <Text>{item.quantity}</Text>
        </Body>
      </ListItem>
    );
  }

  render() {
    return (
      <List>
        <ListItem>
          <Left>
            <Text style={styles.text}>
              {/* {ListStore.list[ListStore.currentShop].name + "\n"} */}
              {/* <Text note>{ListStore.list[ListStore.currentShop]}</Text> */}
              {ListStore.Current.name + "\n"}
              <Text note>{ListStore.Current.location}</Text>
            </Text>
          </Left>
          <Body />
          <Right>
            <Thumbnail bordered source={ListStore.Current.image} />
          </Right>
        </ListItem>
        {ListStore.orders.map((item, index) => this.renderItem(item, index))}
      </List>
    );
  }
}

export default Cart;
