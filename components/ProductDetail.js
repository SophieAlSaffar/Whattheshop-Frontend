import React, { Component } from "react";
import { Image } from "react-native";
import { withRouter } from "react-router-native";
import { observer } from "mobx-react";
import {
  Text,
  Card,
  CardItem,
  Left,
  Right,
  List,
  ListItem,
  Button,
  Footer,
  Link,
  View
} from "native-base";
import productStore from "../stores/productStore";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let x = this.props.match.params.index;
    return (
      <View>
        <Card style={{ flex: 0 }}>
          <CardItem cardBody>
            <Image
              style={{
                width: "100%",
                height: 350
              }}
              source={{ uri: productStore.products[x].image }}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Text>{productStore.products[x].name}</Text>
            </Left>
            <Right>
              <Text>{productStore.products[x].price} KD</Text>
            </Right>
          </CardItem>
        </Card>
        <Link component={Button} to="/Cart/">
          <Button block disabled onPress={() => authStore.logoutUser()}>
            <Text>Add to cart</Text>
          </Button>
        </Link>
      </View>
    );
  }
}
export default withRouter(observer(ProductDetail));
