# Project React Native App 📱

I've built a react native App for cryptocurrencies with APIs, shaking sensor and navigation. It fetches the currencies and their current market prices and displays them all in a scrollview. There is also buy and sell buttons that will increase or decrease the money in your purse.
You can also get random currency info by either pressing a button or shaking the phone, and you can navigate between homescreen, the list of all currencies and the random currency. 


## The problem

I spent a lot of time on probably unneccessary things like adding custom fonts and adding animations. In the end I skipped those parts and focused on the more important ones, might return to those ones at a later time! Another big problem was that when pressing the "sell" button, the market price just got added on after the current value instead of being added together like a normal addition would do :) There was no problem with the "buy" button when subtracting. I google a lot and eventually found the Number.parsefloat() and that made it work! Spent a little time aswell on adding a comma in the values so it wasn't just 100000 but instead 100,000. Googled that too and managed to put together a RegEx for that. 
Other than above problems it went quite smoothly. 

If I had more time I would have added an AsyncStorage for the wallet value so that it stays the same. Gave that a little go but didn't get it to work. Might give that a little go at a later time too. You can still "earn" and "lose" money if you keep the app open since it fetches the current market prices every 30 seconds (added a setInterval) :) I also would have liked to make the buy and sell buttons work better together. I've made the buy buttons disabled when there isn't enough money in the wallet for the specific currency price so that works fine. But I would have liked to somehow connect the buy and sell buttons via currency id so that just the specific sell buttons work. Now they are just disabled when the exact value of the wallet is 100,000. Once you've "bought" something you can sell anything :) But that wasn't really the scope of this project (my mind spins away sometimes) and I'm happy that I managed to combine all focus areas, API, Navigation and shake sensor. 

## View it live

https://expo.io/@jessikahage/projects/CRYPTOFUN
