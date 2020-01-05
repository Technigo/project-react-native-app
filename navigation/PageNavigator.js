import { createAppContainer } from 'react-navigation';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';

import { LandingPageScreen } from '../screens/LandingPageScreen'
import { MapScreen } from '../screens/MapScreen'
import { MenuScreen } from '../screens/MenuScreen'
import { FavScreen } from '../screens/FavScreen'




const PageNavigator = createStackNavigator({
  Fav: FavScreen,
  Map: MapScreen,
  Menu: MenuScreen,
  LandingPage: LandingPageScreen,

},
  {
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
      cardOverlayEnabled: true,
      gestureEnabled: true,
    }
  })


export default createAppContainer(PageNavigator) 