# Project React Native App 📱

This Mobile App was made as a Week 16 project for Technigo bootcamp.
The goal was to build a real native mobile app with React Native. 
I chose Cryptocurrency API to build an app about them.

## The problem

First of all, I used the multiscreen/navigation and created a stack navigator containing 3 different pages (Home, Portfolio, Random Crypto). 
I've fetched different cryptocurrencies from an API (https://api.coinstats.app) to display information about them in a nice way on the portfolio page.
On the Portfolio page I give a user a possibility to buy coins from the list with their current price and display the info about how coins has changed since last week. 
The bought coins are then displayed in user's portfolio and the user can see the total balance of all bought coins. I stored that information in Redux store using reducer cart.js for that. 

I also used one of the sensors of the mobile phone such as accelerometer to change the random coin name on the third page each time it detects a shake in the phone. I implemented vibration if a user has sound "on".
For styling, I used some Lotties, expo vector-icons, expo-linear-gradient package, fonts and styled component in React Native. 
It was a very fun project!  
 

## View it live

https://expo.dev/@julianiki/project-react-native-app 
