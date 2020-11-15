# React Native Christmas App 🎄☃️

The project for this week was to build our first mobile app using React Native and styled components. I choose to do a multiscreen Christmas app with a clock that counts down the time left until Christmas, and a screen which show random tips/inspiration of cosy Christmas-things to do when you shake your phone. 

## Solving the assignment ⚛️👩‍💻
- I started out with a simple sketch of what I wanted the design and flow of the app to look like. The app is built using two components: StartScreen (wich hold the countdown component and a button that navigates to the TipScreen), and TipScreen (which holds the functionality for showing random Christmas tips and a button to navigate back to the StartScreen). 

- I decided early that I wanted some sort of clock/countdown on the start page, and after some research I found a npm-package for a React Native countdown component that suited my project perfectly. I've styled the component to fit my app, and the time is shown correctly by using some separate functionality for taking the current time and calculating time left until Christmas (in milliseconds), and then displaying the time left correctly using toString() to convert the integers given to a string, slice() for being able to take out the time we need from the string, and then parseInt to convert the time back to integers/milliseconds.

- The functionality for showing random Christmas tips is built using the accelerometer in the phone, when shaking the phone a function is triggered that listens to the forced used in the shake, and if the force of the shake exceeds a certain number a random Christmas tip will appear. 

- If I had more time I would've loved to redo the functionality in the TipScreen component to be able to shake the phone more than once to get a new tip (right now you have to return to the StartScreen and then go into the TipScreen again to be able to get a new tip).


## View it live 📱🎁

View the app in Expo: https://expo.io/@emma-tech/project-react-native-app (Make sure to have the Expo-app installed on your phone and scan the QR-code).
