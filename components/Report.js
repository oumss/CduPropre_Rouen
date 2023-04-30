import { StyleSheet, Text, View, Image, SafeAreaView, Button, StatusBar } from 'react-native'
import React, { useLayoutEffect, useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';


const Report = () => {

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Signalement",
      headerShown: false
    })
  }, []);

  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: true
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };



    return (
      <SafeAreaView className="h-full bg-white pt-5">
        <Text>
          {/* Header */}
          <View className="flex-row pb-2 items-center mx-4 space-x-2 pt-5 ">
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
        <View className="h-full flex-1 items-center justify-center">
          <Text className=" font-semibold text-lg" >Signaler un déchet</Text>
          <Text>Camera Zone</Text>

          <Image className="self-stretch flex-1" source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
          <Button title="Share" onPress={sharePic} />
          {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> : undefined}
          <Button title="Discard" onPress={() => setPhoto(undefined)} />
        </View>

      </SafeAreaView>
    )
  }

return (
  <SafeAreaView className="h-full bg-white pt-5">
    <Text>
      {/* Header */}
      <View className="flex-row pb-2 items-center mx-4 space-x-2 pt-5 ">
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
    <Camera className="flex-1 items-center justify-center" ref={cameraRef}>
      <View className="bg-white" style={{ alignSelf: 'flex-end' }} >
        <Button title="Take Pic" onPress={takePic} />
      </View>
      <StatusBar style="auto" />
    </Camera>
  </SafeAreaView>

)
}
  export default Report