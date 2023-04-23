import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';

const Map = () => {
  return (
  
      <MapView
            className="flex-1"
            initialRegion={{
                latitude: 49.443136, 
                longitude: 1.097569,
                latitudeDelta: 0.060,
                longitudeDelta: 0.060,
            }}
    />
  )
}

export default Map

const styles = StyleSheet.create({})