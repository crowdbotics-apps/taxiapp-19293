import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps86652Navigator from '../features/Maps86652/navigator';
import Settings86630Navigator from '../features/Settings86630/navigator';
import Settings86615Navigator from '../features/Settings86615/navigator';
import NotificationList86614Navigator from '../features/NotificationList86614/navigator';
import Maps86613Navigator from '../features/Maps86613/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps86652: { screen: Maps86652Navigator },
Settings86630: { screen: Settings86630Navigator },
Settings86615: { screen: Settings86615Navigator },
NotificationList86614: { screen: NotificationList86614Navigator },
Maps86613: { screen: Maps86613Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
