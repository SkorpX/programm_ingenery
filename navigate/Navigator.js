import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';

import First from '../screens/first';
import Second from '../screens/second';
import Third from '../screens/third';

const MyNavigator = createStackNavigator({
     First: First,
     Second: Second,
     Third: Third
});

export default createAppContainer(MyNavigator);