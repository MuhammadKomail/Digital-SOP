import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import VideoPlayer from "react-native-video-player"

export const Settings = () => {
  const Navigation = useNavigation()
  return (
    <View
      style={{
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
      }}>
       
       <VideoPlayer
    video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
    // videoWidth={1600}
    // videoHeight={900}
    // thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
/>

      <Button
        mode="contained"
        onPress={() => Navigation.navigate('Profile')}>
        Go to Prof
      </Button>
    </View>
  );
};
