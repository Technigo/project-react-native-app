
import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Appbar, Avatar } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f76d8b",
  },
  title: {
    textAlign: "center",
    backgroundColor: "#e88f3c",
  },
});

const Header = () => {
  return (
    <View >
      <Appbar.Header styles={styles.container}>
        <Appbar.Content styles={styles.title}
          title="Keep the faith"
          color="#fff"
        />
        {/* <Avatar.Image size={60} source={require('../assets/Nabeel.jpg')} /> */}
      </Appbar.Header>
    </View>
  );
};
export default Header;
