import React, { Component } from "react";
import { observer } from "mobx-react";
// NativeBase Components
import { Card, CardItem, Text, Button } from "native-base";
import authStore from "../stores/authStore";
import { Redirect } from "react-router-native";

class Profile extends Component {
  render() {
    if (!authStore.isAuthenticated) return <Redirect to="/login" />;
    return (
      <Card>
        <CardItem>
          <Button danger onPress={() => authStore.logoutUser()}>
            <Text>Logout</Text>
          </Button>
        </CardItem>
      </Card>
    );
  }
}
export default observer(Profile);
