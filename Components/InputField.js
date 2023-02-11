import React,{useState} from'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

const[email,setEmail]= useState("")
const[password,setPassword]=useState("")

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#289dd2',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
      }}>
      {icon}
      {inputType == 'password' ?
       (
        <TextInput
          placeholder={label}
          value={password}
          onChangeText={setPassword}
          keyboardType={keyboardType}
          style={{flex: 1, paddingVertical: 0}}
          secureTextEntry={true}
        />
      ) : (
        <TextInput
          placeholder={label}
          value={email}
          onChangeText={setEmail}
          keyboardType={keyboardType}
          style={{flex: 1, paddingVertical: 0}}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{color: '#289dd2', fontWeight: '700'}}>{fieldButtonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
}