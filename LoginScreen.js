import React from 'react';
import {SafeAreaView,View,Text,TextInput,TouchableOpacity,} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import BluePillow from '../assets/images/BluePillow.jpeg';
import Google from '../assets/images/googleLogo.png';
import Facebook from '../assets/images/facebookLogo.png';
import Twitter from '../assets/images/twitterLogo.jpeg';
import FontFamily from '../assets/Fonts/A DAY WITHOUT SUN.otf';

import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';

const LoginScreen = ({navigation}) => {

  return (
    
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>

          <BluePillow
            height={300}
            width={300} 
          />
        </View>

        <Text>
        <FontFamily
          style={{
            fontFamily: 'A DAY WITHOUT SUN',
            fontSize: 28,
            fontWeight: '500',
            color: '#289dd2',
            marginBottom: 30,
          }}>
          Login
          </FontFamily>
        </Text>

        <InputField
          label={'Email Address'}
          icon={
            <MaterialIcons
            name="alternate-email"
            size={20}
            color="#289dd2"
            style={{marginRight: 5}}
          />
          }
          keyboardType="email-address"
        />

          <TextInput
          label={'Password'}
          icon={
            <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#289dd2"
            style={{marginRight: 5}}
          />
          }
          inputType="password"
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => {}}
        />
        
        <CustomButton label={"Login"} onPress={() => {}} />

        <Text style={{textAlign: 'center', color: '#289dd2', marginBottom: 30}}>

          Or, login with...
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#289dd2',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <Google height={24} width={24} />

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#289dd2',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>

            <Facebook height={24} width={24} />

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#289dd2',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>

            <Twitter height={24} width={24} />

          </TouchableOpacity>

        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text> 
          <FontFamily
          style={{
          color:'#289dd2',
          fontWeight:'300',
          fontFamily:'A DAY WITHOUT SUN'
         }}>
            New to Chattitude?

          </FontFamily>
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
             <Text>  
            <FontFamily 
              style= {{
                color: '#289dd2', 
                fontWeight: '300',
                fontFamily: 'A DAY WITHOUT SUN',
                }}>

              Create account

            </FontFamily>
             </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen 