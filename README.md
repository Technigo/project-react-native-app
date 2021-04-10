# Project React Native App 📱

The goal of this project was to build a mobile app using React Native and choosing one or more focus areas: sensors, APIs & sharing, and navigation.

## The problem

My idea was to create a food recipe app that would allow the user to choose between several ingredients. By shaking the phone, the app would make an API call to fetch a random recipe including these ingredients. I used the spoonacular API, which provides a lot of useful endpoints, but unfortunately not enough recipes to actually search for several ingredients. So I chose to instead search for types of dishes, cuisine and diet restrictions. The app displays up to three recipes matching the search criteria, which can be tapped on to get the full recipe, where ingredients and instructions are shown. Here, the user can tap on the image to share the original url of the recipe.
Once I got the first API call to work, I realized I needed to use React Navigation to easily display a recipe suggestions page.
I did get the sensor component to work for making the first API call, but couldn't see the point of it from the user's perspective, as the app is not about mixing ingredients anymore (as my initial idea was). That's why I decided against implementing that feature as well.

## View it live


