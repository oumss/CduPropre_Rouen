import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import MapView, { Callout, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';


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
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
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

      // onPress={(e) => {
      //   console.log("Touché");


      // }}
      >
        <Callout tooltip>
          <View className="flex flex-col bg-[#acc687bd] h-72 w-72 rounded-xl shadow-2xl items-center">
            <Text className="text-xl font-semibold text-gray-700">Déchet signalé</Text>
            <Image className=" flex-1 h-2/3 w-2/3  " source={require('./img/trashes/IMG-20230407-WA0034.jpg')} />

            <View className='flex-row items-center pt-1 '>
              <View className="bg-[#bcc687] rounded-3xl ">
                <Text className="text-l font-semibold ml-2 mr-2">Catégorie :</Text>
              </View>
              <Text className="text-l font-medium ml-2">Papier</Text>
            </View>
 
            <View className='flex-row items-center pt-1 '>
              <View className="bg-gray-400 rounded-3xl ">
                  <Text className="text-l font-semibold ml-2 mr-2">Signalé depuis :</Text>
                </View>
              <Text className="text-l font-semibold ml-2">20/03/2023</Text>
            </View>

            <TouchableOpacity className="bg-[#B390EC] h-10 w-48 mb-1 mt-1 rounded-full shadow-xl shadow-gray-400 items-center align-middle">
              <Text className="text-l font-semibold pt-2">Ramasser le déchet</Text>
            </TouchableOpacity>
          </View>
        </Callout>
      </Marker>
    </MapView>

  )
}

export default Map

const styles = StyleSheet.create({})