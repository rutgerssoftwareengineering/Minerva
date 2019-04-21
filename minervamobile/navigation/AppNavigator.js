import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import QuestionScreen from '../screens/QuestionScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import QuizScreen from '../screens/QuizScreen';
import HomeScreen from '../screens/HomeScreen';

export default createAppContainer(createSwitchNavigator({

  LoginScreen: LoginScreen,
  Main: MainTabNavigator,
  SignUp: SignUpScreen,
  //Ask: QuestionScreen,
  //Quiz: QuizScreen,
  //Feedback: FeedbackScreen,
}));