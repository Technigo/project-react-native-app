# Project React Native App 📱

This is a recipe-app created in React Native.

## The problem

This week I started out very structured and planned my project thouroghly before starting to code. This made it easy to actually get started once I knew what I was going to do. 

I kept it simple at first and made it a bit more complex the more I worked on it. 

One problem that I had was trying to clean up some of the data that I recieved from the API. It had explicit tags like <ul> and <ol> in the response which I didn't want to render in my app. This I solved by creating two cleaningfunctions, one that looks for a substring in a string and one that replaces the substring with an empty string. By creating a new state specifically for this purpose I could render the clean part of the data in my app.

## View it live
https://expo.io/@vemsan/project-react-native-app