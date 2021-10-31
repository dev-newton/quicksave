import React from 'react';
import {Platform} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
// import { Ionicons } from "@expo/vector-icons";
import IconI from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/Feather';
import Colors from '../constants/Colors';

export const HeaderButtonI = (props) => {
  return <HeaderButton {...props} IconComponent={IconI} iconSize={23} />;
};

export const HeaderButtonF = (props) => {
  return <HeaderButton {...props} IconComponent={IconF} iconSize={23} />;
};

// export default CustomHeaderButton;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
