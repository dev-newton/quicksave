import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Platform,
} from 'react-native';

import Colors from '../constants/Colors';

export default function LoginScreen(props) {
  return (
    <View style={styles.body}>
      <View style={styles.loginHolder}>
        <Text style={styles.titleText}>QuickSave</Text>

        <Text style={styles.mottoText}>
          Hi there, welcome back. Please sign in.
        </Text>
        <View style={{marginTop: 30}} />
        <Text style={styles.inputText}>Email address</Text>
        <TextInput style={styles.inputHolder} />

        <Text style={styles.inputText}>Password</Text>
        <TextInput style={styles.inputHolder} value="" />
      </View>
      <View style={styles.buttonHolder}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.signupMessage}>
          New to QuickSave?{' '}
          <Text
            style={styles.signupText}
            onPress={() => props.navigation.navigate('Signup')}>
            Set up new account
          </Text>
        </Text>
      </View>
    </View>
  );
}

LoginScreen.navigationOptions = (navData) => {
  return {
    header: null,
  };
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loginHolder: {
    flex: Platform.OS === 'android' ? 1 : 2,
    marginTop: Platform.OS === 'android' ? 100 : 80,
  },
  titleText: {
    color: Colors.primary,
    fontSize: 42,
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
  },
  inputText: {
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 5,
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
    color: '#212831',
  },
  mottoText: {
    fontFamily: 'OpenSans-Regular',
    textAlign: 'center',
    color: '#000',
  },
  inputHolder: {
    backgroundColor: '#ECECEC',
    borderRadius: 5,
    marginLeft: 15,
    marginRight: 15,
    height: Platform.OS === 'android' ? 40 : 45,
  },
  buttonHolder: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.primary,
    color: '#fff',
    padding: Platform.OS === 'android' ? 10 : 15,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
  },
  signupMessage: {
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular',
    color: '#212831',
    fontSize: 14,
    marginTop: 5,
  },
  signupText: {
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular',
    color: Colors.primary,
    fontSize: 14,
    marginTop: 5,
  },
});
