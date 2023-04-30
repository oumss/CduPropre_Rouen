import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import MapView, { Callout, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import { ArrowsPointingInIcon } from 'react-native-heroicons/outline';


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

      provider={MapView.PROVIDER_GOOGLE}
      className="flex-1"
      mapType="mutedStandard"
      initialRegion={{
        latitude: 49.4498772,
        longitude: 1.0344115,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}

      showsUserLocation={true}
      showsMyLocationButton={true}
      showsCompass={true}

      onUserLocationChange={(e) => {
        //console.log("onUserLocationChange", e.nativeEvent.coordinate);
        setPin({
          latitude: e.nativeEvent.coordinate.latitude,
          longitude: e.nativeEvent.coordinate.longitude,
          latitudeDelta: e.nativeEvent.coordinate.latitudeDelta,
          longitudeDelta: e.nativeEvent.coordinate.longitudeDelta,
        })
      }}

    >
      <Marker
        coordinate={{
          latitude: 49.4498572,
          longitude: 1.0344115,
        }}
        pinColor="#ACC687"

      // onPress={(e) => {
      //   console.log("Touché");
      // }}
      
      >
        <Callout tooltip>
          <View className="flex flex-col bg-slate-100 h-72 w-72 rounded-3xl shadow-black shadow-xl items-center">
            <Text className="text-xl font-semibold text-gray-700">Déchet signalé</Text>
            <Image className=" flex-1 h-60 w-2/3 rounded-3xl " source={require('./img/trashes/WhatsAppImage.jpg')} />

            <View className='flex-row items-center pt-1 '>
              <View className="bg-[#bcc687] rounded-3xl ">
                <Text className="text-l font-semibold ml-2 mr-2">Catégorie :</Text>
              </View>
              <Text className="text-l font-medium ml-2">Emballage plastique</Text>
            </View>
 
            <View className='flex-row items-center pt-1 '>
              <View className="bg-[#acc687bd] rounded-3xl ">
                  <Text className="text-l font-semibold ml-2 mr-2">Signalé depuis :</Text>
                </View>
              <Text className="text-l font-semibold ml-2">20 mars 2023</Text>
            </View>
            <View className="flex-row">
            <TouchableOpacity className="flex-1 bg-[#B390EC] h-8 w-35 mb-1 mt-1 mr-1 rounded-full shadow-xl shadow-gray-400 items-center align-middle">
              <Text className="text-l font-semibold pt-2">Ramasser</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-1  bg-[#ed5564] h-8 w-39 mb-1 mt-1 mr-1 rounded-full shadow-xl shadow-gray-400 items-center align-middle">
              <Text className="text-l font-semibold pt-2">Ramassage impossible</Text>
            </TouchableOpacity>
            </View>
            
          </View>
        </Callout>
      </Marker>

      <View style={{alignSelf: 'flex-end'}} className="absolute bottom-10 mr-1" >
        <TouchableOpacity style={{alignSelf: 'flex-end'}} 
          className="absolute bottom-10 bg-gray-200 rounded-full items-center drop-shadow-2xl"
          onPress={(e) =>{
            console.log("hey")
            latitude= e.nativeEvent.coordinate.latitude
            longitude= e.nativeEvent.coordinate.longitude
          }} >
            <ArrowsPointingInIcon size={50} color="#000"/>
        </TouchableOpacity>
      </View>

    </MapView>
    
  )
}

export default Map

const styles = StyleSheet.create({})