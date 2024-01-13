import React from 'react';
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const CreeProject = ({ navigation }) => {
  const navigateToNewPage = () => {
    navigation.navigate('NewProject');  
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
      <View style={styles.carre}>
        <TouchableOpacity onPress={navigateToNewPage}>
          <Text style={styles.plusSign}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textnouveauproject}>Crée un nouveau projet</Text>
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
  carre: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginLeft: 100,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: '#E0AAFF',
    height: 150,
    width: '20%',
  },
  plusSign: {
    fontSize: 150,
    color: '#fff',
    marginTop: -20,
  },
  textnouveauproject: {
    fontSize: 15,
    color: '#fff',
    marginTop: 10,
    marginLeft: 90,
  },
  back: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});

export default CreeProject;
