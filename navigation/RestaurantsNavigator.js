import { createAppContainer } from 'react-navigation';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';

import { LandingPageScreen } from '../screens/LandingPageScreen'
import { MapScreen } from '../screens/MapScreen'
import { SideDrawer } from '../screens/SideDrawer'



const RestaurantsNavigator = createStackNavigator({
  LandingPage: LandingPageScreen,
  Map: MapScreen,
  SideMenu: SideDrawer
},
  {
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
      cardOverlayEnabled: true,
      gestureEnabled: true,
    }
  })


export default createAppContainer(RestaurantsNavigator) 