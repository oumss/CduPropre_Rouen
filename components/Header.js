import { View, Text, SafeAreaView, Image, TextInput } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { UserIcon, ChevronDownIcon, SearchIcon, CameraIcon, AdjustmentsVerticalIcon } from "react-native-heroicons/outline";
import {GOOGLE_MAPS_APIKEY} from "@env";
import {GooglePlacesAutocompete} from "react-native-google-places-autocomplete";
import Map from './Map';

const Header = () => {
  return (
    <SafeAreaView className="bg-white pt-5">
      <Text>

        {/* Header */}
        <View className="flex-row pb-2 items-center mx-4 space-x-2">
          <Image className=" flex-1 h-11 w-11 p-4" source={require('./img/logo_cote.png')} />
          
          <View className="flex-row mx-4 ">
            <Text className="font-bold text-gray-400 text-sm">Localisation : Rouen </Text>
          </View>
          <View className=" mx-4 ">
            <Image className="h-8 w-8 bg-gray-300 p-4 mx-4 rounded-full" source={{url: 'https://links.papareact.com/wru' }} />
            <Text className="font-bold text-gray-400 text-xs">oumss78 </Text>
          </View>
        </View>

        <View>

            <Map/>

        </View>

        

        {/* Search 
        <View className='flex-row items-center space-x-2 pb-2 mx-4'>
           <View className='flex-row space-x-2 flex-1 bg-gray-200 p-3'>
            <CameraIcon color="#00CCBB" />
            <GooglePlacesAutocomplete
              placeholder='Recherche ? '
              nearbyPlacesAPI="GooglePlacesSearch"
              debounce={400}
              query={{key:GOOGLE_MAPS_APIKEY}}
              language='fr'
              styles={{
                container:{
                  flex:0,
                },
                textInput:{
                  fontSize:18,
                },            
              }}
          />
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB"/>
        </View>
          */}
      </Text>

      
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({})

