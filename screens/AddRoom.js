import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

const AddRoom = ({ navigation }) => {
  const headerHeight = useHeaderHeight();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: headerHeight,
    },
  });

  return (
    <View style={styles.container}>
      <Text>Add a new chatroom!</Text>
      <Button title="Add chat room" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default AddRoom;
