
import React, { useRef, useState } from 'react';
import { View, ImageBackground,Text, StyleSheet, FlatList, Pressable, Image, StatusBar } from 'react-native';
import { Engine } from 'matter-js';
import { Start, End, TurnLeft, TurnRight, Walk, Attack } from './icons';
import Draggable from './components/Draggable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Player from './components/Player';
import { GameEngine } from "react-native-game-engine";
import { Finger } from "./utils/renderers";
import { MoveFinger } from "./utils/systems"

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

    const [x, setX] = useState(178)
    const [y, setY] = useState(10)

    const moveUp = () => {
            setY(y + 20)
    }

    const moveDown = () => {
            setY(y - 20)
    }

    const moveLeft = () => {
        setX(x - 30)
    }

    const moveRight = () => {

    }

    const mvmnts = [{item: <Start/>, event: ""},
                {item: <Walk/>, event: moveUp},
                {item: <TurnLeft/>, event: moveLeft}, 
                {item: <TurnRight/>, event: moveRight}]

    const scene = useRef()
    const engine = useRef(Engine.create())

    return (
        <ImageBackground
          source={require('./assets/map.jpg')}
          style={styles.background}
          resizeMode='cover'
        >
            <GestureHandlerRootView style={{flex: 1}}>

                <View style={{flex: 1, justifyContent: "space-between", flexDirection: "row"}}>
                    
                    <View style={styles.sideMenu}>
                        {
                            mvmnts.map(({item, event}, index) => (
                                <Pressable onPress={event} key={index}>
                                        {item}
                                </Pressable>
                            ))
                        }
                    </View>

                    <View style={{flex:1, justifyContent: "flex-end", alignItems: "center", paddingLeft: 20}} ref={scene}>
                        <Image style={{ position: "absolute", left: x, bottom: y }} source={require("./assets/player/player_facing_up/1.png")} />
                    </View>

                    <Pressable onPress={() => navigation.navigate("Win")} style={{alignSelf: "flex-end", padding: 15}}>
                        <Attack/>
                    </Pressable>

                </View>
                
            </GestureHandlerRootView>

        </ImageBackground>
        
    );

    
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
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
    },
    topLayer: {
        zIndex: 99
    }
});    
export default Game1;