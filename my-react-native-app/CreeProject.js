import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';

const CreeProject = () => {
  return (
    <ImageBackground
      source={require('./assets/image-removebg-preview.png')}
      style={styles.background}
    >
      <Text style={styles.textmesproject}>Mes projets </Text>
      <View style={styles.carre}>
        <Text style={styles.plusSign}>+</Text>
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
});

export default CreeProject;
