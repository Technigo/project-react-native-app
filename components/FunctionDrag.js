// Tried to make this work, but it didn't//

// import React, { useRef } from "react";

// import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";

// const FunctionDrag = () => {
//   const pan = useRef(new Animated.ValueXY()).current;

//   const panResponder = useRef(
//     PanResponder.create({
//       onMoveShouldSetPanResponder: () => true,
//       onPanResponderGrant: () => {
//         pan.setOffset({
//           x: pan.x._value,
//           y: pan.y._value,
//         });
//       },
//       onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
//       onPanResponderRelease: () => {
//         pan.flattenOffset();
//       },
//     })
//   ).current;

//   return (
//     <>
//       <View>
//         <Animated.View
//           style={{
//             transform: [{ translateX: pan.x }, { translateY: pan.y }],
//           }}
//           {...panResponder.panHandlers}
//         >
//           <Text style={styles.decoration}> ❤️ </Text>
//         </Animated.View>
//       </View>
//       {/* <Animated.View
//         style={{
//           transform: [{ translateX: pan.x }, { translateY: pan.y }],
//         }}
//         {...panResponder.panHandlers}
//       >
//         <Text style={styles.decoration}> ❤️ </Text>
//       </Animated.View>
//       <Animated.View
//         style={{
//           transform: [{ translateX: pan.x }, { translateY: pan.y }],
//         }}
//         {...panResponder.panHandlers}
//       >

//         <Text style={styles.decoration}> ❤️ </Text>
//       </Animated.View> */}
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   Decoration: {
//     height: 150,
//     width: 150,
//     color: "red",
//     position: "absolute",
//   },
// });

// export default FunctionDrag;
