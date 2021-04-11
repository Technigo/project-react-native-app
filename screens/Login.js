import React, { useState } from 'react'
import { TouchableOpacity, TextInput, Text, View, StyleSheet } from 'react-native'

export const Login = ({ navigation }) => {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to your App</Text>
      <View style={styles.inputView}>
        <TextInput 
          // required
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="#fff"
          onChangeText={value => setUserName(value)}
          defaultValue={userName}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput 
          // required
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#fff"
          onChangeText={value => setPassword(value)}
          defaultValue={password}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.loginButton}
        title="Login" 
        onPress={() => navigation.navigate("Profile", {userName : userName})} 
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    color:"#fb5b5a",
    fontWeight: "bold",
    fontSize: 50,
    textAlign: "center",
    margin:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465880",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  loginButton:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  forgot: {
    color:"grey"
  },
  loginText:{
    color:"#ffff",
    fontWeight:"bold"
  }
})
