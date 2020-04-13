# Project React Native App 📱

The task was to create a mobile app in React Native.

## The problem

I started by testing how to get access to the user's camera and photo library and then display photos the user had
taken in the DOM. After accomplishing this I decided to create a 'memory game' using the user's photos.
The first thing was to set the photos to an empty array and then map them. The shuffle algorithm I found
online as it is more properly random than the math.random library. The most tricky part was creating the logic
for the game. I created an array state that each card would be pushed to when pressed, using the
unique photo URIs as IDs. If they did not match they could both be popped from the array. Since setState is asynchronous I had to use a callback functionto check if the cards matched, and use a setTimeout to prevent too many cards being pushed to the array before the old incorrect ones had been popped. 




