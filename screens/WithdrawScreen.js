import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';

import {ScrollView} from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import {BASE_URL, SANDBOX_KEY, API_SECRET} from '../config';

export default function WithdrawScreen(props) {
  const [selectedBank, setSelectedBank] = useState();
  const [loading, setLoading] = useState(false);
  const [loadingAcc, setLoadingAcc] = useState(false);
  const [banks, setBanks] = useState([]);
  const [accountName, setAccountName] = useState();
  const [accountNum, setAccountNum] = useState();
  const [amount, setAmount] = useState();
  const [loadingTranx, setLoadingTranx] = useState(false);

  useEffect(() => {
    getBanks();
  }, []);

  const getBanks = async () => {
    setLoading(true);
    try {
      const response = await axios({
        method: 'get',
        url: 'https://api.paystack.co/bank',
      });
      setBanks(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getNameInquiry = async (text) => {
    setLoadingAcc(true);
    try {
      const response = await axios({
        method: 'get',
        headers: {
          'api-secret': 'vb_ls_bfac75fe54a952841971b6918d06aeb2659523dc92d6',
          'sandbox-key': 'LmFFs0M0uXRVdbqs8kugf1aDB9xb0JUi1635181357',
        },
        url: `https://fsi.ng/api/heritagebank/identity/NameInquiry?AccountNumber=${text}`,
      });
      setLoadingAcc(false);
      setAccountName(response.data.accountName);
      setAccountNum(text);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setLoadingAcc(false);
    }
  };

  const nameEnquiry = (text) => {
    if (text.length === 10) {
      getNameInquiry(text);
    }
  };

  const makeWithdrawal = async () => {
    setLoadingTranx(true);
    try {
      const response = await axios({
        method: 'post',
        headers: {
          Authorization: API_SECRET,
          'sandbox-key': SANDBOX_KEY,
        },
        url: `${BASE_URL}/api/heritagebank/transfers/FundsTransfer/Inter`,
        data: {
          SourceAccountNumber: '5900406170',
          OriginatorName: 'Ini-obong Newton',
          DestinationAccountNumber: accountNum,
          DestinationAccountName: accountName,
          DestinationBankCode: '053',
          Narration: 'Test NIP',
          PaymentReference: '1234567890123',
          Amount: amount,
        },
      });

      setLoadingTranx(false);
      console.log(response.data.responseMessage);
      Alert.alert('Withdrawal Successful', response.data.responseMessage, [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => props.navigation.navigate('Home')},
      ]);
    } catch (error) {
      setLoadingTranx(false);
      console.log(error);
      Alert.alert('Failed !', 'Failed to load ', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };

  return (
    <View style={styles.main}>
      <ScrollView>
        <View>
          <Text style={styles.header}>Withdraw</Text>
        </View>
        <View style={styles.amountWrapper}>
          <Text style={styles.amountText}>₦150,000</Text>
          <View style={styles.amountLine} />
          <Text style={styles.amountText1}>Total{'\n'} Balance</Text>
        </View>
        <View>
          {console.log(selectedBank)}
          <View style={styles.formWrapper}>
            <Text style={styles.pickerHeaderText}>Amount to Withdraw</Text>
            <TextInput
              style={styles.inputHolder}
              onChangeText={(text) => setAmount(text)}
            />
            <View style={{marginBottom: 20}} />
            <Text style={styles.pickerHeaderText}>Bank Name</Text>
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={selectedBank}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedBank(itemValue)
                }
                itemStyle={{backgroundColor: 'red'}}>
                <Picker.Item color="#555" label="" value="" />
                {banks &&
                  banks.map((bank, i) => (
                    <Picker.Item
                      color="#555"
                      key={i}
                      label={bank.name}
                      value={bank.name}
                    />
                  ))}
              </Picker>
            </View>
            <Text style={styles.pickerHeaderText}>Account Number</Text>
            <TextInput
              maxLength={10}
              style={styles.inputHolder}
              onChangeText={(text) => nameEnquiry(text)}
            />
            {loadingAcc && <Text style={styles.accName}>Please wait...</Text>}
            {accountName && <Text style={styles.accName}>{accountName}</Text>}

            <TouchableOpacity style={styles.button} onPress={makeWithdrawal}>
              {loadingTranx ? (
                <ActivityIndicator color="#fff" size="small" />
              ) : (
                <Text style={styles.buttonText}>Withdraw Money</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

WithdrawScreen.navigationOptions = (navData) => {
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
  amountText: {
    fontSize: 26,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.primary,
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
