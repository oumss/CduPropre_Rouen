import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const Map = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [pin, setPin] = useState({
      latitude: 49.063850,
      longitude: 2.09200548,
  })

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);

      setPin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: location.coords.latitudeDelta,
        longitudeDelta: location.coords.longitudeDelta,
      })
    })();
  }, []);

  

  return (
  
      <MapView
            className="flex-1"
            mapType='mutedStandard'
            initialRegion={{
                latitude: 49.063850,
                longitude: 2.09200548,
                latitudeDelta:0.005,
                longitudeDelta:0.005,
            }}
            showsUserLocation={true}
            showsMyLocationButton={true}
            onUserLocationChange={(e) => {
              //console.log("onUserLocationChange", e.nativeEvent.coordinate);
              setPin({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
                latitudeDelta: e.nativeEvent.coordinate.latitudeDelta,
                longitudeDelta: e.nativeEvent.coordinate.longitudeDelta,
              })
            }}
            showsCompass={true}
            
          >
            <Marker
            coordinate={{
              latitude: 49.063850,
              longitude: 2.09200578,
            }}
            pinColor="#ACC687"

            onPress={(e) => {
              console.log("Touché");
            }}
        />
      </MapView>
    
  )
}

export default Map

const styles = StyleSheet.create({})