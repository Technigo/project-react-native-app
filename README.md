# Project React Native App 📱

It was so exciting creating my first app, it's really fun and totally different from the way how to declare the components and a little tricky the new way to used <div>.

To create this project I got inspiration from Netflix. I used a movie API from a previous project,
The app has `login` and `create user` screens that are in the main `nav stack`. it means if you log into the app you will be able to see only what 2 screens
If you don't have a user registered (i made a mock user registration by using Async Storage) you can create a new one and after sending the info your user will be stored in the Local Storage of the app and also in the Auth Storage of the app
After the previous step the app will redirect to the main screen app and while you are logged in, every time that you refresh the app you will see the Main App Screen

The main features of the app are the followings:

- See a list of movies and tv series in Home Tab
- See a list of the upcoming movies in the Upcoming Tab
- A user profile screen where you be able to see your info and logout from the app
- When you press in a Title Cover you will be redirected to a Detail Screen where you will see Content Details, add to favorites and share the title to your contacts

## The problem

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?

- I wanted to implement a tab navigation screen app. for that I did research and installed the corresponding library to do it
- I wanted to do Login flow to switch between Login/Register Stack and Main App content Stack, for that, I made a double stack that switches between Auth Stack and Main App Stack once you are logged
- To achieve properly the previous step I had to make a function inside the main app where the validation is and sending it through nav props to refresh and catch if the app has a user logged or not and react depending on that.
- While implementing the previous step I end up with a warning that I couldn't fix yet
- After fetching and displaying the movie list I was struggling with the Wrap order of the titles, to solve this I have used `FlatList` component that allows me to split the content into columns.
- During this challenge I never had a chance to try it on android devices

## View it live

https://expo.io/@rubmaigut/projects/project-react-native-app
