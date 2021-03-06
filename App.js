
import React, { useState } from 'react';

import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import Register from './component/Register';


export default function App() {
  const [name, setName] = useState('seun');  
  return (
    <View style={styles.container}>
        <View>
          <Image style={styles.image} source={require('./assets/logo.png')} />
        </View>
        <View>    
            <Text style={styles.textContainer}>Login to Lecama</Text>
        </View>
        <View>    
            <TextInput style={styles.input} placeholder='Username' onChangeText={(val)=> setName(val)}/>
        </View>
        <View>    
            <TextInput style={styles.input} placeholder='Password'/>
        </View>
        <TouchableOpacity  onPress={()=> alert('akinkuowo')}>
            <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgetPassword}>
          <Text >Forget Password?</Text>
        </TouchableOpacity>
        <View></View>
        <View style={styles.Account}>
          <Text >Dont't have an Account? <Text style={styles.Register}><TouchableOpacity> Register Now</TouchableOpacity></Text></Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'yellow',
    fontSize: 20,
    padding: 20,
  },
  textContainer: {
    fontWeight: 'bold',
    color: 'green',
  },
  input:{
    borderBottomWidth: 2,
    margin: 20,
    padding: 10,
    width: 300
  },
  image: {
    position: 'relative',
    width: 200,
    height: 200
  },
  forgetPassword: {
    marginTop: 20,
    marginBottom: 20,
    color: 'blue',
    fontSize: 16
  },
  login: {
    backgroundColor: 'green',
    width: 300,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
    textAlign: 'center',
    color: 'white'
  },
  Register: {
    color: 'green',
  }

});
