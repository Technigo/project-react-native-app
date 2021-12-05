# Pick Your Rick - A Mobile React Native App 📱

This is my first mobile app. The goal was to fetch from an API and style all displayed information according to the conventions of React Native.

## Features

- Styled with the styled-components library
- Fetching from Rick and Morty's API, which you can find on https://rickandmortyapi.com/
- Filtered API fetch to display all the variants of a specific character (all versions of Rick that are currently alive)
- React Hooks: useState, useEffect
- From react-native: FlatList, ActivityIndicator, View

## Challenges and lessons learned

- Fetching from APIs proved quite challenging. I tested with several ones that had different degrees of complexity, without success. This one was quite user-friendly and it's about one of my favorite shows, so I ended up choosing this one.
- Rendering the list of fetched characters as a FlatList was the second biggest challenge. Putting the renderItem before the keyExtractor solved the problem.
- Last but not least, scrolling to the end of the list was also difficult. In the beginning I thought it was a pagination problem, but it turned out to be just a matter of adding a ListFooterComponent.

## View it live

https://expo.dev/@isomoth/project-react-native-app
