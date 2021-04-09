# Project React Native App 📱
I've built a Magic 8 ball app - ask a question and shake your phone to get your magic answer! 🔮

This is my first mobile application with React Native, built during the Technigo bootcamp.

The purpose of this week's project was to learn: 
- How to use React Native to create a mobile app.
- Practice using Styled Components. 
## The problem
I started by checking out the different branches and chose to go with Shake Sensor since it seemed the most fun and relevant to my previous profession, thought it also seemed to be the one least familiar with what we previously have been learning during the bootcamp. 

In the beginning I had ideas to implement navigation for a startscreen and work with an API too, but I had major issues the first days, and a phone that did not want to run the Expo app at all. It took 3 days to get my environment up and running properly so I decieded then to skip combining different focus areas and go with understanding the shake sensor and building a simpler application.

I did however before that try out with an API that generated the magic answers, but that caused problems in ShakeSensor.js since the data from MagicAnswer where the fetch was done was exported before the fetch was complete. I then followed a thread on StackOverflow and tried to split the fetch up, so the first .then() would be in MagicAnswer and the second .then() would be in ShakeSensor, that did not work for me. I needed to skip that idea, and simply wrote an array in MagicAnswer instead since that at this point allowed me to continue working

Importing Lottie for expo made the app completely crash since there were a lot of conflicting versions. I tried to solve them step-by-step but ended up with having updated and downgraded so many different dependencies that nothing would run. I recloned my own repo since I had not pushed anything to GitHub yet. And started over. 

The last day I focused on learning more about styled components, since that is something I can continue using later together with React. And I read up a bit and implemented a custom font, gradient background and an image in React Native. 

I think that I would need much more time to properly understand both React Native and how different sensors for mobile function and how I can work with them. I have only been able to test my app on Android devices (tablet and phone), and an iPad with iOS version 12.5.1 and it's made to be portrait view for now as specified in app.json

At the end of this week I am satisfied with having had a quick glimpse into React Native and mobile development and am curious to learn more  about it! but having a wider timeframe to complete a project. 
## View it live at Expo or with Expo Go: 
Android devices will have a QR code to scan directly from this link, for iOS download the Expo Go App to scan the QR. 
https://expo.io/@carolinebystrom/projects/project-react-native-app



