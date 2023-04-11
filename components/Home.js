import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon } from "react-native-heroicons/outline"


const Home = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Accueil",
      headerShown : true
    })
  }, []);

  return (
    
    <SafeAreaView>
      <Text>
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image className="h-8 w-8 bg-gray-300 p-4 rounded-full" source={{uri: 'https://links.papareact.com/wru' }} />
          <View>
            <Text className="font-bold text-gray-400 text-xs">Current Location</Text>
            <Text className="font-bold text-xl">C du propre
            <ChevronDownIcon size={20} color="#00CCBB"/>
            </Text>
          </View>
        </View>
      </Text>
    </SafeAreaView>
  )
}

export default Home;