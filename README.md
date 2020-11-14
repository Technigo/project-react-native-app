# Project React Native App 📱

Boot-camp week 13 - This week's goal was to build my first mobile application using React Native and using Styled Components.
I decided to create a joke app which displays random jokes from an API.

## The problem

This felt like a tough project and it was my first time using React Native, so I decided to keep it simple. I created a HomeScreen, Joke and Header component and implemented StackNavigator to navigate from the HomePage to Joke page and back again. I used an API which had 7 different joke categories which I mapped over and displayed buttons for each category. This then linked to the Joke page where I set up a fetch to an endpoint which depended on the category selected.

One problem I came across was that not all jokes were appropriate, which was a concern. However I browsed through the API and found a property "flag" which I could use to filter out some of the jokes. I set up a simple IF statement to do this, and a function to re-fetch the data if it wasn't suitable. I added a button on the Joke page and used this function again to load another joke when pressed. I wanted to add a some kind of unique device functionality so I created a vibrateDevice function to vibrate when the refresh button is pressed.

## Tech used

- React Native
- Styled components
- React Navigation
- JSX
- API
- Expo

## View it live

I have only been able to test this on iOS and web browser.

https://snack.expo.io/@the_j_curl/project-react-native-app1

https://expo.io/@the_j_curl/projects/project-react-native-app
