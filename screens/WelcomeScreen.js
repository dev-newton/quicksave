import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Platform} from 'react-native';

import Colors from '../constants/Colors';

export default function WelcomeScreen(props) {
  return (
    <View style={styles.body}>
      <View style={styles.titleTextHolder}>
        <Text style={styles.titleText}>QuickSave</Text>
        <Text style={styles.mottoText} fontSize="lg">
          No need to watch your spending,
        </Text>
        <Text style={styles.mottoText} fontSize="lg">
          we watch it for you!
        </Text>
      </View>
      <View style={styles.buttonHolder}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

WelcomeScreen.navigationOptions = (navData) => {
  return {
    header: null,
  };
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleTextHolder: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 8,
  },
  titleText: {
    fontSize: 42,
    color: Colors.primary,
    fontFamily: 'OpenSans-Bold',
  },
  mottoText: {
    fontSize: 16,
    color: '#C5C5C5',
    fontFamily: 'OpenSans-Regular',
  },
  buttonHolder: {
    flex: 1,
    margin: 20,
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
  },
});
