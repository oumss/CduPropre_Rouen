import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
  );
} 

