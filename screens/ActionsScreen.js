import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import DialogInput from 'react-native-dialog-input';
import axios from 'axios';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {BASE_URL, SANDBOX_KEY, API_SECRET} from '../config';

export default function ActionsScreen(props) {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    if (data.account_email) props.navigation.navigate('FundWallet', {data});
  }, [data]);

  const showDialog = () => {
    setVisible(true);
  };

  const sendInput = async (amt) => {
    setLoading(true);
    setVisible(false);
    try {
      const response = await axios({
        method: 'post',
        headers: {
          'api-secret': API_SECRET,
          'sandbox-key': SANDBOX_KEY,
        },
        url: `${BASE_URL}/api/woven/vnubans/create_customer`,
        data: {
          customer_reference: '{{$randomUserName}}',
          name: 'Newton Imonjirie',
          email: 'newtonimonjirie@mail.com',
          mobile_number: '08012345678',
          expires_on: '2021-11-01',
          use_frequency: '5',
          min_amount: amt,
          max_amount: amt,
          callback_url: 'https://requesturl.com',
          destination_nuban: '',
          meta_data: {
            somedatakey: 'somedatavalue',
          },
        },
      });

      setLoading(false);
      setData(response.data.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <View style={styles.main}>
      {loading ? (
        <View
          style={{
            marginVertical: '50%',
          }}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView>
          <View>
            <Text style={styles.header}>Actions</Text>
          </View>
          <TouchableOpacity onPress={showDialog} style={styles.actionWrapper}>
            <Entypo name="wallet" size={70} color="#36B37E" />
            <Text style={styles.actionText}>Fund Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Transfer')}
            style={styles.actionWrapper1}>
            <Entypo name="forward" size={70} color="#0065FF" />
            <Text style={styles.actionText}>Transfer Money</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Withdraw')}
            style={styles.actionWrapper2}>
            <MaterialCommunityIcons name="bank" size={70} color="#FFAB00" />
            <Text style={styles.actionText}>Withdraw Money</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('SetPercent')}
            style={styles.actionWrapper}>
            <MaterialCommunityIcons name="percent" size={70} color="#36B37E" />
            <Text style={styles.actionText}>Set Percentage</Text>
          </TouchableOpacity>
          <View style={{marginBottom: 100}} />
        </ScrollView>
      )}
      <View>
        <DialogInput
          isDialogVisible={visible}
          title={'Fund Wallet'}
          message={'Enter an amount you want to fund your wallet with'}
          hintInput={'Amount'}
          submitInput={(inputText) => sendInput(inputText)}
          closeDialog={() => {
            setVisible(false);
          }}></DialogInput>
      </View>
    </View>
  );
}

ActionsScreen.navigationOptions = (navData) => {
  return {
    header: null,
  };
};

const styles = StyleSheet.create({
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
  actionWrapper: {
    backgroundColor: '#E3FCEF',
    borderRadius: 10,
    height: 150,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    paddingTop: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  actionWrapper1: {
    backgroundColor: '#DEEBFF',
    borderRadius: 10,
    height: 150,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    paddingTop: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  actionWrapper2: {
    backgroundColor: '#FFFAE6',
    borderRadius: 10,
    height: 150,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    paddingTop: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  actionText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#172B4D',
    fontSize: 18,
  },
});
