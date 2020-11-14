# Project React Native App 📱
In this weeks project we built our first mobile app. The only criteria is that it should be a mobil app created using react native and using styled components. And that the app should either be:

- using one of the sensors of your mobile phone such as the camera, accelerometer or voice assistance etc.
- using an external API to fetch something to your app and then interact with it.
- a multiscreen app by using React Navigation.
- a useful app such as a calculator, a stopwatch or a compass.

I decided to go with creating a multiscreen app using react navigation.

## What I achieved 💪
1. Came up with an idea for my app which is an app where the user can click on a symbol and a uplifting quote is shown. And that they can navigate back to the homepage by clicking on the back button to choose a new symbol/button which will show another quote. 
2. Read up on the react navigation to understand how I should structure my app and what code to implement. Decided to focus on the stack approach. 
3. Started off by defining my stacks in App.js for the homescreen (QuoteList) and the quote screen (QuoteDetail). Inititally I had only these two stacks. This was because I created a json with an array of objects and in each object was an id, quote, author, and an image path and in QuoteList I imported that json and mapped through the data to create a jsx touchable opacity (link) elements for each of the 6 quotes. And within the jsx for the link to each of the quotes I had an image which acted as the background for the button. I also passed the data that was mapped through into the QuotesDetail.js using route and params such as quote, author and image. In QuotesDetail.js I created the jsx elements as a template for each of the quotes. 
4. The only issue with this approach is that in QuoteList I couldn't style each of the images that represented a link to a quote in the way I wanted. I wanted to use position: absolute and use the top and right attributes to  place each image specifically on the page based on the initial sketch I had done. Instead I could only have them layed out in a grid. Because this was the case and because I really wanted to implement my design idea I chose to instead created a stack for each of the quote pages. And in QuoteList I defined each of the links that lead to the specific stack as well as the specific image path for the link. This gave me the freedom to place each image on the page based on the initial design I had done. 
5. If I had more time I would like to come up with a solution so I don't have to use as much code as was needed to fufill my intital design idea of using placed images. Maybe a solution where I can still map through the array of objects from the json I created in the QuoteList and where only one component, QuotesDetails, is used to define the page for each of the quotes. Rather than having a component for each of the quotes and duplicating code. 

## What I learnt 💻
1. In general I learnt how to use react navigation and how to create multiple pages with a different quote and author on each page. 
2. I also learnt about how to work with images in react native and the source attribute when using files that are locally located. And what issues can arise if you're trying to define the source and require based on images that are stored in an object. This doesn't work as the require needs a string and won't work with a variable. In the end I didn't end up using the solution I found for this, but it was a learning curve to say the least in understanding React native and how to define images.
3. It was interesting to learn how to create links to and from different pages using the onPress attribute for touchable opacity and how you can use the name of the stack to define the navigation for that link.
4. I implemented the styled components and learnt how to think about the different stacks in terms of how the different content defined in each stack can affect the height of the stack. 

## Tools used 🧰
1. Techngio videos and reading materials.
2. Google.
3. React native documentation.
4. Asked Team members and teachers.
5. Stack Overflow. 

## View it live 📱💻
Link to my snack on expo.io:
https://snack.expo.io/@clairecaudwell/github.com-clairecaudwell-project-react-native-app

If you get red dependancy errors at the bottom of the screen just click on "add dependancy" and then the snack should load. You might need to do this a few times.

When viewing my project in the snack some of the proportions are different to how I saw them when I was styling both the home and quote page. When I was working on it I viewed it in chrome with the iphone X view on in the devtools. The best way to view it from the expo snack is: 

📱 On a iphone X if you scan the VR code OR 💻 In the web option and be sure to click on the open in new browser icon and make the screen slightly bigger dragging the bottom right corner.