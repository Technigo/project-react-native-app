import React, { useState } from "react";
import styled from "styled-components/native";

import ButtonApi from "./components/ButtonApi";

const Container = styled.View`
  flex: 1;
  background-color: pink;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 24px;
  color: red;
`;

const App = () => {
  return (
    <Container>
      <Title>This is an app</Title>
      <ButtonApi />
    </Container>
  );
};

export default App;

// export default function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <View style={styles.container}>
//       <ButtonApi />
//       <Text style={styles.counterText}> {count}</Text>
//       <Button title="Tape me" onPress={() => setCount(count + 1)} />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "powderblue",
//     alignItems: "center",
//     paddingTop: 90,
//     color: "red",
//   },

//   counterText: {
//     color: "red",
//     padding: "20",
//   },
// });
