# Shake to Make - React native, mobile app 📱

Project built with react native using API and shake sensor (accelerometer) to shake and fetch new cocktails to get inspiret for next party.

## The problem

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?

I had some issue applying gradient background with styled components so instead I used the ImageBackground component and went for an abstract background which I was happy with. Also had some issues with my buttons taking be back and forth between homepage and the mainpage. Wanted to hide the button for the mainpage when that component was displayed and vice versa with the home page component. Solved it by applying ternery and style attribute telling itto have styling display: none when the useState of the current page was the same as the button. 

## View it live

exp://exp.host/@asivol93/shake-to-make
