/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Main from './src/views/MainScreen/Main';
import TestApi from './src/Testing/TestApi';

AppRegistry.registerComponent(appName, () => Main);
