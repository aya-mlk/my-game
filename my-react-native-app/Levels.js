import React, { useState } from 'react';
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
const Levels = ({ navigation }) => {
  const [currentLevel, setCurrentLevel] = useState(1);


  
  const unlockLevel = (level) => {
    // Logique pour débloquer le niveau ici (si nécessaire)
    setCurrentLevel(level);
  };

  const renderLevelBox = (level, isLocked) => (
    <TouchableOpacity
    key={level}
    style={[
      styles.levelBox,
      { backgroundColor: '#E0AAFF', marginBottom: level % 4 === 0 ? 0 : 10 },
    ]}
    onPress={() => isLocked ? null : unlockLevel(level)}  // Modifier ici
    disabled={isLocked}
  >
    {isLocked && (
      <>
        <Text style={styles.lockedLevelText}>{level}</Text>
        <Image source={require('./assets/locked.png')} style={styles.lockIcon} />
      </>
    )}
    {!isLocked && (
      <TouchableOpacity onPress={() => navigation.navigate("Game1")}>
        <Text style={styles.levelText}>{level}</Text>
      </TouchableOpacity>
    )}
  </TouchableOpacity>
  );

  return (
    <ImageBackground source={require('./assets/adventure_screen.png')} style={styles.background}>
     <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('./assets/back.png')} style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.title}>Aventure</Text>
  
       </View>

      <View style={styles.levelsContainer}>
        {/* Première rangée de niveaux */}
        <View style={styles.rowContainer}>
          {[1, 2, 3, 4].map((level) => renderLevelBox(level, level > currentLevel))}
        </View>
        {/* Deuxième rangée de niveaux */}
        <View style={styles.rowContainer}>
          {[5, 6, 7, 8].map((level) => renderLevelBox(level, level > currentLevel))}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },

  title: {
    textAlign: 'center',
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 15,
    marginRight: 300,
  },
  levelsContainer: {
    marginTop: 40,
    flexDirection: 'column',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  levelBox: {
    width: 80,
    height: 80,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    
    
    marginHorizontal: 30,
    marginTop: 10, 
  },
  levelText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  lockIcon: {
    width: 186,
    height: 133,
    position: 'absolute',
    bottom: 0,
  },
  back: {
    width: 40,
    height: 40,
    marginTop: 15,
   
  },
  lockedLevelText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },

});

export default Levels;