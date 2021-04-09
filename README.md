# Magic Ball project 📱

In this project, I have built my first mobile application with React Native and Expo. It is an interactive Magic Ball that will show random answers each time a shake on the phone is detected. The idea is that user asks a question, then shakes the phone and the answer appears inside of the Magic Ball.


## The problem

The app has two screens which are created by using React Navigation component. The Home screen asks the user to type in the name by using TextInput component. And includes a button to proceed to the next page. Button is created by using TouchableOpacity component in order to be able to style it. All styling is done by using Styled Components. 

Two main challenges during this project were to figure out how to pass value from the input field to Magic Ball screen and how to show random answers when shake is detected.

First problem I solved by talking to a code coach, he explained how to pass parameters to the route you are navigating to. So I implemented that. And secod problem I solved by googling and going throuth answers on StackOverflow. I used accelerometer in the mobile phone to detect the shake and call a function that would shown random answers by using Math.random method on the array of possible answers.

If I had more time I would have made better design for the actuall ball and implemented some animations.

## View it live

View it live: 
