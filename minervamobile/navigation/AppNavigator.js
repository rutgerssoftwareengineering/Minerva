import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import QuestionScreen from '../screens/QuestionScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import QuizScreen from '../screens/QuizScreen';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  LoginScreen: LoginScreen,
  Main: MainTabNavigator,
  SignUp: SignUpScreen,
  Ask: QuestionScreen,
  Quiz: QuizScreen,
  Feedback: FeedbackScreen,
}));