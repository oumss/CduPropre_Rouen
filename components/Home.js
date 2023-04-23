import { View, Text, SafeAreaView, Image, TextInput } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { UserIcon, ChevronDownIcon, SearchIcon, CameraIcon, AdjustmentsVerticalIcon, HomeIcon } from "react-native-heroicons/outline";
import {GOOGLE_MAPS_APIKEY} from "@env";
import {GooglePlacesAutocompete} from "react-native-google-places-autocomplete";
import Map from './Map';

const Home = () => {

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Accueil",
      headerShown : false
    })
  }, []);

  return (
    
    <SafeAreaView className="h-full bg-white pt-5">
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
        </Text>
        
        <View className="h-5/6 ">

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
      


      {/* Footer */}
      <View className="flex-row  pt-4 px-5 items-center">
        <View className="flex-1 items-center h-10 w-8 bg-[#ACC687] rounded-full">
            <HomeIcon className="pt-4 h-9 w-9" color="#000"/>
        </View>
        <View className="flex-1 items-center">
            <Image className="h-8 w-8 bg-gray-300 p-4 mx-4 rounded-full" source={{url: 'https://links.papareact.com/wru' }} />
            <Text className="font-bold text-gray-400 text-xs">Signaler </Text>
        </View>
        <View className="flex-1 items-center">
            <Image className="h-8 w-8 bg-gray-300 p-4 mx-4 rounded-full" source={{url: 'https://links.papareact.com/wru' }} />
            <Text className="font-bold text-gray-400 text-xs">Cashback </Text>
        </View>
        <View className="flex-1 items-center">
            <Image className="h-8 w-8 bg-gray-300 p-4 mx-4 rounded-full" source={{url: 'https://links.papareact.com/wru' }} />
            <Text className="font-bold text-gray-400 text-xs">Compte </Text>
        </View>    
      </View>
      
    </SafeAreaView>


    
  )
}

export default Home;