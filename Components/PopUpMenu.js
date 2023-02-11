import React,{useState} from 'react';
import {TouchableOpacity,View,Modal,SafeAreaView,StyleSheet,Text,} from 'react-native';
import Icons from 'react-native-vector-icons/materialCommunityIcons/SimpleLineIcons';

const PopUpMenu = () =>{
  const [visible,setVisible] = useState (false);
  
  const options = [
                   {icon:'account-tie-outline',title:'Account',action:()=>alert('item 1')},
                   {icon:'all-inclusive',title:'All',action:()=>alert('item 2')},
                   {icon:'alpha',title:'Alpha',action:()=>alert('item 3')},
                   {icon:'atom',title:'Atomic',action:()=>alert('item 4')},
                  ];
  return (
      <>
      <TouchableOpacity onPress={() => setVisible(true)}>
          <Icons name=" opptions-verticle" size={28} color={'#212121'} />
      </TouchableOpacity>

      <Modal transparent visible={visible}>
              <SafeAreaView style={{ flex: 1 }} onTouchStart={() => setVisible(false)}>

                  <View>
                      <PopUp style={{
                          borderRadius: 8,
                          borderColor: '#333',
                          borderWidth: 1,
                          backgroundColor: '#fff',
                          paddingHorizontal: 10,
                          position: 'absolute',
                          top: 76,
                          right: 20,
                      }}>
                          {options.map((op, i) => (

                              <TouchableOpacity

                                  style={{
                                      flexDirection: 'row',
                                      justifyContent: 'space-between',
                                      alignItems: 'center',
                                      paddingVertical: 7,
                                  }}


                                  key={i} onPress={() => op.action}>
                                  <Text> {op.title}</Text>
                                  <Icons name={op.icon} size={26} color={'#212121'} />

                              </TouchableOpacity>))}
                      </PopUp>

                  </View>
              </SafeAreaView>
          </Modal>
          </>
  );
};

export default PopUpMenu;  