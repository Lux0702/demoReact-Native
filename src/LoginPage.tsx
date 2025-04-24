import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import { StackNavigationProp } from '@react-navigation/stack';
// type RootStackParamList = {
//     Login: undefined;
//     Home: undefined;
//   };

//   type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

//   type Props = {
//     navigation: LoginScreenNavigationProp;
//   };
const LoginPage = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    if (username === 'admin' && password === '123456') {
      Alert.alert('Login Successful');
      navigation.navigate('Home');
    } else {
      Alert.alert('Login Failed', 'Username or password is incorrect');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    fontSize: 18,
  },
});

export default LoginPage; // Export component đúng
