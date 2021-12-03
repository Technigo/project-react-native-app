# Project React Native App 📱

This week we could choose one of these three focus area:

1. Sensors
2. APIs & Sharing
3. MultiScreen/Navigation

I choose to use the Accelerometer and created two dices. We can either roll a dice with a button or shake the phone.

## The problem

We were provided with some prewritten code by Technigo on the branch, shake-sensor.

Went through the code to understand how the accelerometer works.
I started with creating a navigator with createMaterialTopTabNavigator. Then I moved on with the function of rolling a dice.
Started with a regular button to make the random function to work and also implemented the sensor component, when we shake the device it'll also "roll a dice".

I mostly used icons from MaterialCommunityIcons, I used these icons to illustrate the result of the "rolling". And to make it visually more like you are throwing a dice I added a shake animation and set an interval of the rolling so we invoke rollDice 10 times before we get a result.

For the styling I used the StyleSheet from React Native instead of styled components.

For improvement I think I need to rethink about the vibration I added whenever the phone is "shaking". Maybe add a button to activate/deactivate the shaking function when we want to use it. Right now it vibrates each time we are shaking the phone and both of the dices are rolling at the same time.

## View it live

Expo:
