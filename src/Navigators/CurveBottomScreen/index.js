import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, Animated, Dimensions, Pressable, ScrollView, TouchableOpacity, View } from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import { Button, Text } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Home } from '../../Screens/Home';
import { Notifications } from '../../Screens/Notifications';
import { Profile } from '../../Screens/Profile';
import { Settings } from '../../Screens/Settings';
import { styles } from './style';
import { launchCamera } from 'react-native-image-picker';
import BottomSheet from '../../Components/ReusableComponent/BottomSheet';
import COLORS from '../../Assets/Style/Color';
import Icons from 'react-native-vector-icons/MaterialIcons';

const CurveBottomBar = () => {
  const Navigation = useNavigation();

  const [bottomSHeetState, setBottomSHeetState] = useState(false);
      // refRBSheet.current.open();
  useEffect(()=>{
      // refRBSheet.current.open();
  },[])

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

  const openCamera = () => {
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
        Navigation.navigate('AddMessage', { imgUri: res.assets[0].uri })

      } else if (res.didCancel) {
        console.log('cancel');
        console.log(res.didCancel);
      }
    });
  };
  const refRBSheet = useRef(null);
  console.log('refRBSheet: ', refRBSheet.current);
  // refRBSheet.current.open();

  {
    refRBSheet.current !== null &&
      (
        <BottomSheet refRBSheets={refRBSheet} height={160}>
          <View
            style={{
              alignItems: 'flex-start',
              margin: '8%',
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <View
              style={{
                marginLeft: 10,
              }}>
              <Pressable>
                <View
                  style={{
                    backgroundColor: COLORS.primary,
                    borderRadius: 25,
                    width: 50,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icons name="photo-camera" color={'#fff'} size={30} />
                </View>
              </Pressable>
              <Text>Camera</Text>
            </View>
            <View
              style={{
                marginLeft: 40,
              }}>
              <Pressable>
                <View
                  style={{
                    backgroundColor: COLORS.primary,
                    borderRadius: 25,
                    padding: 10,
                  }}>
                  <Icons name="photo-library" color={'#fff'} size={30} />
                </View>
              </Pressable>
              <Text>Camera</Text>
            </View>
          </View>
        </BottomSheet>
      )
  }

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
              onPress={() => openCamera()}
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