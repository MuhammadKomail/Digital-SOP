import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { Dimensions, Image, ImageBackground, Pressable, ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Heading from '../../Components/ReusableComponent/Heading';
import COLORS from '../../Assets/Style/Color';
import BottomSheet from '../../Components/ReusableComponent/BottomSheet';

export const Home = () => {
  const Navigation = useNavigation();

  const { AuthReducer } = useSelector(state => state);
  console.log('reducerData: ', AuthReducer.userData);

  const refRBSheet = useRef(null);
  useEffect(() => {
  }, []);

  const height = Dimensions.get('window').height;
  const FilterHeight = height * 0.69;



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
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ marginVertical: '5%' }}>
                    <Text style={{ fontSize: 14 }}>Recent View</Text>
                    <Text style={{ fontSize: 10 }}>All Digital SOP Guide</Text>
                  </View>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>
                    <View style={{ marginVertical: '5%' }}>
                      <Pressable onPress={() => { console.log('press'); }}>
                        <Ionicons
                          name={'arrow-forward'}
                          size={20}
                          color={'black'}
                        />
                      </Pressable>
                    </View>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                  <View style={{ borderRadius: 10, width: '50%', marginHorizontal: '1%' }}>
                    <Image
                      source={require('../../Assets/Images/HomeScreen/itemImg.png')}
                      style={{ width: '100%', height: 100, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                    />
                    <Text style={{ padding: 5, fontSize: 10, backgroundColor: COLORS.white, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>Digital SOP For User Digital SOP For User</Text>
                  </View>
                  <View style={{ borderRadius: 10, width: '50%', marginHorizontal: '1%' }}>
                    <Image
                      source={require('../../Assets/Images/HomeScreen/itemImg.png')}
                      style={{ width: '100%', height: 100, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                    />
                    <Text style={{ padding: 5, fontSize: 10, backgroundColor: COLORS.white, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>Digital SOP For User Digital SOP For User</Text>
                  </View>
                </View>
              </View>

              <View style={{ paddingHorizontal: '8%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ marginVertical: '5%' }}>
                    <Text style={{ fontSize: 14 }}>Recent View</Text>
                    <Text style={{ fontSize: 10 }}>All Digital SOP Guide</Text>
                  </View>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>
                    <View style={{ marginVertical: '5%' }}>
                      <Pressable onPress={() => { console.log('press'); }}>
                        <Ionicons
                          name={'arrow-forward'}
                          size={20}
                          color={'black'}
                        />
                      </Pressable>
                    </View>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                  <View style={{ borderRadius: 10, width: '50%', marginHorizontal: '1%' }}>
                    <Image
                      source={require('../../Assets/Images/HomeScreen/itemImg.png')}
                      style={{ width: '100%', height: 100, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                    />
                    <Text style={{ padding: 5, fontSize: 10, backgroundColor: COLORS.white, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>Digital SOP For User Digital SOP For User</Text>
                  </View>
                  <View style={{ borderRadius: 10, width: '50%', marginHorizontal: '1%' }}>
                    <Image
                      source={require('../../Assets/Images/HomeScreen/itemImg.png')}
                      style={{ width: '100%', height: 100, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                    />
                    <Text style={{ padding: 5, fontSize: 10, backgroundColor: COLORS.white, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>Digital SOP For User Digital SOP For User</Text>
                  </View>
                </View>
              </View>

              <View style={{ paddingHorizontal: '8%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ marginVertical: '5%' }}>
                    <Text style={{ fontSize: 14 }}>PDF</Text>
                    <Text style={{ fontSize: 10 }}>All Digital SOP Guide</Text>
                  </View>


                </View>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                  <View style={{ borderRadius: 10, width: '50%', marginHorizontal: '1%' }}>
                    <Image
                      source={require('../../Assets/Images/HomeScreen/itemImg.png')}
                      style={{ width: '100%', height: 100, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                    />
                    <Text style={{ padding: 5, fontSize: 10, backgroundColor: COLORS.white, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>Digital SOP For User Digital SOP For User</Text>
                  </View>
                  <View style={{ borderRadius: 10, width: '50%', marginHorizontal: '1%' }}>
                    <Image
                      source={require('../../Assets/Images/HomeScreen/itemImg.png')}
                      style={{ width: '100%', height: 100, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                    />
                    <Text style={{ padding: 5, fontSize: 10, backgroundColor: COLORS.white, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>Digital SOP For User Digital SOP For User</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </BottomSheet>
      </SafeArea>
    </>
  );
};
