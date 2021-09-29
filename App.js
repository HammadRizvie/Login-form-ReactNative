import React from 'react';
import auth from '@react-native-firebase/auth';
import { useState , useEffect } from 'react';
import { Button, TextInput, View } from 'react-native';
export default function App(){
const [email,setEmail] = useState()
const [password,setPassword] = useState()
const fun = () =>{

  // auth()
  // .createUserWithEmailAndPassword(email,password)
  // .then(() => {
  //   console.log('User account created & signed in!');
  // })
  // .catch(error => {
  //   if (error.code === 'auth/email-already-in-use') {
  //     console.log('That email address is already in use!');
  //   }

  //   if (error.code === 'auth/invalid-email') {
  //     console.log('That email address is invalid!');
  //   }

  //   console.error(error);
  // });
  auth()
  .signInWithEmailAndPassword(email,password)
  .then(() => {
    alert("perfect")
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
  


}

  return(
    <View>
      <TextInput placeholder="Email" style={{width:100,height:50}} 
      onChangeText = {(e)=>{setEmail(e)}}
      />
      <TextInput placeholder="Password" style={{width:100,height:50}} 
      onChangeText = {(e)=>{setPassword(e)}}
      />
      <Button
      title="press me"
      onPress = {fun}
      />
    </View>
  );
}
