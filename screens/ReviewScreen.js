import React, { Component } from "react";
import { Text, StyleSheet, View, Platform } from "react-native";
import { Header, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class ReviewScreen extends Component {
  render() {
    return (
      <View>
        <Header
          statusBarProps={{ barStyle: "light-content" }}
          barStyle="light-content" // or directly
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "Review Screen", style: { color: "#fff" } }}
          rightComponent={
            <Button
              icon={<Icon name="cog" size={15} color="white" />}
              onPress={() => {
                this.props.navigation.navigate("settings");
              }}
            />
          }
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
