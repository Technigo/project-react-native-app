# Project React Native App 📱

The assignment was to create a phone app using React Native and the development framework Expo

## The problem

I decided to develop a step-counting app where you reveal words in an inspirational quote by spending steps you've walked.

I initially tried using the provided SensorComponent as a pedometer, but my results were unreliable. Unsure of how to improve it, I decided to keep developing everything around it until I could get advice during the friday QnA session. Van pointed me towards the Expo functionality called expo-sensors, which I then decided to use instead of the SensorComponent. I still ended up dividing registered steps by five in order to account for how oversensitive the pedometer was during testing.

Before writing the fetch from the ZenQuotes API, I tested my quote revealing functionality on a mock API response I wrote. I ran into an issue where the API wouldn't accept my GET requests, despite the endpoint being fine when visited via browser. It turned out to be a security issue, despite the API documentation claiming no key was needed. As a workaround, I ended up sending my GET request through a proxy, bypassing the issue (but increasing load time, which unfortunatly is yet to be communicated visually in the GUI).

## View it live

Build link:


