import React from "react";
import { StyleSheet } from "react-native";
// import LottieView from "lottie-react-native";
import AnimatedLottieView from "lottie-react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <AnimatedLottieView
      autoPlay
      loop
      source={require("../assets/animations/loader.json")}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ActivityIndicator;
