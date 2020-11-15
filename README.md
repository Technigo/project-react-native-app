# Weather app for Mars

This little app shows the latest weather report from Elysium Planitia on planet Mars. The data is collected by NASA's lander InSight and fetched from the corresponding API. I built this app as part for the Technigo Bootcamp for frontend developers in fall 2020. 

## What it does

The start screen contains a short intro text and two buttons providing two options to the user: seeing the latest weather report from Elysium Planitia or learning more about the app and the project. The "Latest report"-button will lead to a screen showing data about the air temperature, wind speed and air pressure on Mars, as well as which day (both on Earth and on Mars) the data was collected. 

The API generally provides data for the last seven martian days but there can be delays and parts of the data missing. The app will always show the latest day that already has received data for the air temperature. However, there can be data missing for wind speed and/ or air pressure which in that case is indicated to the user. Should there be no day with available data for the air temperature, the app will show the data that already has arrived for the latest day. 

In best case, the app shows an avarage, a minimum and a maximum value for all three categories. 

The "Learn more"-button leads to a screen with a short text containing background information about the data and the lander collecting it on Mars. 

## The approach

The site is built using React Native and it's the first time I built something with React Native. For styling, I used styled components, that as well for the first time. The navigation is done with stack navigation which means another "first time" for me.

I started with building the screen that actually shows the data. I built in validation to make sure that the user will (nearly) always have data on the air temperature and a proper message if there is no data on e.g. wind temperature yet. 

Later I added the start screen as well as the about-screen to give some background information on where the data comes from and what the app actually shows, and to try using navigation. During the development process I used Expo to view the app on my Android phone.

In the future I'd like to even add screens wich give an overview over the last seven days for the three categories to provide even more interesting information to the user. 

## Compatibility

I imported the app as a Snack on Expo and it works fine on both the Android- and iOS-simulator there.

## Tech used

- React Native
- Styled components
- Stack navigation
- Expo

## View it live

You can look at the project as an Expo snack here: https://snack.expo.io/@henwie/weather-on-mars 

