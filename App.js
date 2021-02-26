
import React, { useState } from 'react';

import { StyleSheet, View, Text, Button, TextInput, Image, SafeAreaView } from 'react-native';


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
        <View style={styles.buttonContainer}>
            <Button title="Login" color="yellow" onPress={()=> setName('akinkuowo')}/>
        </View>
        <View style={styles.forgetPassword}>
          <text >Forget Password?</text>
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
    borderBottomWidth: 1,
    borderBottomColor: 'odgerbluee',
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
    color: 'blue',
    fontSize: 16
  }
  

});
