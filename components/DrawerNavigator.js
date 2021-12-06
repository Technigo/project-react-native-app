import React from 'react';
import { useSelector } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavigationTab from './NavigationTab';
import MainIngredient from './MainIngredient';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const receivedRecipes = useSelector((store) => store.meal.receivedRecipes);
  const ingredient = useSelector((store) => store.meal.mainIngredient);
  if (receivedRecipes === false) {
    return <MainIngredient />;
  } else {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <MainIngredient {...props} />}
      >
        <Drawer.Screen
          name={`Meals with ${ingredient}`}
          component={NavigationTab}
          options={{
            //drawerLabel: () => null,
            //title: null,
            drawerIcon: () => null,
            selected: false,
          }}
        />
      </Drawer.Navigator>
    );
  }
};
export default DrawerNavigator;
