import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Slides from "../components/Slides";
import animation1 from "../animations/animation1.json";
import animation2 from "../animations/animation2.json";
import animation3 from "../animations/animation3.json";

const SLIDE_DATA = [
  {
    text: "Welcome to Job App",
    color: "#83A9F4",
    animation: "../animations/animation1.json"
  },
  {
    text: "You Can use this app to get a Job",
    color: "#009688",
    animation: "../animations/animation2.json"
  },
  {
    text: "Set your Location and Swipe away",
    color: "#03A9F4",
    animation: "../animations/animation3.json"
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
