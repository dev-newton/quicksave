import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

export default function SettingsScreen(props) {
  return (
    <View style={styles.body}>
      <Text></Text>
      <Button
        title="Logout"
        onPress={() => props.navigation.navigate('Login')}
      />
    </View>
  );
}

SettingsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Settings',
  };
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
