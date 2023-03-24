import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, ImageBackground, Pressable, ScrollView, View, TextInput } from 'react-native';
import { Text, } from 'react-native-paper';
import { useSelector } from 'react-redux';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Heading from '../../Components/ReusableComponent/Heading';
import COLORS from '../../Assets/Style/Color';
import BottomSheet from '../../Components/ReusableComponent/BottomSheet';
import Input from '../../Components/ReusableComponent/Input';
import ButtonComp from '../../Components/ReusableComponent/Button';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export const AddMoreDetail = ({ route }) => {
    const Navigation = useNavigation();

    const imgUri = route.params;
    console.log('imgUri: ', imgUri);

    const { AuthReducer } = useSelector(state => state);
    console.log('reducerData: ', AuthReducer.userData);

    const refRBSheet = useRef(null);
    const refRBSheet1 = useRef(null);
    useEffect(() => {
        refRBSheet.current.open();
    }, []);

    const height = Dimensions.get('window').height;
    const FilterHeight = height * 0.9;


    const openGallery = () => {
        let option = {
            include64: true,
            mediaType: 'photo',
        };
        launchImageLibrary(option, res => {
            console.log(res);
            if (res.assets) {
                console.log(res.assets[0].uri);
                console.log('library Image');
                console.log(res);
                refRBSheet1.current.close();
            } else if (res.didCancel) {
                console.log('cancel');
                console.log(res.didCancel);
            }
        });
    };

    const openCamera = () => {
        let option = {
            include64: true,
            mediaType: 'photo',
        };
        launchCamera(option, res => {
            console.log(res);
            if (res.assets) {
                console.log(res.assets[0].uri);
                console.log('lCamera Img');
                console.log(res);
                refRBSheet1.current.close();
                // setIsImageUpload(true);
            } else if (res.didCancel) {
                console.log('cancel');
                console.log(res.didCancel);
            }
        });
    };



    return (
        <>
            <SafeArea>
                <View style={{ flex: 1 }}>
                    <ImageBackground
                        source={require('../../Assets/Images/HomeScreen/backImage.png')}
                        style={{ height: '82%', width: '100%' }}>
                        <View style={{ margin: '5%' }}>
                            {/* Header */}
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Pressable onPress={() => { Navigation.navigate('Profile'); }}>
                                    <View>
                                        <Image
                                            source={require('../../Assets/Images/ProfileImage/profileIcon.png')}
                                            style={{ width: 30, height: 30 }}
                                        />
                                    </View>
                                </Pressable>
                                <View>
                                    <Heading
                                        Stylefont={'normal'}
                                        Fontweight={'700'}
                                        Fontsize={14}
                                        Heading={'Digital-SOP'}
                                        txtAlign={'center'}
                                        as={'center'}
                                        c={COLORS.white}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                        <Pressable onPress={() => { console.log('press'); }}>
                                            <Ionicons
                                                name={'search'}
                                                size={20}
                                                color={'white'}
                                                style={{ flexDirection: 'column-reverse', justifyContent: 'center', marginHorizontal: '1%' }}
                                            />
                                        </Pressable>
                                    </View>
                                    <View>
                                        <Pressable onPress={() => { console.log('press'); }}>
                                            <Ionicons
                                                name={'ios-notifications'}
                                                size={20}
                                                color={'white'}
                                                style={{ marginHorizontal: '2%' }}
                                            />
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <BottomSheet refRBSheets={refRBSheet} height={FilterHeight}>
                    <ScrollView>
                        <View style={{ marginVertical: '5%' }}>

                            <View style={{ paddingHorizontal: '8%' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                    <View style={{ marginVertical: '5%' }}>
                                        <Pressable onPress={() => { Navigation.navigate('CurveBottomBar'); }}>
                                            <Text style={{ color: 'blue' }}>Cancel</Text>
                                        </Pressable>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', marginVertical: '9%' }}>
                                    <View>
                                        <Image
                                            source={require('../../Assets/Images/addThumbnail/img.png')}
                                            style={{ width: 70, height: 70 }}
                                        />
                                    </View>
                                    <View style={{ alignContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                                        <ButtonComp
                                            btnHeight={55}
                                            btnText={'Add Thumbnail'}
                                            justify={'center'}
                                            align={'center'}
                                            fontSize={13}
                                            radius={15}
                                            txtwidth={'60%'}
                                            txtColor={COLORS.white}
                                            color={COLORS.darkMode}

                                            press={() => { refRBSheet1.current.open() }}
                                        />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                    <View style={{ borderRadius: 50, width: '100%', marginHorizontal: '1%', }}>
                                        <Image
                                            source={require('../../Assets/Images/HomeScreen/itemImg.png')}
                                            style={{ width: 80, height: 80, borderRadius: 15 }}
                                        />
                                        <View style={{ position: 'absolute', marginLeft: '20%', }}>
                                            <Text style={{ position: 'absolute', color: COLORS.white, backgroundColor: 'green', padding: 10, borderRadius: 20, marginBottom: 10 }}>1</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View
                                style={{
                                    marginHorizontal: '8%',
                                    marginVertical: '5%'
                                }}>
                                <Input
                                    outline={COLORS.dark}
                                    mode={'outlined'}
                                    label="D-SOP Title"
                                />
                                <Input
                                    Keyboard={'email-address'}
                                    outline={COLORS.dark}
                                    mode={'outlined'}
                                    label="Select User"
                                />
                            </View>
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    flexDirection: 'row',
                                    margin: '8%',
                                }}>
                                <ButtonComp
                                    btnwidth={'97%'}
                                    btnHeight={56}
                                    btnText={'Share'}
                                    justify={'center'}
                                    align={'center'}
                                    fontSize={16}
                                    radius={15}
                                    txtwidth={'100%'}
                                    txtColor={COLORS.white}
                                    color={COLORS.darkMode}
                                />
                            </View>
                        </View>

                    </ScrollView>
                </BottomSheet>

                <BottomSheet refRBSheets={refRBSheet1} height={160}>
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
                            <Pressable onPress={() => { openCamera() }}>
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
                            <Text> Camera</Text>
                        </View>
                        <View
                            style={{
                                marginLeft: 40,
                            }}>
                            <Pressable onPress={() => { openGallery() }}>
                                <View
                                    style={{
                                        backgroundColor: COLORS.primary,
                                        borderRadius: 25,
                                        padding: 10,
                                    }}>
                                    <Icons name="photo-library" color={'#fff'} size={30} />
                                </View>
                            </Pressable>
                            <Text> Gallery</Text>
                        </View>
                    </View>
                </BottomSheet>
            </SafeArea>
        </>
    );
};
