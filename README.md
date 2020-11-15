# Project React Native App 📱

The purpose of this project was to create a mobile app with React Native and use styled components. We were given a free hand when it came to idea and design but the app had to use a mobile phone sensor, an external API, a multiscreen navigation or be as useful as a calculator, a stopwatch or a compass.

Since I am member of the team Foxes, I decided to create Fox News by Mindstorming, an app displaying random fox images.

## The problem

First I found a simple API where I could randomly fetch cute fox images. I created a basic app containing a header, an image fetched from the API and a button that picks a new image. It made me aware that there is a difference between web browsers and smartphones and that an app could work perfectly in Metro Bundler's web browser and crashes on iPhone!

Making the app smartphone friendly was actually enough to meet the blue level requirements and I decided to challenge myself by using the accelerometer to create a "shake action" beside the existing button and adding a Lottie loading animation in addition to the loading solution I already had for web browsers, reaching red level.

Despite the many errors that showed up in the log, working in React Native was really exciting and I splitted my app in 2 screens, creating a multipage app with a navigation, the black level requirement.

If I had more time, I would improve the loading process (see https://stackoverflow.com/c/technigo/questions/1817) and pick a more challenging API and create a more advanced app. Even if I think that my app is very useful: we all need to be cheered up by cute fox images!

## View it live

You can take a look at the result on https://expo.io/@mindstorming/fox-news-mindstorming.
You are welcome to visit my pull request  and leave some comments about my code.
Enjoy!
