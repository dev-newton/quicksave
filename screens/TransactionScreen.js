import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import axios from 'axios';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {BASE_URL, SANDBOX_KEY, API_SECRET} from '../config';
import {ScrollView} from 'react-native-gesture-handler';
import Colors from '../constants/Colors';

export default function TransactionScreen(props) {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTransactions();
  }, []);

  const getTransactions = async () => {
    setLoading(true);
    try {
      await axios({
        method: 'get',
        headers: {
          'api-secret': API_SECRET,
          'sandbox-key': SANDBOX_KEY,
        },
        url: `${BASE_URL}/api/woven/transactions?from=2021-01-01&status=ACTIVE&to=2021-11-09&unique_reference=SPKL100007629691012078221614840477696&settlement_status=settled`,
      });
      setLoading(false);
      setTransactions();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.main}>
      <ScrollView>
        <View>
          <Text style={styles.header}>Transactions</Text>
        </View>
        <View style={styles.recentWrapper}>
          <Text style={styles.recentText}>Records</Text>
          <ScrollView>
            <View style={styles.tranxCard}>
              <View style={styles.tranxIconWrapper}>
                <MaterialCommunityIcons name="cash" size={20} color="#36B37E" />
              </View>
              <View style={styles.tranxDescTextWrapper}>
                <Text style={styles.tranxDescText}>
                  Transfer from Newton to John
                </Text>
              </View>
              <View>
                <Text style={styles.tranxAmountText}>₦ 45,000</Text>
                <Text style={styles.tranxDateText}>April 23, 2021</Text>
              </View>
            </View>
            <View style={styles.tranxCard}>
              <View style={styles.tranxIconWrapper1}>
                <MaterialCommunityIcons name="cash" size={20} color="#FF5630" />
              </View>
              <View style={styles.tranxDescTextWrapper}>
                <Text style={styles.tranxDescText}>Withdrawal Made</Text>
              </View>
              <View>
                <Text style={styles.tranxAmountText}>-₦ 270,000</Text>
                <Text style={styles.tranxDateText}>April 19, 2021</Text>
              </View>
            </View>
            <View style={styles.tranxCard}>
              <View style={styles.tranxIconWrapper1}>
                <MaterialCommunityIcons name="cash" size={20} color="#FF5630" />
              </View>
              <View style={styles.tranxDescTextWrapper}>
                <Text style={styles.tranxDescText}>Withdrawal Made</Text>
              </View>
              <View>
                <Text style={styles.tranxAmountText}>-₦ 17,510</Text>
                <Text style={styles.tranxDateText}>April 13, 2021</Text>
              </View>
            </View>
            <View style={styles.tranxCard}>
              <View style={styles.tranxIconWrapper}>
                <MaterialCommunityIcons name="cash" size={20} color="#36B37E" />
              </View>
              <View style={styles.tranxDescTextWrapper}>
                <Text style={styles.tranxDescText}>
                  Transfer from Newton to John
                </Text>
              </View>
              <View>
                <Text style={styles.tranxAmountText}>₦ 45,000</Text>
                <Text style={styles.tranxDateText}>April 06, 2021</Text>
              </View>
            </View>
            <View style={styles.tranxCard}>
              <View style={styles.tranxIconWrapper1}>
                <MaterialCommunityIcons name="cash" size={20} color="#FF5630" />
              </View>
              <View style={styles.tranxDescTextWrapper}>
                <Text style={styles.tranxDescText}>Withdrawal Made</Text>
              </View>
              <View>
                <Text style={styles.tranxAmountText}>-₦ 9,650</Text>
                <Text style={styles.tranxDateText}>March 26, 2021</Text>
              </View>
            </View>
            <View style={styles.tranxCard}>
              <View style={styles.tranxIconWrapper}>
                <MaterialCommunityIcons name="cash" size={20} color="#36B37E" />
              </View>
              <View style={styles.tranxDescTextWrapper}>
                <Text style={styles.tranxDescText}>
                  Transfer from Newton to User
                </Text>
              </View>
              <View>
                <Text style={styles.tranxAmountText}>₦ 45,000</Text>
                <Text style={styles.tranxDateText}>March 11, 2021</Text>
              </View>
            </View>
            <View style={styles.tranxCard}>
              <View style={styles.tranxIconWrapper}>
                <MaterialCommunityIcons name="cash" size={20} color="#36B37E" />
              </View>
              <View style={styles.tranxDescTextWrapper}>
                <Text style={styles.tranxDescText}>
                  Transfer from Newton to POS
                </Text>
              </View>
              <View>
                <Text style={styles.tranxAmountText}>₦ 45,000</Text>
                <Text style={styles.tranxDateText}>March 02, 2021</Text>
              </View>
            </View>
            <View style={styles.tranxCard}>
              <View style={styles.tranxIconWrapper}>
                <MaterialCommunityIcons name="cash" size={20} color="#36B37E" />
              </View>
              <View style={styles.tranxDescTextWrapper}>
                <Text style={styles.tranxDescText}>
                  Transfer from Newton to POS
                </Text>
              </View>
              <View>
                <Text style={styles.tranxAmountText}>₦ 45,000</Text>
                <Text style={styles.tranxDateText}>March 02, 2021</Text>
              </View>
            </View>
            <View style={styles.tranxCard}>
              <View style={styles.tranxIconWrapper1}>
                <MaterialCommunityIcons name="cash" size={20} color="#FF5630" />
              </View>
              <View style={styles.tranxDescTextWrapper}>
                <Text style={styles.tranxDescText}>Withdrawal Made</Text>
              </View>
              <View>
                <Text style={styles.tranxAmountText}>-₦ 270,000</Text>
                <Text style={styles.tranxDateText}>April 19, 2021</Text>
              </View>
            </View>
            <View style={styles.tranxCard}>
              <View style={styles.tranxIconWrapper1}>
                <MaterialCommunityIcons name="cash" size={20} color="#FF5630" />
              </View>
              <View style={styles.tranxDescTextWrapper}>
                <Text style={styles.tranxDescText}>Withdrawal Made</Text>
              </View>
              <View>
                <Text style={styles.tranxAmountText}>-₦ 270,000</Text>
                <Text style={styles.tranxDateText}>April 19, 2021</Text>
              </View>
            </View>
            <View style={styles.tranxCard}>
              <View style={styles.tranxIconWrapper}>
                <MaterialCommunityIcons name="cash" size={20} color="#36B37E" />
              </View>
              <View style={styles.tranxDescTextWrapper}>
                <Text style={styles.tranxDescText}>
                  Transfer from Newton to POS
                </Text>
              </View>
              <View>
                <Text style={styles.tranxAmountText}>₦ 45,000</Text>
                <Text style={styles.tranxDateText}>March 02, 2021</Text>
              </View>
            </View>
            <View style={styles.tranxCard}>
              <View style={styles.tranxIconWrapper1}>
                <MaterialCommunityIcons name="cash" size={20} color="#FF5630" />
              </View>
              <View style={styles.tranxDescTextWrapper}>
                <Text style={styles.tranxDescText}>Withdrawal Made</Text>
              </View>
              <View>
                <Text style={styles.tranxAmountText}>-₦ 270,000</Text>
                <Text style={styles.tranxDateText}>April 19, 2021</Text>
              </View>
            </View>
            <View style={styles.tranxCard}>
              <View style={styles.tranxIconWrapper}>
                <MaterialCommunityIcons name="cash" size={20} color="#36B37E" />
              </View>
              <View style={styles.tranxDescTextWrapper}>
                <Text style={styles.tranxDescText}>
                  Transfer from Newton to POS
                </Text>
              </View>
              <View>
                <Text style={styles.tranxAmountText}>₦ 45,000</Text>
                <Text style={styles.tranxDateText}>March 02, 2021</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

TransactionScreen.navigationOptions = (navData) => {
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
  card: {
    width: 250,
    height: 100,
    borderRadius: 6,
    backgroundColor: Colors.primary,
    display: 'flex',
    justifyContent: 'center',
    color: '#fff',
    paddingLeft: 20,
    marginTop: 15,
    marginRight: 20,
  },
  card1: {
    width: 250,
    height: 100,
    borderRadius: 6,
    backgroundColor: 'coral',
    display: 'flex',
    justifyContent: 'center',
    color: '#fff',
    paddingLeft: 20,
    marginTop: 15,
  },
  cardHeadTextSmall: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
  },
  cardHeadText: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
  },
  transferCardRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transferCardWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  transferCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 6,
    marginTop: 30,
    width: 50,
    backgroundColor: '#DEEBFF',
  },
  transferText: {
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 10,
    marginTop: 5,
  },
  recentWrapper: {
    marginTop: 30,
  },
  recentText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#555',
    fontSize: 14,
  },
  tranxCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
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
