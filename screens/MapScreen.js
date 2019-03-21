import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
export default class MapScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        longitude: -122,
        latitude: 37,
        longitudeDelta: 0.04,
        latitudeDelta: 0.09
      }
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView region={this.state.region} style={{ flex: 1 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
