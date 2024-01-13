import React, { useEffect } from 'react';
import { View, Image, ImageBackground, StyleSheet } from 'react-native';

const Win= (navigation) => {


    return (
        <ImageBackground
          source={require('./assets/background_anim.png')}
          style={styles.background}
        >

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
    },
});
export default Win;