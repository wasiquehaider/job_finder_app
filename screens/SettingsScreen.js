import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button, Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class SettingsScreen extends Component {
  render() {
    return (
      <View>
        <Header
          statusBarProps={{ barStyle: "light-content" }}
          barStyle="light-content" // or directly
          leftComponent={
            <Button
              icon={<Icon name="arrow-left" size={15} color="white" />}
              onPress={() => {
                this.props.navigation.goBack();
              }}
            />
          }
          centerComponent={{
            text: "Settings Screen",
            style: { color: "#fff" }
          }}
          containerStyle={{
            backgroundColor: "#3D6DCC",
            justifyContent: "space-around"
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
