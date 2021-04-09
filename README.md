# React Native App

**Mission:** 

*Create an application with React Native with React-Navigation and API*

**Requirements:**
- 🔵 COMPLETE (all)
- 🔴 NONE
- ⚫ COMPLETE (all)


***

## Installation

Navigate to the project folder and run the following command

```
$ npm install
```

**To start the project**

```
$ npm start
```
<br>

## ✅ Features ✅
***
*The following are the main features of this application:*
  
  * Uses [React-Native-Paper](https://callstack.github.io/react-native-paper/index.html) & [React-Navigation](https://reactnavigation.org/)
  * Three main Screens (Home, Movies, Profile) & Drawer navigation
  * Home screen
    * If no profile is setup user will be prompted to edit profile
      * "EDIT PROFILE" => open Profile screen
    * If profile is setup:
      * A list displaying liked movies.
      * User can remove a movie from this list by tapping the heart button.
  * Movies screen
    * Fetches trending movies from [TMDB](https://www.themoviedb.org/)
    * Actions:  
      * Like/Dislike a movie => if liked it is added to the list on Home Screen.
      * Pull down => refreshes the list
    * Like/Dislike functions are disabled if user has not setup up Profile
  * Profile
    * Input of user Name and Switch to toggle dark mode.
    * Actions:
      * Click on FAB icon (edit) => enables the fields on the page
      * If field is enabled user can edit them.

<br>

## 💭 Reflections 💭
***
This project was indeed a steep climb. The process of setting up the dev-environment was a struggle (mostly due to the dependencies versions from the Technigo template not working in tandem with my npm&node versions.) However after I got started I managed to setup a decent project. 

I am happy that I managed to challenge myself and try a library (Reac-Native-Paper) that was new to me and still make it work together with all the other packages. 

<br>

Issues that came up:
- The biggest struggle was that React-Navigation (and the setup I did) made it hard (if not impossible) to use the hook `useEffect`. After trial and error I managed to get my results by using a hook from React-Navigation called `useFocusEffect` together with `useCallback` to make sure that my states on the Screen Navigator components updated after a route navigation.
- Another issue was to get the React-Native element **Flatlist** to work with my setup. Instead I opted for a **ScrollView** with a **RefreshControl** component. 
- Lastly I struggled to create a warning system for the user if they open the drawer while editing in the profile page. I want to show an alert if they try to navigate away while editing. Which works with Tabs and Screens. But the Drawer Navigator component doesn't have a listener that I can use in my `useEffect` hook. I am sure that I can solve it, but time ran away from me so I decided to scrap that feature for this release. 


If I were to continue on this project / start over I would:
- I would add an warning if user navigates away during editing
- Add a Movie details page for each movie

<br>

***

## View it live

https://expo.io/@bellsibub/projects/filmoona
