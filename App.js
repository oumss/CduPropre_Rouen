import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GOOGLE_MAPS_APIKEY } from "@env";

// Screens
import Home from "./components/Home"
import Report from './components/Report';
import Settings from './components/Settings';
import Cashback from './components/Cashback';

//Screen names
const homeName = "Accueil";
const reportName = "Signaler";
const settingsName = "Compte";
const cashbackName = "Cashback";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Tab.Navigator
          initialRouteName={homeName}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

              if (rn === homeName) {
                iconName = focused ? 'home' : 'home-outline';

              } else if (rn === reportName) {
                iconName = focused ? 'add-circle' : 'add-circle-outline';

              } else if (rn === cashbackName) {
                iconName = focused ? 'cart' : 'cart-outline';

              } else if (rn === settingsName) {
                iconName = focused ? 'person' : 'person-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          
          tabBarOptions={{
            activeTintColor: '#ACC687',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 5, paddingTop: 5, fontSize: 10 },
            style: { padding: 10, height: 100}
          }}>
            
          <Tab.Screen name={homeName} component={Home} />
          <Tab.Screen name={reportName} component={Report} />
          <Tab.Screen name={cashbackName} component={Cashback} />
          <Tab.Screen name={settingsName} component={Settings} />

        </Tab.Navigator> 
      </TailwindProvider>
    </NavigationContainer>
  );
}

