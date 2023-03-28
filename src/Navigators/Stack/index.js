import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../../Screens/Home';
import { Notifications } from '../../Screens/Notifications';
import { Profile } from '../../Screens/Profile';
import { Settings } from '../../Screens/Settings';
import SimpleBottomTab from '../SimpleBottomScreen';
import CurveBottomBar from '../CurveBottomScreen';
import { Login } from '../../Screens/Login';
import CameraScreen from '../../Screens/CapturePhotoVideo';
import { AddMessage } from '../../Screens/AddMessage';
import { AddMoreDetail } from '../../Screens/AddMoreDetail';
import {Camra} from '../../Screens/Camra';
// import Loader from '../../Components/Loader';
// import { PhotoVideo } from '../../Screens/CapturePhotoVideo';

export default function StackNavigator() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{    
          headerShown: false,
        }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="CurveBottomBar" component={CurveBottomBar} />
        <Stack.Screen name="AddMessage" component={AddMessage} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="SimpleBottomTab" component={SimpleBottomTab} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="AddMoreDetail" component={AddMoreDetail} />
        <Stack.Screen name="Camra" component={Camra} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}