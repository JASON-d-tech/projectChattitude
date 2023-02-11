import React,{useRef,useEffect, useState}from 'react'
import { SafeAreaView, View, Text} from 'react-native';
import {Animated } from 'react-native';

import Logo from '../assets/images/ChattitudeLogo.png';
import FontFamily from '../assets/Fonts/A DAY WITHOUT SUN.otf'

const [loaded] = useFonts ({});
if (!loaded) { null;}

const SplashScreen = ({navigation}) => {
  const moveAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: Dimensions.get('window').width / 1.6,
        delay: 0,
        useNativeDriver: false,
      }),
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: 0,
        delay: 0,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.timing(fadeAnim, {
      duration: 2000,
      toValue: 1,
      delay: 2000,
      useNativeDriver: false,
    }).start();
  }, [moveAnim, fadeAnim]);

  const [timePassed, setTimePassed] = useState(false);
  setTimeout (function(){setTimePassed(true);},4000);
  if (!timePassed)  {  

  return (

    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
      }}>

        <View>  
      <Animated.View 
        style={{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
        }}>

        <Logo
          width={100}
          height={100}
          style={{opacity: fadeAnim}}
        />

       </Animated.View>
     </View>

     <View>   
      <Animated.View style={{marginTop: 20}}>

          <Text>      
           < FontFamily
          style={{
            fontFamily: 'A DAY WITHOUT SUN',
            fontWeight: '700',
            fontSize: 35,
            color: '#289dd2',
            flexDirection:'row',
            marginLeft:moveAnim,
          }}>
          C
          </FontFamily>
        </Text>

         <Text>     
          < FontFamily
         style={{
         fontFamily: 'A DAY WITHOUT SUN',
         fontWeight: '700',
         fontSize: 35,
         color: '#289dd2',
         flexDirection:'row',
         opacity:fadeAnim,
         }}>

          hattitude

        </FontFamily>

      </Text>
      </Animated.View>
      </View>
    </SafeAreaView>

  );
};

    navigation.navigate('LoginScreen');
     return null;
  };
export default SplashScreen;