import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'


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
        <View>
          <Image className="h-7 w-7 bg-gray-300 p-4 rounded-full" source={{uri: 'https://links.papareact.com/wru' }} />
          <View>
            <Text>Cdupropre</Text>
            <Text>Current location</Text>
          </View>
        </View>

      </Text>

    </SafeAreaView>
  )
}

export default Home;