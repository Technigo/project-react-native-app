import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Input, Button } from "react-native-elements";
import { db, auth } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import background from "../assets/image.jpg";

const { width, height } = Dimensions.get("screen");

const AddRoom = ({ navigation }) => {
  const [roomName, setRoomName] = useState("");
  const [error, setError] = useState("");

  const createRoom = () => {
    if (roomName.length < 6) {
      setError("Room name must be minimum 6 characters.");
    } else if (roomName.length >= 6) {
      addDoc(collection(db, "THREADS"), {
        name: roomName,
        _userid: auth.currentUser.uid,
        user: auth.currentUser.displayName,
        createdAt: Date.now(),
        lastUpdated: Date.now(),
        latestMessage: "",
        numberOfMessages: 0,
      });

      navigation.navigate("Home");
      setRoomName("");
    }
  };

  return (
    <View style={styles.backgroundcontainer}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.windowcontainer}>
          <View style={styles.windowheader}>
            <Text style={styles.windowheadertext}>Create a new chatroom!</Text>
            <TouchableOpacity
              style={styles.windowheaderbutton}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.windowheaderbuttontext}>_</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.windowcontent}>
            <Text style={styles.title}>Create a new chat room!</Text>
            <Input
              labelName="Room Name"
              value={roomName}
              onChangeText={(text) => setRoomName(text)}
              style={styles.input}
              // clearButtonMode="while-editing"
            />
            {error.length > 0 && <Text>{error}</Text>}
            <TouchableOpacity style={styles.loginbutton} onPress={createRoom}>
              <Text style={styles.buttontext}>Create chat room!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default AddRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007F7F",
  },
  windowcontainer: {
    // flex: 1,
    borderWidth: 5,
    // borderColor: "#0055CF",
    width: width / 1.25,
    height: height / 1.5,
    borderLeftColor: "white",
    borderTopColor: "white",
    // backgroundColor: "rgba(235, 232, 216, .5)",
    backgroundColor: "#C0C0C0",
  },
  windowheader: {
    backgroundColor: "#00007F",
    height: 30,
    width: "97%",
    marginLeft: "1.5%",
    marginRight: "1.5%",
    marginTop: "1.5%",
    // justifyContent: "center",
    flexDirection: "row",
    // alignContent: "center",
  },
  windowheadertext: {
    color: "white",
    marginLeft: 5,
    fontSize: 17,
    marginTop: "auto",
    marginBottom: "auto",
  },
  windowheaderbutton: {
    height: 18,
    width: 18,
    backgroundColor: "#C0C0C0",
    marginLeft: "auto",
    marginRight: 10,
    borderWidth: 1,
    borderLeftColor: "white",
    borderTopColor: "white",
    marginTop: "auto",
    marginBottom: "auto",
  },
  windowheaderbuttontext: {
    textAlign: "center",
    fontWeight: "bold",
  },
  windowcontent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    marginLeft: "5%",
    marginRight: "5%",
  },
  title: {
    fontSize: 26,
    marginBottom: 20,
  },
  input: {
    marginTop: 10,
    marginBottom: -1,
    width: width / 1.5,
    height: height / 15,
    borderWidth: 3,
    borderRightColor: "white",
    borderBottomColor: "white",
    paddingLeft: 10,
  },
  loginbutton: {
    width: width / 1.5,
    height: height / 15,
    // marginTop: 10,
    borderWidth: 3,
    borderLeftColor: "white",
    borderTopColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  buttontext: {
    textAlign: "center",
    fontSize: 18,
  },
  background: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
