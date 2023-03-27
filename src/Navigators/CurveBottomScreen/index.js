import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import { Text } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Home } from '../../Screens/Home';
import { Notifications } from '../../Screens/Notifications';
import { Profile } from '../../Screens/Profile';
import { Settings } from '../../Screens/Settings';
import { styles } from './style';
import { launchCamera } from 'react-native-image-picker';


const CurveBottomBar = () => {
  const Navigation = useNavigation();

  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';

    switch (routeName) {
      case 'home':
        icon = 'home';
        screenName = 'Home';
        break;
      case 'setting':
        icon = 'ios-share-social-outline';
        screenName = 'SOP';
        break;
      case 'notification':
        icon = 'shield-outline';
        screenName = 'Privacy';
        break;
      case 'profile':
        icon = 'newspaper-outline';
        screenName = 'Contact Us';
        break;
    }

    return (
      <>
        <Ionicons
          name={icon}
          size={25}
          color={routeName === selectedTab ? 'black' : 'grey'}
        />
        <Text style={{ fontSize: 10 }}>{screenName}</Text>
      </>
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  const openCamera1 = () => {
    let option = {
      include64: true,
      mediaType: 'photo',
    };
    launchCamera(option, res => {
      console.log(res);
      if (res.assets) {
        // setBanner(res.assets[0].uri);
        console.log('Response:', res.assets[0].uri);
        console.log(res);
        console.log('custom bottom bar');
        Navigation.navigate('AddMessage')

      } else if (res.didCancel) {
        console.log('cancel');
        console.log(res.didCancel);
      }
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <CurvedBottomBar.Navigator
        style={{ backgroundColor: 'transparent' }}
        strokeWidth={5}
        height={59}
        circleWidth={55}
        bgColor={'#EFF1FD'}
        initialRouteName="home"
        renderCircle={() => (
          <Animated.View style={styles.btnCircle}>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
              }}
              onPress={() => openCamera1()}
            >
              <Ionicons name={'add'} style={{ fontWeight: 'bold' }} color={'#D2D2DE'} size={30} />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}>
        <CurvedBottomBar.Screen
          options={{ headerShown: false }}
          name="home"
          position="LEFT"
          component={Home}
        />
        <CurvedBottomBar.Screen
          options={{ headerShown: false }}
          name="setting"
          position="LEFT"
          component={Settings}
        />
        <CurvedBottomBar.Screen
          options={{ headerShown: false }}
          name="notification"
          component={Notifications}
          position="RIGHT"
        />
        <CurvedBottomBar.Screen
          options={{ headerShown: false }}
          name="profile"
          component={Profile}
          position="RIGHT"
        />

      </CurvedBottomBar.Navigator>
    </View>
  );
};
export default CurveBottomBar;