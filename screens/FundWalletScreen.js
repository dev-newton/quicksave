import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {ScrollView} from 'react-native-gesture-handler';
import Colors from '../constants/Colors';

export default function HomeScreen(props) {
  const [accData, setAccData] = useState({});

  const {data} = props.navigation.state.params;

  useEffect(() => {
    if (data) {
      return setAccData(data);
    }
  }, [data]);

  const commaSeparator = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <View style={styles.main}>
      {accData && (
        <ScrollView>
          <View>
            <Text style={styles.header}>Fund Your Wallet</Text>
            <Text style={styles.headerSmall}>
              Fund wallet with bank transfer
            </Text>
          </View>
          <View style={styles.amountSection}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
                marginBottom: 20,
              }}>
              <Entypo name="wallet" size={80} color={'#0e4941'} />
            </View>
            <View style={styles.amountWrapper}>
              <Text style={styles.amountText}>
                ₦{accData.max_amount && commaSeparator(accData.max_amount)}
              </Text>
              <View style={styles.amountLine} />
              <Text style={styles.amountText1}>Payment{'\n'} Amount</Text>
            </View>
            <View style={styles.amountDescWrapper}>
              <Text style={styles.amountDescText}>
                Make a bank transfer to the bank details below to complete
                payment
              </Text>
            </View>
            <View style={styles.accountInfoWrapper}>
              <View style={styles.accountInfoRow}>
                <Text style={styles.accountInfoStart}>Account No:</Text>
                <Text style={styles.accountInfoEnd}>{accData.vnuban}</Text>
              </View>
              <View style={styles.accountInfoRow}>
                <Text style={styles.accountInfoStart}>Account Name:</Text>
                <Text style={styles.accountInfoEnd}>
                  {accData.account_name}
                </Text>
              </View>
              <View style={styles.accountInfoRow1}>
                <Text style={styles.accountInfoStart}>Bank:</Text>
                <Text style={styles.accountInfoEnd}>{accData.bank_name}</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => props.navigation.goBack()}>
              <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </View>
  );
}

HomeScreen.navigationOptions = (navData) => {
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
    backgroundColor: '#fff',
    paddingLeft: 40,
    marginTop: 15,
    borderRadius: 25,
    borderColor: '#ddd',
    borderWidth: 1,
    marginLeft: 15,
    marginRight: 15,
    height: Platform.OS === 'android' ? 35 : 40,
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
  amountSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  amountWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  amountLine: {
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    marginHorizontal: 10,
  },
  amountText: {
    fontSize: 26,
    fontFamily: 'Poppins-SemiBold',
    color: '#0e4941',
  },
  amountText1: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 11,
    color: '#555',
  },
  tranxIconWrapper1: {
    backgroundColor: '#E3FCEF',
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amountDescWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
  },
  amountDescText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 11,
    textAlign: 'center',
    color: '#555',
  },
  accountInfoWrapper: {
    borderWidth: 1,
    borderColor: '#36B37E',
    borderRadius: 5,
    borderStyle: 'dashed',
    backgroundColor: '#ebf9f2',
    marginTop: 20,
    marginHorizontal: 20,
  },
  accountInfoRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#36B37E',
    marginHorizontal: 20,
  },
  accountInfoRow1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 10,
    marginHorizontal: 20,
  },
  accountInfoStart: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 11,
    color: '#555',
  },
  accountInfoEnd: {
    fontFamily: 'Poppins-Bold',
    fontSize: 11,
    color: '#000',
  },
  button: {
    // backgroundColor: Colors.primary,
    // color: '#fff',
    // padding: Platform.OS === 'android' ? 9 : 15,
    // borderRadius: 5,
    // marginHorizontal: 20,
    // marginTop: 30,
    // color: 'red',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 20,
    marginVertical: 10,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    borderWidth: 1,
    backgroundColor: '#0e4941',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingTop: 2,
  },
  // accountInfoline: {
  //   borderWidth: 1,
  //   borderColor: '#36B37E',
  //   marginBottom: 20,
  //   borderStyle: 'dashed',
  // },
  // card: {
  //   width: 250,
  //   height: 100,
  //   borderRadius: 6,
  //   backgroundColor: Colors.primary,
  //   display: 'flex',
  //   justifyContent: 'center',
  //   color: '#fff',
  //   paddingLeft: 20,
  //   marginTop: 15,
  //   marginRight: 20,
  // },
  // card1: {
  //   width: 250,
  //   height: 100,
  //   borderRadius: 6,
  //   backgroundColor: 'coral',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   color: '#fff',
  //   paddingLeft: 20,
  //   marginTop: 15,
  // },
  // cardHeadTextSmall: {
  //   color: '#fff',
  //   fontFamily: 'Poppins-Regular',
  //   fontSize: 11,
  // },
  // cardHeadText: {
  //   color: '#fff',
  //   fontFamily: 'Poppins-SemiBold',
  // },
  // transferCardRow: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
  // transferCardWrapper: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // transferCard: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   height: 50,
  //   borderRadius: 6,
  //   marginTop: 30,
  //   width: 50,
  //   backgroundColor: '#DEEBFF',
  // },
  // transferText: {
  //   color: '#000',
  //   fontFamily: 'Poppins-SemiBold',
  //   fontSize: 10,
  //   marginTop: 5,
  // },
  // recentWrapper: {
  //   marginTop: 30,
  // },
  // recentText: {
  //   fontFamily: 'Poppins-SemiBold',
  //   color: '#555',
  //   fontSize: 14,
  // },
  // tranxCard: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   marginTop: 10,
  // },
  // tranxIconWrapper: {
  //   backgroundColor: '#E3FCEF',
  //   width: 30,
  //   height: 30,
  //   borderRadius: 30 / 2,
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // tranxIconWrapper1: {
  //   backgroundColor: '#FFEBE6',
  //   width: 30,
  //   height: 30,
  //   borderRadius: 30 / 2,
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // tranxDescText: {
  //   fontFamily: 'Poppins-Regular',
  //   color: '#555',
  //   fontSize: 13,
  // },
  // tranxAmountText: {
  //   fontFamily: 'Poppins-SemiBold',
  //   fontSize: 14,
  // },
  // tranxDateText: {
  //   fontFamily: 'Poppins-Regular',
  //   fontSize: 9,
  //   color: '#555',
  //   alignSelf: 'flex-end',
  // },
  // tranxDescTextWrapper: {
  //   marginRight: 'auto',
  //   marginLeft: 30,
  // },
});
