# Project React Native App 📱

This project is a react native app with drawer navigation that allows the user to log in, generate, and save phrases of corporate jargon. The login does not use authentication but the email and password inputs are controlled an need to contain at least 3 characters and an '@' in the email, to be 'valid'.

## The problem

The app uses https://corporatebs-generator.sameerkumar.website/ to fetch phrases which happens in a separate object with helper function to kind of mimic redux reducers. Most of the functionality is rendered conditionally based on the logged in status. The function to save a phrase and see saved phrases are possible only after login. There is no storage and any saved phrases will be lost on reload. The login function does not require a real email and password but there is requirements on their format, '@' in email and min 3 chars for both inputs. These requirements are also checked in a helper function. Had I had more time I would like to have implemented some form of authentication on the email and/or use AsyncStorage to be able to save the saved phrases. The styling would also be something I would like to improve since it is fairly underdeveloped as it is now :)

## View it live

exp://exp.host/@amanda_tange/project-react-native-app?release-channel=default
