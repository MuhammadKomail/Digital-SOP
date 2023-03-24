import { Formik } from 'formik';
import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, View } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import COLORS from '../../Assets/Style/Color';
import ButtonComp from '../../Components/ReusableComponent/Button';
import Heading from '../../Components/ReusableComponent/Heading';
import Input from '../../Components/ReusableComponent/Input';
import * as yup from 'yup';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import { GoogleAuth } from '../../Components/GoogleAuth';
import { FaceBookAuth } from '../../Components/FaceBook';
import { useNavigation } from '@react-navigation/native';

export const Login = () => {
  const [passHide, setPassHide] = useState(false);
  const [loading, setLoading] = useState(false);

  let loginValidationScheme = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email address is required '),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required '),
  });
  const Navigation = useNavigation()


  const simpleLogin = value => {
    console.log('Values: ', value);
    Navigation.navigate('CurveBottomBar')
  }
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validateOnMount={true}
        onSubmit={values => {
          simpleLogin(values);
          // console.log("values",values);
        }}
        validationSchema={loginValidationScheme}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
          isValid,
        }) => (
          <SafeArea>
            {loading ? (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <ActivityIndicator size="large" color="#00ff00" />
              </View>
            ) : (
              <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                  <View style={{}}>
                    <Image
                      source={require('../../Assets/Images/Login/profileFront.jpg')}
                      style={{ width: '100%', height: 300 }}
                    />
                  </View>
                  <View style={{ backgroundColor: '#95A4C1' }}>
                    <View
                      style={{
                        justifyContent: 'space-between',
                        flexGrow: 1,
                        backgroundColor: 'white',
                        borderTopLeftRadius: 70,
                        borderTopRightRadius: 70,
                        paddingBottom: '12%'
                      }}>

                      <View style={{ marginHorizontal: '4%' }}>
                        <View>
                          <Heading
                            Stylefont={'normal'}
                            Fontweight={'700'}
                            Fontsize={18}
                            txtAlign={'center'}
                            p={10}
                            lh={40}
                            Heading={'Login'}
                          />
                        </View>
                        <View>
                          <View style={{ marginVertical: '5%' }}>
                            <Input
                              Onchange={handleChange('email')}
                              Onblur={handleBlur('email')}
                              Value={values.email}
                              Keyboard={'email-address'}
                              outline={COLORS.border_color}
                              mode={'outlined'}
                              label="Email address"
                            />
                            {errors.email && touched.email && (
                              <Text
                                style={{
                                  fontSize: 12,
                                  color: 'red',
                                  marginTop: 5,
                                  marginBottom: 5,
                                  marginLeft: 15,
                                }}>
                                {errors.email}
                              </Text>
                            )}
                          </View>
                          <View style={{ marginVertical: '2%' }}>
                            <Input
                              iconFunction={() => setPassHide(!passHide)}
                              rightIcon={true}
                              IconName={passHide ? 'eye-outline' : 'eye-off-outline'}
                              Onchange={handleChange('password')}
                              Onblur={handleBlur('password')}
                              Value={values.password}
                              Pass={passHide ? false : true}
                              outline={COLORS.border_color}
                              mode={'outlined'}
                              label="Password"
                            />
                            {errors.password && touched.password && (
                              <Text
                                style={{
                                  fontSize: 12,
                                  color: 'red',
                                  marginTop: 5,
                                  marginBottom: 5,
                                  marginLeft: 15,
                                }}>
                                {errors.password}
                              </Text>
                            )}
                          </View>
                        </View>

                        <View style={{ alignContent: 'flex-end', justifyContent: 'flex-end', alignSelf: 'flex-end' }}>
                          <ButtonComp
                            mode={'text'}
                            btnText={'forgot password?'}
                            fontStyle={'bold'}
                            fontSize={12}
                            txtColor={'#809FE0'}
                          />
                        </View>
                        <View
                          style={{
                            justifyContent: 'center',
                            alignContent: 'center',
                            flexDirection: 'row',
                            marginVertical: '4%',
                          }}>
                          <ButtonComp
                            btnwidth={'97%'}
                            btnHeight={56}
                            btnText={'login'}
                            justify={'center'}
                            align={'center'}
                            fontSize={16}
                            radius={5}
                            txtwidth={'100%'}
                            txtColor={COLORS.white}
                            color={isValid ? COLORS.darkMode : COLORS.border_color}
                            enable={!isValid}
                            press={handleSubmit}
                          />
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                          <Text
                            style={{
                              fontSize: 11,
                              color: COLORS.dark,
                              alignContent: 'center',
                              // backgroundColor:'red',
                              alignSelf: 'center'
                            }}>
                            Don't have an account ?
                          </Text>
                          <ButtonComp
                            mode={'text'}
                            btnText={'contact you administrator'}
                            fontStyle={'bold'}
                            fontSize={11}
                            txtColor={'#6BB5FD'}
                          // color='red'
                          />
                        </View>

                      </View>

                    </View>
                  </View>
                </View>
              </ScrollView>
            )}
          </SafeArea>
        )}
      </Formik>
    </>
  );
};
