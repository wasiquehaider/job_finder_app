import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";

export default class AuthScreen extends Component {
  render() {
    return (
      <View>
        <Text> AuthScreen </Text>
        <Button
          title={"Go Main Screen"}
          onPress={() => this.props.navigation.navigate("main")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
