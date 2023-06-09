import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import StackNavigator from './src/Navigators/Stack';
import { Provider } from 'react-redux';
import { Store } from './src/Store';
// import { Camera } from 'react-native-vision-camera';

const App = () => {



  const [state, setState] = useState()

  // useEffect(() => {
  //   (async () => {

  //     //Put your logic here

  //     getPermission()
  //     checkIfCameraAccessIsGivenOrNot()
  //   })();
  // }, [])

  // const getPermission = async () => {
  //   const newCameraPermission = await Camera.requestCameraPermission()
  //   const newMicrophonePermission = await Camera.requestMicrophonePermission()

  // }

  // const checkIfCameraAccessIsGivenOrNot = async () => {
  //   const cameraPermission = await Camera.getCameraPermissionStatus()
  //   console.log('cameraPermission: ', cameraPermission);
  // }

  return (
    <Provider store={Store}>
      <PaperProvider>
        <StackNavigator />
      </PaperProvider>
      <FlashMessage position="center" />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
