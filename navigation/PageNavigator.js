import { createAppContainer } from 'react-navigation';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';

import { LandingPageScreen } from '../screens/LandingPageScreen'
import { MapScreen } from '../screens/MapScreen'
import { MenuScreen } from '../screens/MenuScreen'
import { FavPlaceScreen } from '../screens/FavPlaceScreen'
import { AddPlaceScreen } from '../screens/AddPlaceScreen'


const PageNavigator = createStackNavigator({
  Map: MapScreen,
  AddPlace: AddPlaceScreen,
  LandingPage: LandingPageScreen,
  Menu: MenuScreen,
  FavPlace: FavPlaceScreen,


},
  {
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
      cardOverlayEnabled: true,
      gestureEnabled: true,
    }
  })


export default createAppContainer(PageNavigator) 