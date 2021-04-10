# Project React Native App 📱

Building my first mobile application with React Native!
Goal:
- How to use React Native to create a mobile app
- Practice using Styled Components for styling.

## The problem

I started off by choosing one of the three projects for the week. The lucky on was the Shake sensor.
By reading upp on the Accelerometer on expo and trying to figure out what it actually does I then continued by reading the code that what handed to us from Technigo. 

I felt that the code was a bit hard to grasp so me and a team-mate decided to talk about it and understand it together. 
I knew that i wanted to make an array with answers and when shaking the phone a random function would give me an answer.
I started to make a function for this and to show it when the phone was shaking. What happened was that everytime the phone detected acceleration it showed the answer but it was also gone in a second. 

Instead of having the shake data for displaying the answers i used a state with the answer and set it to undefined. 
Later on in the subscribe funtion i added an if statement where whenever the phone shaked, the random function was getting a random answer and stored it in my answer state. 

So whenever it was shaked, a random answer was stored and then later i checked if the answer was true instead of indefined - the answer should show. This solution eliminated the issue where the answer dissapeared as soon as the shaking was gone. 

I also added a ternery operator to see if answer was true or false - a different string would show up to say shake or shake again. 

What i struggled the most with this week was understanding the Acceleromator and what the code did. I also thought it was a challange to figure out how to show the answer eventhough the phone was not shaking. 

To be honest it was also hard to style. I felt limited in how i could add css since it would require other packages to install etc. I LOVE to style so it was a bit tough for me. BUT, I think that when i feel more confident in React and also later on dive in to React Native it will be more fun and exciting! 


## View it live

https://expo.io/@magicvilla/projects/project-react-native-app
