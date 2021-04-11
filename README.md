# Project React Native App 📱

I've built a mobile application using React Native, styled components and the mobile's accelerometer.


## The problem

The main task was to build a mobile application using React Native and styled components. I chose to utilize one of the mobile's sensors (the accelerometer) in my project. The main idea of the application is that a shake of the mobile which will trigger a fetch for a Game of Thrones quote from an API displayed in a color theme that differs depending on the house the character belongs to.

I started by checking out the starter code for the accelerometer to get an idea of what it was. After that I went ahead and sketched out what I wanted the application to do and roughly how I wanted the style to be. After that I wrote down what different components I would need, the flow of the components and their responsibilities. With the sketch done and my decision on how the flow of the components where to be, I proceeded to set up the structure for the API paired with a functionality controlling when to perform a fetch request. First a function is implemented to set up a threshold for the force being put into the mobile by the user (i.e when the user shakes the phone). When the set threshold is reached, it will return true (which the application reads at a set interval). When the application reads the accelerometer's data, it will invoke the function controlling whether or not to do a fetch request by checking if the threshold is indeed reached. It will also check that 2 seconds has passed since the last fetch request to make sure that the user won't be able to shake multiple times triggering the fetch before the first fetch is done. If these two conditions are met, the fetch function will be invoked displaying the quote conditionally styled depending on the response from the API.

With the above functionality in place, I implemented the rest of the styling to the styled components. I also added a custom font to my application using the useFont hook. 

If I had more time I would've added a fade in animation for the welcome message and also when displaying the fetched quotes. It would also have been nice to add an animation like a figure doing a slight movement below the welcome message. I also considered a bit regarding the function controlling the fetch and the part that checks when the last fetch was done if it could be done more optimized. Granted, we don't know if the set interval of minimum 2 seconds will hold for every fetch since we don't actuallt know how long a fetch might take. If I had more time I would think about how to make this more correct and more defensively coded.


## View it live

I ran into some problem when trying to deploy it via Expo. I instead created a snack on Expo of this project which you can view here: https://snack.expo.io/@isabellam5/eb6d7f. 