# Project React Native App 📱
My first React Native project. App for thoose booring moments. When you shake the phone you get a suggestion on a new activity and on click you get a "dad joke"😅. This activity & joke is a request from two different REST Api's. 

## The built🪓 challanges 🤯 

✅The app includes styled components and Navigation to navigate between the different pages. The project also includes anitmation from LottieView🎨.

✅ functionality for showing activity is built using the accelerometer in the phone, when shaking the phone a function is triggered that listens to the forced used in the shake, and if the force of the shake exceeds a certain number (>1.78) a random activity will appear. 

✅The random activity is a fetch from a rest API http://www.boredapi.com/api/activity/ & and the dad joke is triggered on click is a fetch from rest API: https://icanhazdadjoke.com/slack

The challanges were many. Mainly how to trigger a new navigation page when shaking the device. This included a deep dive into navigation-container. Using the navigation route setup in App.js that could be passed on to the different components. A powerful was to anvigate between different components. I solved this by reaching out to a developer a know, my own brother and bombarding him with question. It also included team meetings with my team and seeing other peoples solutions. 

⏰ If I had more time I would continue styling the navigation container in a better way, were you can easily toogle between the components and change the default styling. And adding more animations and more coherent styling.

### Tech ⚛️
    👉React Native
    👉Styled Components
    👉JavaScript

#### View it live

https://snack.expo.io/@sartish/inspiration
Download expo app
scan the QR code with your camera on your phone
Play around 

