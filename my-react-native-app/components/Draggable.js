import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated"

export default function Draggable({children}) {

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0)

  const isGestureActive = useSharedValue(false)

  const panGesture = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = translateX.value
      ctx.startY = translateX.value
      isGestureActive.value = true
    },
    onActive: (evt, ctx) => {
      translateX.value = ctx.startX + evt.translationX
      translateY.value = ctx.startY + evt.translationY
    },
    onFinish: (evt, ctx) => {
      isGestureActive.value = false;
    }
  })

  const animatedStyle = useAnimatedStyle(() => {
    const zIndex = isGestureActive.value ? 1000 : 1
    const scale = isGestureActive.value ? 1.4 : 1
    return {
      zIndex,
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
        {scale}
      ]
    }
  })

  return (
    <Animated.View style={animatedStyle} onPress={() => console.log("clicked")}>
        <PanGestureHandler onGestureEvent={panGesture}>
          <Animated.View>{children}</Animated.View>
        </PanGestureHandler>
    </Animated.View>
  )
}

const styles = StyleSheet.create({})