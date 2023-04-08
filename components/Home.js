import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.h1} >C du Propre - Programme Keskia</Text>  
            <Text style={styles.txt} >À partir de photos (vidéosurveillance, photos citoyennes), on cherche à construire une IA qui détecte, reconnaît, étiquette et géolocalise les déchets. Cette IA restitue les informations et les actions à mener dans un tableau de suivi afin d’améliorer les parcours de collecte des déchets, rendre participatives les actions de propreté, et adapter en avance les moyens à utiliser en lien avec les process existants. On restituera les résultats du modèle dans une IHM adaptée aux utilisateurs finaux.</Text>  

            <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  txt:{
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  h1: {
    backgroundColor: '#fff',
    fontSize: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical : 10,
  },
});
