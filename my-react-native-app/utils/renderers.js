import React, { PureComponent } from "react";
import { StyleSheet, View, Image } from "react-native";

const RADIUS = 20;

class Finger extends PureComponent {
  render() {
    const x = this.props.position[0] - RADIUS / 2;
    const y = this.props.position[1] - RADIUS / 2;
    return (
      <View style={[{ left: x, top: y }]}>
        <Image source={require("../assets/player/player_facing_up/1.png")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  finger: {
    borderColor: "#CCC",
    borderWidth: 4,
    borderRadius: RADIUS * 2,
    width: RADIUS * 2,
    height: RADIUS * 2,
    backgroundColor: "pink",
    position: "absolute"
  }
});

export { Finger };