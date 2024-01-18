import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import PlayerUpFrame1 from "../assets/player/player_facing_up/1.png"
import PlayerUpFrame2 from "../assets/player/player_facing_up/2.png"
import PlayerUpFrame3 from "../assets/player/player_facing_up/3.png"
import PlayerUpFrame4 from "../assets/player/player_facing_up/4.png"
import PlayerUpFrame5 from "../assets/player/player_facing_up/5.png"
import { Easing, Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated'
import Animated from 'react-native-reanimated'

const playerFacingUpFrames = [PlayerUpFrame1,PlayerUpFrame2,PlayerUpFrame3,PlayerUpFrame4,PlayerUpFrame5]

const PlayerAnnimation = () => {
    
    const frameIndex = useSharedValue(0)
    
    useEffect(() => {
        frameIndex.value = withRepeat(
            withTiming(
                playerFacingUpFrames.length, { duration: 1000 * playerFacingUpFrames.length, easing: Easing.linear },
                -1,
                false
            )
        )
    })

    const animatedStyle = useAnimatedStyle(() => {
        const index = Math.floor(interpolate(frameIndex.value,
            [0, playerFacingUpFrames.length - 1],
            [0, playerFacingUpFrames.length - 1],
            Extrapolate.CLAMP));
            return{
                opacity: frameIndex.value == index ? 1 : 0
            }
    })

    return (
        <View>
            {
                playerFacingUpFrames.map((frame, index) => (
                    <Animated.View
                        key={index}
                        source={frame}
                        style={[
                            styles.frameStyle,
                            index === Math.floor(frameIndex.value) ? animatedStyle: undefined
                        ]}
                    />
                ))
            }
        </View>
    )
}

export default function Player() {

  return (
    <View style={{flex: 1}}>
      <PlayerAnnimation/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    frameStyle: {
      width: 100,
      height: 100,
      position: 'absolute', // Stack all frames on top of each other
    },
  });