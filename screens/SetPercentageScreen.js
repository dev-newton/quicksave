import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DialogInput from 'react-native-dialog-input';
import axios from 'axios';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import {ScrollView} from 'react-native-gesture-handler';
import Colors from '../constants/Colors';

export default function SetPercentageScreen(props) {
  const [percentage, setPercentage] = useState('15');

  return (
    <View style={styles.main}>
      <ScrollView>
        <View>
          <Text style={styles.header}>Set Percentage</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 50,
            marginBottom: 0,
          }}>
          <MaterialCommunityIcons
            name="sack-percent"
            size={100}
            color={Colors.primary}
          />
        </View>

        <View style={styles.percentWrapper}>
          <TextInput
            value={percentage}
            onChangeText={(text) => setPercentage(text)}
            style={styles.percentText}
          />
          <Text style={styles.percent}>%</Text>
        </View>
        <View style={styles.percentLine} />
        <Text style={styles.percentHeaderText}>Set Percentage for savings</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Update Percentage</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

SetPercentageScreen.navigationOptions = (navData) => {
  return {
    header: null,
  };
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  latestRecipes: {
    paddingLeft: 20,
    paddingTop: 10,
    fontFamily: 'openSans-Bold',
    fontSize: 16,
  },
  inputText: {
    fontFamily: 'OpenSans-Bold',
    paddingLeft: 10,
    fontSize: 14,
    color: '#212831',
  },
  inputHolder: {
    backgroundColor: '#ECECEC',
    borderRadius: 5,
    height: 50,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#555',
    paddingLeft: 20,
  },
  main: {
    marginHorizontal: 15,
    paddingTop: 40,
  },
  header: {
    fontSize: 36,
    fontWeight: '700',
    fontFamily: 'Poppins-Regular',
    color: '#172B4D',
  },
  headerSmall: {
    fontFamily: 'Poppins-SemiBold',
    color: '#555',
    fontWeight: '500',
  },
  amountWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  amountLine: {
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    marginHorizontal: 10,
  },
  percentHeaderText: {
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  percentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentText: {
    fontSize: 36,
    fontFamily: 'Poppins-SemiBold',
    color: '#555',
    paddingBottom: 0,
    paddingTop: 0,
  },
  percent: {
    fontSize: 36,
    fontFamily: 'Poppins-SemiBold',
    color: '#555',
    marginTop: 10,
  },
  percentLine: {
    borderTopWidth: 2,
    borderTopColor: Colors.primary,
    height: 10,
    width: 100,
    alignSelf: 'center',
  },
  amountText1: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 11,
    color: '#555',
  },
  formWrapper: {
    marginTop: 30,
  },
  pickerWrapper: {
    borderRadius: 5,
    // borderWidth: 1,
    marginTop: 5,
    height: 50,
    backgroundColor: '#ECECEC',
    marginBottom: 20,
  },
  pickerHeaderText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  tranxIconWrapper: {
    backgroundColor: '#E3FCEF',
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  accName: {
    fontFamily: 'Poppins-Regular',
    marginTop: 5,
    marginLeft: 5,
  },
  button: {
    backgroundColor: Colors.primary,
    color: '#fff',
    padding: Platform.OS === 'android' ? 10 : 15,
    borderRadius: 5,
    marginTop: 40,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
  },
  tranxIconWrapper1: {
    backgroundColor: '#FFEBE6',
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tranxDescText: {
    fontFamily: 'Poppins-Regular',
    color: '#555',
    fontSize: 13,
  },
  tranxAmountText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  tranxDateText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 9,
    color: '#555',
    alignSelf: 'flex-end',
  },
  tranxDescTextWrapper: {
    marginRight: 'auto',
    marginLeft: 30,
  },
});
