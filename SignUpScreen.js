import React, {useState} from 'react';
import { SafeAreaView,ScrollView,View,} from 'react-native';
import {Text,TouchableOpacity,} from 'react-native';

import DatePicker from 'react-native-date-picker';

import InputField from '../components/InputField';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SeaAnemone from'../assets/images/seaAnemone.jpeg';
import Facebook from '../assets/images/facebookLogo.png';
import Twitter from '../assets/images/twitterLogo.jpeg';
import Google from '../assets/images/googleLogo.png';
import FontFamily from '../assets/Fonts/A DAY WITHOUT SUN.otf';

import CustomButton from '../components/CustomButton';

const SignUpScreen = ({navigation}) => {

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState('Date of Birth');

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <ScrollView
        style={{paddingHorizontal: 25}}>

        <View style={{alignItems: 'center'}}>
          
          <SeaAnemone
            height={300}
            width={300}
          />

        </View>

        <Text>
        <FontFamily   
          style={{
            fontFamily: 'A DAY WITHOUT SUN',
            fontSize: 28,
            fontWeight:'500',
            color:'#289dd2',
            marginBottom:30,
          }}>
          Welcome to Chattitude!
          </FontFamily>
        </Text>

        <Text> 
        <FontFamily
        style={{
         textAlign: 'center', 
         color: '#289DD2',
         fontWeight:'400', 
         fontSize:20,
         marginBottom:30,
         }}>
          Create user account
          </FontFamily>
        </Text>

        <InputField
          label={'Full Name'}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#289dd2"
              style={{marginRight: 5}}
            />
          }
        />

        <InputField
          label={'Email ID'}
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

        <InputField
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
        />

        <InputField
          label={'Confirm Password'}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#289dd2"
              style={{marginRight: 5}}
            />
          }
          inputType="password"
        />

        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#289dd2',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 30,
           }}>
          <Ionicons
            name="calendar-outline"
            size={20}
            color="#289dd2"
            style={{marginRight: 5}}
          />
          <TouchableOpacity onPress={() => setOpen(true)}>
            <Text style={{color: 'grey', marginLeft: 5, marginTop: 5}}>
              {dobLabel}
            </Text>
          </TouchableOpacity>
        </View>

         <DatePicker
           modal
           open={open}
           date={date}
           mode={'date'}
           minimumDate={new Date('1920-01-01')}
           onConfirm={date => {
            setOpen(false);
            setDate(date);
            setDobLabel(date.toDateString());
           }}
           onCancel={() => {
            setOpen(false);
          }}
        />

        <CustomButton label={'Sign in'} onPress={() => {}} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
           }}>
           <Text>
            <FontFamily>   
           {{
            color:'#289dd2',
            fontWeight:'500',
            }}
            Already Signed?
            </FontFamily>
            </Text>

           <TouchableOpacity onPress={() => navigation.goBack()}>

             <Text>
              <FontFamily   
                   style= {{color: '#289dd2', 
                   fontWeight: '700'
                   }}> 

               Login
               </FontFamily>
               </Text>
           </TouchableOpacity>
        </View>

        <Text>
        <FontFamily    
         style={{textAlign: 'center', color: '#289dd2', marginBottom: 30}}>
          Or, login with...
          </FontFamily>
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

      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;