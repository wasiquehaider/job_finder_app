import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Animated,
  Easing
} from "react-native";
import { Button } from "react-native-elements";
import LottieView from "lottie-react-native";
import Animation1 from "../animations/animation1.json";
const SCREEN_WIDTH = Dimensions.get("window").width;

export default class Slides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0)
    };
  }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear
    }).start();
  }

  renderLastSlide = index => {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          title="Onwards!"
          buttonStyle={styles.buttonStyle}
          onPress={() => this.props.onComplete()}
        />
      );
    }
  };

  renderSlides = () => {
    return this.props.data.map((slide, index) => (
      <View
        key={index}
        style={[styles.slide, { backgroundColor: slide.color }]}
      >
        {/* <LottieView
          source={require("../animations/animation3.json")}
          progress={this.state.progress}
          autoPlay
        /> */}
        <Text style={styles.slideText}>{slide.text}</Text>
        {this.renderLastSlide(index)}
      </View>
    ));
  };

  scrollX = new Animated.Value(0); // this will be the scroll location of our ScrollView

  render() {
    // position will be a value between 0 and photos.length - 1 assuming you don't scroll pass the ends of the ScrollView
    let position = Animated.divide(this.scrollX, SCREEN_WIDTH);
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flex: 1 }}
          pagingEnabled
          // the onScroll prop will pass a nativeEvent object to a function
          onScroll={Animated.event(
            // Animated.event returns a function that takes an array where the first element...
            [{ nativeEvent: { contentOffset: { x: this.scrollX } } }] // ... is an object that maps any nativeEvent prop to a variable
          )} // in this case we are mapping the value of nativeEvent.contentOffset.x to this.scrollX
          scrollEventThrottle={16} // this will ensure that this ScrollView's onScroll prop is called no faster than 16ms between each function call
        >
          {this.renderSlides()}
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            bottom: 0
          }} // this will layout our dots horizontally (row) instead of vertically (column)
        >
          {this.props.data.map((_, i) => {
            // the _ just means we won't use that parameter
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1], // each dot will need to have an opacity of 1 when position is equal to their index (i)
              outputRange: [0.3, 1, 0.3], // when position is not i, the opacity of the dot will animate to 0.3
              extrapolate: "clamp" // this will prevent the opacity of the dots from going outside of the outputRange (i.e. opacity will not be less than 0.3)
            });
            return (
              <Animated.View // we will animate the opacity of the dots later, so use Animated.View instead of View here
                key={i} // we will use i for the key because no two (or more) elements in an array will have the same index
                style={{
                  opacity,
                  height: 10,
                  width: 10,
                  backgroundColor: "#595959",
                  margin: 8,
                  borderRadius: 5
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH
  },
  slideText: {
    fontSize: 30,
    color: "#FFFFFF"
  },
  buttonStyle: {
    backgroundColor: "#0288d1",
    marginTop: 15
  }
});
