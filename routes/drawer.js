import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './homeStack';
import AboutStack from "./aboutStack";
import Data from '../screens/data';

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    About: {
        screen: AboutStack,
    },
    Data: {
        screen: Data,
    }
})

export default createAppContainer(RootDrawerNavigator)