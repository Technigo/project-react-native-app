# Project React Native App 📱

This week's project was to build an app with React-Native using either sensors , or fetching data from an API, or navigation.

## The problem

My app is mobile fortune cookie teller where you get a proverb every time that you shake your phone. The proverbs are stored in Redux store where I have a getRandomQuote reducer. Javascript's built in functions Math.floor() and Math.random() are used as randomizers. I use the Accelometer from expo-sensors to have access to the device accelometer sensor and associated listeners to respond to changes when shaking the device.
The isShakingEnough function checks the total force when shaking and when it is bigger than 1.8, the UseEffect hook is triggered and the getQuote function is called, which dispatches an action to the redux store to get the random Quote.
## View it live

https://expo.dev/@themisk/project-react-native-app
