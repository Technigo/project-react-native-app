# Magic Oracle App 🔮 with React Native 📱

Magic oracle App 🔮 that gives your oracle (don't trust it thought, the oracle is very cranky sometimes!) when you shake your phone using the Advice Slip JSON API. 
The main goals of this project was to use React Native ⚛️ and styled components to create our very first mobile app! This was a very creatively free project, as we were allowed to create whatever we wanted, as long as,m  it fullfilled at least ONE of the following requirements:
- using one of the sensors of your mobile phone such as the camera, accelerometer or voice assistance etc.
- using an external API to fetch something to your app and then interact with it.
- a multiscreen app by using [React Navigation](https://facebook.github.io/react-native/docs/navigation).
- a useful app such as a calculator, a stopwatch or a compass.


## Planning & What I learned 🧩

My planning was based a lot on what I wanted to build, I knew I wanted to use an API and build something fun that used something from the hardware! So I started looking for API's with random funny content and then was inspired by the eight magic ball from the 90's to build the oracle! 
The app consists on 3 main components:
- App.js where I use the React useState hook in order to store the state of my start screen depending on my "Shake" function, which has event listeners to detect the the phone's movement and render the correct screen. 
- The Start Screen that has instructions to the user and conditionally renders dependening on the state of my shake event function. 
- The Oracle Message component where I fetch() the data from the Advice Slip JSON API and displays it, depending on the conditional rendering on the App.js, also there's button to restart the app ✨

I've learned a new way of writing CSS, as well as, how to use style components which was a real challenge. Also, how to work with hardware components on the mobile phone and the dependencies from expo, how to use expo.io and how to add animations with Lottie. 

Tech ⚡️
- React Native 
- Javascript
- Styled Components 
- CSS

## View it live 🔴
[Magic Oracle 🔮](https://snack.expo.io/@sofiavazs/6c0e6c) Due to the fact that the app uses the mobile phone's accelerometer, it's not possible to experience it on the web version, so it needs to be opened on a mobile phone
