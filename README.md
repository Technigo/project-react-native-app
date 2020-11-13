# Project React Native App 📱

This project is made as a part of the Technigo boot camp. 

This week I have created my first mobile application with React Native!
I chose to do a Step Counter. It shows the amount of steps taken during your last 24 hours, last 7 days and your steps live for one "session". 
It counts down to 10 000 steps - which is the goal for everyday - and changes the animation when the goal is completed.
This app does not work in web browsers and is only tested on an ios device.

## The project

The app is divided in to two parts - One for todays information and one for the weekly information. 
I have worked with styled components and chose to seperate them in to containers, texts and button instead of one for the different screen types. In this way I could reuse the same styling components in both of the screens.

I used the react native pedometer - expo sensors. I used the expo documentation which was really detailed and together with a bit of googeling I managed to implement it and to update the syntax. 
I also installed react-navigation to create the navigation between the two screens.

The big struggle for this week was to get started with the project, figuring out how to set it up in expo and and finding a new (react-native friendly) way of structuring the code.

If I had more time:
- I would have loved to create a chart for the weeks's steps. I installed react-native-chart and some other dependencies to the package.json but sadly I couldn't get it to work :(
- Right now the data from the pedometer is for the last 24 hours and not for a single day..I would like the data to be submitted when a weekday comes to an end and then be cleared for the coming day so that it starts at 0 in the morning.

## TECH
React Native
Javascript
JSX
Styled Components
Expo
