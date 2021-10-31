import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  TextInput,
  Platform,
} from 'react-native';

import Colors from '../constants/Colors';

export default function SignupScreen(props) {
  return (
    <View style={styles.body}>
      <View style={styles.loginHolder}>
        <ScrollView>
          <View>
            <Text style={styles.mottoText}>
              Let's set things up. Please fill out these basic details to get
              started.
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Text style={styles.inputText}>First name</Text>
                <TextInput style={styles.inputHolder} value="" />
              </View>

              <View style={{flex: 1}}>
                <Text style={styles.inputText}>Middle name</Text>
                <TextInput style={styles.inputHolder} value="" />
              </View>
            </View>

            <Text style={styles.inputText}>Surname</Text>
            <TextInput style={styles.inputHolder} value="" />

            <Text style={styles.inputText}>Date of birth</Text>
            <TextInput style={styles.inputHolder} value="DD/MM/YYYY" />

            <Text style={styles.inputText}>Gender</Text>
            <TextInput style={styles.inputHolder} value="Please select" />

            <Text style={styles.inputText}>Email address</Text>
            <TextInput style={styles.inputHolder} value="" />

            <Text style={styles.inputText}>Password</Text>
            <TextInput style={styles.inputHolder} value="" />

            <Text style={styles.inputText}>Confirm password</Text>
            <TextInput style={styles.inputHolder} value="" />
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttonHolder}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Create account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

SignupScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Create your account',
  };
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loginHolder: {
    flex: Platform.OS === 'android' ? 5 : 6,
    marginTop: 10,
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
    color: '#212831',
    marginHorizontal: 10,
  },
  inputHolder: {
    backgroundColor: '#ECECEC',
    borderRadius: 5,
    marginLeft: 15,
    marginRight: 15,
    color: 'grey',
    height: Platform.OS === 'android' ? 40 : 45,
  },
  buttonHolder: {
    marginHorizontal: 20,
    marginTop: 35,
    marginBottom: 20,
    // flex: 1,
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
