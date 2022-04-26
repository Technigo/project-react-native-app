import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { Input } from "react-native-elements";
import { db, auth } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const AddRoom = ({ navigation }) => {
  const [roomName, setRoomName] = useState("");
  const headerHeight = useHeaderHeight();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: headerHeight,
    },
  });

  const createRoom = () => {
    let threadid;
    if (roomName.length >= 4) {
      addDoc(
        collection(db, "THREADS"),
        {
          name: roomName,
          _userid: auth.currentUser.uid,
          user: auth.currentUser.displayName,
          createdAt: Date.now(),
          lastUpdated: Date.now(),
          latestMessage: "",
          numberOfMessages: 0,
        }
        // addDoc(collection("MESSAGES"), {
        //   system: true,
        //   text: `You have joined the room ${roomName}`,
        //   createdAt: new Date().toDate(),
        // })
      );
      // .then((data) =>
      //   addDoc(
      //     collection(db, "THREADS", data._key.path.segments[1], "MESSAGES"),
      //     {
      //       text: `You have joined the room ${roomName}`,
      //       createdAt: Date.now(),
      //       system: true,
      //     }
      //   )
      // );

      navigation.navigate("Home");
      setRoomName("");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Add a new chatroom!</Text>
      <Input
        labelName="Room Name"
        value={roomName}
        onChangeText={(text) => setRoomName(text)}
        clearButtonMode="while-editing"
      />
      <Button
        title="Create chat room!"
        onPress={createRoom}
        disabled={roomName.length < 4}
      />
    </View>
  );
};

export default AddRoom;
