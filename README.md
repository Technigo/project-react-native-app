# Project React Native App 📱

This was a @Technigo week 16 project consisting of building an app with React-Native using either sensors, fetching data from an API or navigation. I built a Pokémon app fetching a random pokemon when shaking the phone.

## The problem

I chose to go for the API fetch and the accelerator sensor primarily. I studied the API that I've chose to come up with a way to fetch a random Pokémon and used Math.random() to generate it. I decided to implement Redux from the beginning since I like working with a global storage and I knew I wanted to be able to store Pokémons later on but I didn't know long every thing would take to develop. What I'm turning in this week is an app fetching random Pokémons and with a tweaked randomizer so that it more often returns Pokémons with an id lower than 251 so that the other less known Pokémons is rare to get.

In my repository there will be a lot of commented out code because some functions are still in progress. I've developed a function to store up to six Pokémons in your team, remove Pokémons from team and drawer navigation to navigate between the shake fetch page and the team page, and they are done I would say, but I'm also trying to implement redux-persist and AsyncStorage so that the users team of Pokémons won't disappear in between using sessions and it's not working just yet. When it does all the functions will be available :D

For the future it would be cool to develop some kind of game to be played and won if the user wants to catch a Pokémon in order to add it to their team.

## View it live

https://expo.dev/@elsisco/elsisco-pokeshake
