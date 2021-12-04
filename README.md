# Project React Native App 📱

This is my first project in React Native. It's a simple weather App, that gets the users location and displays according weather data. As a special feature, the App fetches the weather data from random cities, when the user shakes the phone

## The problem

It was quite a struggle to get everything up and running with this project. Working with React Native and Expo dev for the first time, there were a lot of technical issues to be solved in the beginning. I also tried working with several APIs and ended up using Openweathermap for fetching the data according to my location. 
From there I developed the idea of displaying random weather on shake. 
For the shake-recognition I used the Accelerometer from expo sensors. When the shake is activated, I fetch again data from Openweathermap, but this time not with my actual location, but with geodata that I randomly choose from a geodata.json- file

## View it live

Every project should be deployed somewhere. Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.

Icons from <a href="https://www.freepik.com/vectors/business">Business vector created by macrovector - www.freepik.com</a>
