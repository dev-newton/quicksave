import React from 'react';
import {Platform, Text} from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import SavingsScreen from '../screens/SavingsScreen';
import ActionsScreen from '../screens/ActionsScreen';
import TransactionScreen from '../screens/TransactionScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FundWalletScreen from '../screens/FundWalletScreen';
import TransferScreen from '../screens/TransferScreen';

import Colors from '../constants/Colors';
import SetPercentageScreen from '../screens/SetPercentageScreen';
import WithdrawScreen from '../screens/WithdrawScreen';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
  },
  headerTitleStyle: {
    fontFamily: 'OpenSans-Regular',
    textAlign: 'left',
  },
  headerBackTitleStyle: {
    fontFamily: 'OpenSans-Regular',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
};

const AuthNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Login: LoginScreen,
    Signup: SignupScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  },
);

const HomeNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    FundWallet: FundWalletScreen,
    Transfer: TransferScreen,
    SetPercent: SetPercentageScreen,
    Withdraw: WithdrawScreen,
  },
  {
    mode: 'modal',
    defaultNavigationOptions: defaultStackNavOptions,
  },
);

HomeNavigator.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const SavingsNavigator = createStackNavigator(
  {
    Savings: SavingsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  },
);

const ActionsNavigator = createStackNavigator(
  {
    Actions: ActionsScreen,
    FundWallet: FundWalletScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  },
);

const TrancationNavigator = createStackNavigator(
  {
    Transaction: TransactionScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  },
);

const SettingsNavigator = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  },
);

const tabScreenConfig = {
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Entypo name="home" size={25} color={tabInfo.tintColor} />;
      },

      tabBarColor: Colors.primary,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text
            style={{
              fontFamily: 'OpenSans-Regular',
              fontSize: 10,
              textAlign: 'center',
              color: 'grey',
              marginBottom: 5,
            }}>
            Home
          </Text>
        ) : (
          'Home'
        ),
    },
  },
  Savings: {
    screen: SavingsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-wallet" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primary,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text
            style={{
              fontFamily: 'OpenSans-Regular',
              fontSize: 10,
              textAlign: 'center',
              color: 'grey',
              marginBottom: 5,
            }}>
            Savings
          </Text>
        ) : (
          'Savings'
        ),
    },
    defaultNavigationOptions: defaultStackNavOptions,
  },
  Actions: {
    screen: ActionsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-rocket" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primary,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text
            style={{
              fontFamily: 'OpenSans-Regular',
              fontSize: 10,
              textAlign: 'center',
              color: 'grey',
              marginBottom: 5,
            }}>
            Actions
          </Text>
        ) : (
          'Actions'
        ),
    },
  },
  Transaction: {
    screen: TrancationNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <MaterialCommunityIcons
            name="script-text"
            size={25}
            color={tabInfo.tintColor}
          />
        );
      },
      tabBarColor: Colors.primary,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text
            style={{
              fontFamily: 'OpenSans-Regular',
              fontSize: 10,
              textAlign: 'center',
              color: 'grey',
              marginBottom: 5,
            }}>
            Transactions
          </Text>
        ) : (
          'Transactions'
        ),
    },
  },
  Settings: {
    screen: SettingsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-person" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primary,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text
            style={{
              fontFamily: 'OpenSans-Regular',
              fontSize: 10,
              textAlign: 'center',
              color: 'grey',
              marginBottom: 5,
            }}>
            Account
          </Text>
        ) : (
          'Account'
        ),
    },
  },
};

const TabNavigator = createBottomTabNavigator(tabScreenConfig, {
  tabBarOptions: {
    labelStyle: {
      fontFamily: 'openSans-Bold',
    },
    activeTintColor: Colors.primary,
  },
});

const MainNavigator = createDrawerNavigator(
  {
    Auth: AuthNavigator,
    Home: TabNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary,
      inactiveTintColor: 'grey',
      labelStyle: {fontFamily: 'OpenSans-Regular'},
    },
    overlayColor: 'rgba(0,0,0,0.6)',
  },
);

export default createAppContainer(MainNavigator);
