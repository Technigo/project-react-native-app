import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



import { LandingPageScreen } from '../screens/LandingPageScreen'
import { MapScreen } from '../screens/MapScreen'


const RestaurantsNavigator = createStackNavigator({
  LandingPage: LandingPageScreen,
  Map: MapScreen
})


export default createAppContainer(RestaurantsNavigator)