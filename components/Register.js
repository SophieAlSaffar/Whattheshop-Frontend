import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Form, Item, Input, Button, Text } from "native-base";

// Store
import authStore from "../stores/authStore";

// Routing
import { Redirect } from "react-router-native";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  render() {
    if (authStore.isAuthenticated) return <Redirect to="/profile" />;
    return (
      <Form>
        <Item>
          <Input
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={username => this.setState({ username })}
          />
        </Item>
        <Item>
          <Input
            placeholder="e-mail"
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
          />
        </Item>
        <Item last>
          <Input
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
        </Item>
        <Button
          full
          onPress={() => {
            authStore.register(
              this.state.username,
              this.state.email,
              this.state.password
            );
          }}
        >
          <Text>Register</Text>
        </Button>
      </Form>
    );
  }
}
export default observer(Register);
