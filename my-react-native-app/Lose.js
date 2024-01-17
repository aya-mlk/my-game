import React, { useEffect } from 'react';
import { View, Image, ImageBackground,Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const Lose= (navigation) => {


    return (
        <ImageBackground
          source={require('./assets/backg.jpg')}
          style={styles.background}
        >
            <Text style={styles.title}>VOUS AVEZ</Text>
            <Text style={styles.suite}>RATER !!</Text>
            <Image source={require('./assets/group.png')} style={styles.stars} />
            <View style={styles.container}>
                <Image source={require('./assets/blocks.png')} style={styles.image} />
                <Image source={require('./assets/again.png')} style={styles.image} />
                 <Image source={require('./assets/play.png')} style={styles.image} />
    </View>
        </ImageBackground>
        
    );

    
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
    },
    title: {
        textAlign: 'center',
        fontSize: 50,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 50,
        fontFamily: 'Inter',
      },
    suite: {
        textAlign: 'center',
        fontSize: 50,
        color: '#fff',
        fontWeight: 'bold',
    },
    stars: {
        marginLeft: 320,
        width: 200,
    height: 120,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width: 40, // Ajustez la largeur comme vous le souhaitez
        height: 40, // Ajustez la hauteur comme vous le souhaitez
        marginHorizontal: 10, // Marge horizontale entre les images
      },
});
export default Lose;