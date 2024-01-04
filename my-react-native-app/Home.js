import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, ImageBackground, StyleSheet, Text, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { Link } from "expo-router";


function Home() {

    const navigation = useNavigation();

  const categories = [{ image: require('./assets/football.png'), title: "football" },
                      { image: require('./assets/aventure.png'), title: "aventure" },
                      { image: require('./assets/space.png'), title: "space" },
                      { image: require('./assets/maths.png'), title: "mathematique" },
                      { image: require('./assets/football.png'), title: "football" }]

  const adventureClick = () => {
    navigation.navigate('Levels');
  }

  const project = () => {
    navigation.navigate('CreeProject');
  }
                      
  return (
    <ImageBackground
      source={require('./assets/image-removebg-preview.png')}
      style={styles.background}
    >

      <View style={styles.menuContainer}>
        <View style={styles.menuBox}>
          <FontAwesome5 name="bars" size={24} color="white" />
        </View>
      </View>

      <View style={{flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {
            categories.map(({title, image}, index) => (
                <Pressable key={index} onPress={adventureClick} style={index != 0 ? styles.scrollViewElement : {}}>
                <View style={styles.categoryContainer}>
                  <Image source={image} style={styles.image} />
                  <Text style={styles.scrollText}>
                    {title}
                  </Text>
                </View>
              </Pressable>
            ))
          }
        </ScrollView>
      </View>

      <View style={styles.btnContainer}>
        <Pressable style={styles.btn} onPress={project}>
          <Text>Mes projets</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text>Tutoriels</Text>
        </Pressable>
      </View>

    </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    padding: 30,
    columnGap: 12,
    display: "flex"
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  image: {
    width: 170,
    height: 170,
    borderRadius: 10,
  },
  menuBox: {
    backgroundColor: "#E0AAFF",
    padding: 10,
    borderRadius: "100",
    width: "auto"
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: "end",
   justifyContent: "end"
  },
  scrollViewElement: {
    marginLeft: 40,
  },
  btnContainer: {
    flexDirection: "row",

    alignItems:"center",
    justifyContent: "space-around"
  },
  btn: {
    backgroundColor: "#E0AAFF",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 5
  },
  scrollText: {
    textAlign: "center",
    textTransform: "capitalize",
    marginTop: 15,
    color: "white"
  }
  
});

export default Home;
