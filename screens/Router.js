import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './Home';
import Grading from './Grading';
import Cam from './Camera';
import Camera2 from './Camera2';
import Camera0 from './Camera0';
import Camera3 from './Camera3';
import Camera4 from './Camera4';
import ImageBrowser from './ImageBrowser';
import ClassList from './ClassList';
import ClassCreate from './ClassCreate';
import GuideScreen from './GuideScreen'
import SettingScreen from './SettingScreen'
import InfoScreen from './InfoScreen'
import PatternForm from './PatternForm'
import StudentScreen from './StudentScreen'
import NewStudent from './NewStudent'
const AppNavigator = createStackNavigator({
  HomeScreen: {screen: Home},
  GradingScreen: {screen: Grading},
  CameraScreen: {screen: Camera4},
  ImageBrowserScreen: {screen: ImageBrowser},
  ClassListScreen: {screen: ClassList},
  ClassCreateScreen: {screen: ClassCreate},
  Guide: {
    screen: GuideScreen
  },
  Setting: {
    screen: SettingScreen
  },
  Info: {
    screen: InfoScreen
  },
  Pattern: {
    screen: PatternForm
  },
  Student: {
    screen: StudentScreen
  },
  NewStudent: {
    screen: NewStudent
  },
},{
  initialRouteName: "HomeScreen"
});

const Router = createAppContainer(AppNavigator);
export default Router;
