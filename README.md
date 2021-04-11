# Project React Native App 📱

This is a project to build a mobile app with React Native. The app is fetching information from a music API and renders album images.

## The problem

After installing the dependencies needed, I created the App.js which renders the AlbumList component. The AlbumList fetches from the API and renders images in a flatlist. Each Album image is its own component AlbumCard, which is pressable. When pressing, an alert pops up showing extra information about each album. 

In the API I chose, two album objects are lacking images which leads to only black background color showing there. If I would have more time, I would have found a way to display some placeholder info, e.g. an Activityindicator. I inserted a PlaceholderContent but it doesn´t recognize that the fetched url is an empty string for these two objects. 

## View it live

E