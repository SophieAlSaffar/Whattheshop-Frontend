import React, { Component } from "react";
import { Link } from "react-router-native";
import { Image } from "react-native";
import { Card, CardItem, Text, Left, Right, List, ListItem } from "native-base";
import { observer } from "mobx-react";
import productStore from "../stores/productStore";
import ProductDetail from "./ProductDetail";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderItem(data, index) {
    return (
      <Link key={data.name} component={ListItem} to={`/ProductDetail/${index}`}>
        <Card style={{ flex: 0 }}>
          <CardItem cardBody>
            <Image
              style={{
                width: "100%",
                height: 350
              }}
              source={{ uri: data.image }}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Text>{data.name}</Text>
            </Left>
            <Right>
              <Text>{data.price} KD</Text>
            </Right>
          </CardItem>
        </Card>
      </Link>
    );
  }
  render() {
    const ListItems = productStore.products.map((data, index) =>
      this.renderItem(data, index)
    );
    return <List>{ListItems}</List>;
  }
}
export default observer(ProductList);
