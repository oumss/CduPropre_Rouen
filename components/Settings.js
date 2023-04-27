import { StyleSheet, Text, View, SafeAreaView, Image, FlatList } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const Settings = () => {
  
    const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Parametres",
      headerShown: false
    })
  }, []);

  return (
    <SafeAreaView className="h-full bg-white pt-5">
      <Text>
        {/* Header */}
        <View className="flex-row pb-2 items-center mx-4 space-x-2 pt-5">
          <Image className=" flex-1 h-11 w-11 p-4" source={require('./img/logo_cote.png')} />

          <View className="flex-row mx-4 ">
            <Text className="font-bold text-gray-400 text-sm">Localisation : Rouen </Text>
          </View>

          <View className=" mx-4 ">
            <Image className="h-8 w-8 bg-gray-300 p-4 mx-4 rounded-full" source={{ url: 'https://links.papareact.com/wru' }} />
            <Text className="font-bold text-gray-400 text-xs">oumss78 </Text>
          </View>

        </View>
      </Text>

        {/* Camera */}
        <View className="h-full items-center">  
          <Text className=" font-semibold text-lg" >Paramètres du compte</Text>
          <Text>Zone</Text>
  
          <TouchableOpacity><Text>Zone</Text></TouchableOpacity>
          <TouchableOpacity><Text>Zone</Text></TouchableOpacity>
          <TouchableOpacity><Text>Zone</Text></TouchableOpacity>
          <TouchableOpacity><Text>Zone</Text></TouchableOpacity>

        </View>

      
    </SafeAreaView>
  )
}

export default Settings

const styles = StyleSheet.create({})