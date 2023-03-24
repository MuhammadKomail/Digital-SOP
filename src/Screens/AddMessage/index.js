import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, ImageBackground, Pressable, ScrollView, View, TextInput } from 'react-native';
import { Text, } from 'react-native-paper';
import { useSelector } from 'react-redux';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Heading from '../../Components/ReusableComponent/Heading';
import COLORS from '../../Assets/Style/Color';
import BottomSheet from '../../Components/ReusableComponent/BottomSheet';

export const AddMessage = ({ route }) => {
    const Navigation = useNavigation();

    const imgUri = route.params;
    console.log('imgUri: ', imgUri);

    const { AuthReducer } = useSelector(state => state);
    console.log('reducerData: ', AuthReducer.userData);

    const refRBSheet = useRef(null);
    useEffect(() => {
        refRBSheet.current.open();
    }, []);

    const height = Dimensions.get('window').height;
    const FilterHeight = height * 0.9;



    return (
        <>
            <SafeArea>
                <View style={{ flex: 1, }}>
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
                </View >
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
                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                    <View style={{ borderRadius: 50, width: '100%', marginHorizontal: '1%', }}>
                                        <Image
                                            source={require('../../Assets/Images/HomeScreen/itemImg.png')}
                                            style={{ width: '100%', height: 250, borderRadius: 15 }}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View
                                style={{
                                    backgroundColor: COLORS.white,
                                    borderBottomColor: '#000000',
                                    borderBottomWidth: 1,
                                    marginHorizontal: '8%',
                                    borderRadius: 15,
                                    marginTop: 10
                                }}>
                                <TextInput
                                    editable
                                    multiline
                                    numberOfLines={4}
                                    maxLength={40}
                                />
                            </View>
                            <View style={{ justifyContent: 'space-between', alignContent: 'center', flexDirection: 'row', marginVertical: 30, alignSelf: 'center', paddingHorizontal: 20 }}>
                                <View style={{ backgroundColor: 'black', alignItems: 'center', padding: '4%', borderRadius: 10, marginHorizontal: '10%' }}>
                                    <Pressable onPress={() => { console.log('press'); }}>
                                        <Entypo
                                            name={'plus'}
                                            size={25}
                                            color={'white'}
                                            style={{ marginHorizontal: '2%' }}
                                        />
                                    </Pressable>
                                </View>
                                <View style={{ backgroundColor: 'black', alignItems: 'center', padding: '4%', borderRadius: 10, marginHorizontal: '10%' }}>
                                    <Pressable onPress={() => { Navigation.navigate('AddMoreDetail'); }}>
                                        <Ionicons
                                            name={'checkmark-outline'}
                                            size={25}
                                            color={'white'}
                                            style={{ marginHorizontal: '2%' }}
                                        />
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </BottomSheet>
            </SafeArea>
        </>
    );
};
