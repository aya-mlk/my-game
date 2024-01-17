
import React, { useEffect, useRef } from 'react';
import { View, Image, ImageBackground,Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Engine } from 'matter-js';
import { Svg, Path } from 'react-native-svg';
import { Start, End, TurnLeft, TurnRight, Walk, Attack } from './icons';

const FlatListItem = (text) => {
    return (
        <View style={{paddingVertical: 12, paddingHorizontal: 15}}>
            {
                text == "start" ? <Start/> : ""
            }
            {
                text == "turnLeft" ? <TurnLeft/> : ""
            }
            {
                text == "turnRight" ? <TurnRight/> : ""
            }
            {
                text == "walk" ? <Walk/> : ""
            }
            {
                text == "end" ? <End/> : ""
            }
            <Text>
                {text}
            </Text>
        </View>
    )
}

const vectors = [{id: 1, image: "start"},
                 {id: 2, image: "walk"},
                 {id: 3, image: "turnLeft"},
                 {id: 4, image: "turnRight"},
                 {id: 5, image: "end"}]

const Game1= ({navigation}) => {

    const scene = useRef()
    const engine = useRef(Engine.create())

    return (
        <ImageBackground
          source={require('./assets/img.png')}
          style={styles.background}
        >

            <View style={{flex: 1, justifyContent: "space-between", flexDirection: "row"}}>
                
                <View style={styles.sideMenu}>
                    <Start/>
                    <Walk/>
                    <TurnLeft/>
                    <TurnRight/>
                    <End/>
                </View>

                <Pressable onPress={() => navigation.navigate("Win")} style={{alignSelf: "flex-end", padding: 15}}>
                    <Attack/>
                </Pressable>

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
    sideMenu: {
        width: "20%",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        rowGap: 10,
        padding: 15
    }
});    
export default Game1;