import React from 'react'
import { ImageBackground, Text, View } from 'react-native'

const index = () => {
  return (
    <ImageBackground soruce={require('./assets/image-removebg-preview.png')}>
      <View>
        <Text>HELLO</Text>
      </View>
    </ImageBackground>
  )
}

export default index