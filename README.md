# Project React Native App 📱

This project's goal is to build our first mobile application using **React Native** 💥📲 The styling is also mainly done using **Styled Components**.

I've decided since the start that I wanted to build a multi-screen app, and for that I've used **React Navigation**. It was important to go through the basic React Native documentation in order to understand the different core components available and what I can do with them.

I've created **Mood Booster** 💙: An app in which you can choose a mood from 4 different options, this will then show a fact about why it is an instant booster and then give you the option to share this fact via your Phone's Sharing functionality: through text message, social medias or email.
Users can also make this personal by entering a message of their own which will be included in the final shared text ✨

## How I solved it - What I learned

This project felt a lot like uncharted territory since I had to work in a complete new environment with React Native. I did a lot of fiddling around with some practice projects and also on Expo Snack in order to get comfortable with the tools.
- My app is built using a **Tab Navigator** from React Navigation, which allows for swiping on iOS, but also provides a Top navigation bar to move between screens. I have two screens: HOME, which presents the app and what it does and SHARE which contains the main functionality.
- From HOME users can swipe or tap to get to the SHARE screen: this screen presents the user with 4 mood options to pick from. When clicking on a button (built with TouchOpacity component), I set a mood via a state. This state update will change the color of the mood's button which was chosen and also generate a fact about why is this good for boosting your mood (via a basic if/else phrase() function which takes in the mood state variable as a parameter. This fact will show on the screen, creating some small interactivity and giving the user the instant feedback I was aiming for 🎈
- At the end the user gets the option to share this fact via the Phone's sharing functionality (onShare function in the code) and even add some personal message to it via an input field. The text entered by the user is stored via a message state and passed on to the onShare() function.
- Ive had to implement some special components like **ScrollView** and **KeyboardAvoidingView** in order for things to display and work as intended.
