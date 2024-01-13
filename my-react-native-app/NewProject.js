import React, { useState } from 'react';
import { View, ImageBackground, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

const NewProject = () => {
  const [projetData, setProjetData] = useState({ nomProjet: '', categorie: 'football' });
  const [selectedCategory, setSelectedCategory] = useState('football'); // Manage selected category in state
  const navigation = useNavigation();

  const handleInputChange = (text, fieldName) => {
    setProjetData(prevState => ({ ...prevState, [fieldName]: text }));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category); // Update selected category in state
    setProjetData(prevState => ({ ...prevState, categorie: category }));
  };

  const handleSubmit = () => {
    if (projetData.nomProjet && projetData.categorie) {
      console.log("Nom du projet :", projetData.nomProjet);
      console.log("Catégorie :", projetData.categorie);
  
      navigation.navigate('CreeProject1', {
        nomProjet: projetData.nomProjet,
        categorie: projetData.categorie,
      });
    } else {
      console.warn("Veuillez remplir tous les champs.");
    }
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  const data = [
    { key: 0, label: 'Football' },
    { key: 1, label: 'Aventure' },
    { key: 2, label: 'Space' },
    { key: 3, label: 'Mathematique' },
  ];

  return (
    <ImageBackground
      source={require('./assets/image-removebg-preview.png')}
      style={styles.background}
    >
      <TouchableOpacity style={styles.back} onPress={navigateBack}>
        <FontAwesome5 name="arrow-left" size={24} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>Mes projets</Text>

      <Text style={styles.subtitle1}>Nom du projet</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom du projet"
        value={projetData.nomProjet}
        onChangeText={(text) => handleInputChange(text, 'nomProjet')}
      />

      <Text style={styles.subtitle}>Catégorie</Text>
      <ModalSelector
        data={data}
        initValue={selectedCategory} // Use selected category from state
        onChange={(option) => handleCategoryChange(option.label)}
        style={styles.picker}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Créer le Projet</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    marginLeft: 350,
  },
  subtitle1: {
    fontSize: 20,
    color: '#fff',
    marginTop: 30,
    marginLeft: 250,
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
    marginTop: 15,
    marginLeft: 250,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    margin: 15,
    padding: 10,
    marginLeft: 250,
    width: 300,
    borderRadius: 5,
    color: '#fff', 
  },
  picker: {
    height: 40,
    width: 300,
    margin: 15,
    marginLeft: 250,
    color: 'gray',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 10,
    borderRadius: 5,
    margin: 20,
    alignItems: 'center',
    marginLeft: 250,
    width: 300,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  back: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});

export default NewProject;
