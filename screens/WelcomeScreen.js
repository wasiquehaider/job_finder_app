import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Slides from "../components/Slides";

const SLIDE_DATA = [
  {
    text: "Welcome to Job App",
    color: "#83A9F4"
  },
  {
    text: "You Can use this app to get a Job",
    color: "#009688"
  },
  {
    text: "Set your Location and Swipe away",
    color: "#03A9F4"
  }
];

export default class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate("auth");
  };

  render() {
    return <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />;
  }
}

const styles = StyleSheet.create({});
