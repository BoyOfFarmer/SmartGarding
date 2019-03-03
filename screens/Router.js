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

const AppNavigator = createStackNavigator({
  HomeScreen: {screen: Home},
  GradingScreen: {screen: Grading},
  CameraScreen: {screen: Camera4},
  ImageBrowserScreen: {screen: ImageBrowser},
});


const Router = createAppContainer(AppNavigator);
export default Router;
