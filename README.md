# Project React Native App 📱

An app in Ract Native utilizing a few core components, such as Sensors and Location. Aided by Expo.

## The problem

This was a really fun project, and a great exposure to the strengths of React Native and how 'easy' it is to utilize a deeper dimension through e.g. hardware.

The app turned out to be more of a proof of concept, with very little styling or 'nice' features. Focus was solely on functionality and understanding how React Native can jack into deeper parts of a device to create new experiences.

We have one component fetching the device *location* (expo-location) and sending the user to a Google Maps page. Simple enough, but such a common feature in everyday life which was cool to get insight into. Another component is fetching random quotes from an API, and with the press of a *button* you can generate a new fetch (quote), while its sibling *shake* does the same but by checking against the device sensors for movement; when a certain limit is reached a (new) quote is generated.

## View it live

https://expo.dev/@vrill/project-react-native-app
