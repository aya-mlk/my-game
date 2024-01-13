import React from 'react';
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const CreeProject1 = ({ route, navigation }) => {
  const { nomProjet } = route.params;
  const { categorie } = route.params;

  const navigateToNewPage = () => {
    navigation.navigate('NewProject');  
  };

  const getImagePath = () => {
    switch (categorie) {
      case 'Football':
        return require('./assets/football.png');
      case 'Aventure':
        return require('./assets/aventure.png');
      case 'Space':
        return require('./assets/space.png');
      case 'Mathematique':
        return require('./assets/maths.png');
      default:
        return require('./assets/adventure_screen.png'); 
    }
  };

  return (
    <ImageBackground
      source={require('./assets/image-removebg-preview.png')}
      style={styles.background}
    >
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <FontAwesome5 name="arrow-left" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.textmesproject}>Mes projets </Text>

      <View style={styles.carreContainer}>
        <View style={styles.carre}>
          <TouchableOpacity onPress={navigateToNewPage}>
            <Image source={getImagePath()} style={styles.categoryImage} />
          </TouchableOpacity>
          <Text style={styles.textnomProject}>{nomProjet}</Text>
        </View>

        <View style={styles.carre2}>
          <TouchableOpacity onPress={navigateToNewPage}>
            <Text style={styles.plusSign}>+</Text>
          </TouchableOpacity>
          <Text style={styles.textnouveauproject}>Crée un nouveau projet</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  textmesproject: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    marginLeft: 350,
  },
  carreContainer: {
    flexDirection: 'row', 
    marginTop: 50,
  },
  carre2: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: '#E0AAFF',
    marginLeft: 40,
    height: 150,
    width: '21%', 
  },
  carre: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#E0AAFF',
    marginLeft: 90,
    height: 150,
    width: '20%',
  },
  plusSign: {
    fontSize: 150,
    color: '#fff',
  },
  categoryImage: {
    marginTop: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: 150,
    width: 170,
  },
  textnouveauproject: {
    fontSize: 15,
    color: '#fff',
    marginTop: 30,
  },
  textnomProject: {
    fontSize: 15,
    color: '#fff',
    marginTop: 10,
  },
  back: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});

export default CreeProject1;
