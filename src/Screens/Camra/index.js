import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  Linking,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

export const Camra = () => {
  const [loading, setLoading] = useState(null);
  const [flashtoggle, setFlashToggle] = useState(false);
  const cameraRef = useRef(Camera);
  const [camView, setCamView] = useState('back');
  const [torch, setTorch] = useState('off');
  const [show, setShow] = useState(false);
  const devices = useCameraDevices('wide-angle-camera');
  const device = camView === 'back' ? devices.back : devices.front;

  const cameraPermission = useCallback(async () => {
    const permission = await Camera.requestMicrophonePermission();
    if (permission === 'denied') {
      await Linking.openSettings();
    }
    setLoading(devices);
    console.log(devices);
  }, [devices]);

  useEffect(() => {
    cameraPermission();
  }, [cameraPermission, devices]);

  const recordingVideo = () => {
    const rVideo = cameraRef.current.startRecording({
      flash: 'on',
      onRecordingFinished: video => console.log(video),
      onRecordingError: error => console.error(error),
    });
    console.log(rVideo);
  };

  const stopVideo = async () => {
    await cameraRef.current.stopRecording();
  };

  if (device == null) {
    return <ActivityIndicator style={{flex: 1}} size={50} color="red" />;
  }

  return (
    <>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        video={true}
        ref={cameraRef}
      />

      <View>
        <Button
          onPress={() => {
            alert('Ligh On');
            setFlashToggle(!flashtoggle);
            torch === 'off' ? setTorch('on') : setTorch('off');
          }}
          title="Camera"
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          recordingVideo();
          setShow(true);
        }}>
        {show === false ? (
          <Image
            style={styles.startRec}
            source={require('../../Assets/Images/CameraIcons/startRecording.png')}
          />
        ) : (
          true
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          stopVideo();
        }}>
        {show === true ? (
          <Image
            style={styles.stopRec}
            source={require('../../Assets/Images/CameraIcons/stopRecording.png')}
          />
        ) : (
          false
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          camView === 'back' ? setCamView('front') : setCamView('back');
        }}>
        <Image
          style={[
            {
              uri: 'https://tse4.mm.bing.net/th?id=OIP.h7XvNR8pB_ZjlvrcSWQ2zQHaHa&pid=Api&P=0',
            },
            styles.imgStyle,
          ]}
        />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
    imgStyle: {
      height: 100,
      width: 100,
      color: 'red',
    },
    startRec: {
      height: 100,
      width: 100,
      position: 'absolute',
      top: 570,
      left: 130,
    },
    stopRec: {
      height: 100,
      width: 100,
      position: 'absolute',
      top: 570,
      left: 130,
    },
});