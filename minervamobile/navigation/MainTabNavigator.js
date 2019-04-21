import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, screenProps } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import QuizScreen from '../screens/QuizScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import QuestionScreen from '../screens/QuestionScreen';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const FeedbackStack = createStackNavigator({
  Links: FeedbackScreen,
});

FeedbackStack.navigationOptions = {
  tabBarLabel: 'Feedback',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const QuestionStack = createStackNavigator({
  Settings: QuestionScreen,
});

QuestionStack.navigationOptions = {
  tabBarLabel: 'Questions',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-help' : 'md-help'}
    />
  ),
};

const QuizStack = createStackNavigator({
  Quiz: QuizScreen,
});

QuizStack.navigationOptions = {
  tabBarLabel: 'Quiz',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-school' : 'md-school'}
    />
  ),
};

/*const SignupStack = createStackNavigator({
  Settings: SignUpScreen,
});

SignupStack.navigationOptions = {
  tabBarLabel: 'Sign Up',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const LoginStack = createStackNavigator({
  Login: LoginScreen,
});

LoginStack.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};
*/

export default createBottomTabNavigator({
  HomeStack,
  FeedbackStack,
  QuestionStack,
  QuizStack,
});
