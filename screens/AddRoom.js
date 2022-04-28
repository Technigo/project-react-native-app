import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Input } from "react-native-elements";
import Loading from "../components/Loading";
import { db, auth } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import {
  useFonts,
  DMMono_300Light,
  DMMono_400Regular,
  DMMono_500Medium,
} from "@expo-google-fonts/dm-mono";
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

  const [loaded] = useFonts({
    DMMono_300Light,
    DMMono_400Regular,
    DMMono_500Medium,
  });

  if (!loaded) {
    return <Loading />;
  }
  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.windowcontainer}>
        <View style={styles.windowheader}>
          <TouchableOpacity
            style={styles.windowheaderbutton1}
            onPress={() => navigation.toggleDrawer()}
          >
            <Text style={styles.windowheaderbuttontext}>➤</Text>
          </TouchableOpacity>
          <Text style={styles.windowheadertext}>Create a new chatroom!</Text>
          <TouchableOpacity
            style={styles.windowheaderbutton}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.windowheaderbuttontext}>𑁋</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.windowcontent}>
          <Text style={styles.title}>Create a new room!</Text>
          <Input
            labelName="Room Name"
            value={roomName}
            onChangeText={(text) => setRoomName(text)}
            style={styles.input}
            maxLength={20}
            placeholder="Name your new room..."
            // clearButtonMode="while-editing"
          />
          {error.length > 0 && <Text style={styles.error}>{error}</Text>}
          <TouchableOpacity style={styles.loginbutton} onPress={createRoom}>
            <Text style={styles.buttontext}>Add room</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default AddRoom;

const styles = StyleSheet.create({
  windowcontainer: {
    borderWidth: 5,
    width: width / 1.25,
    height: height / 1.3,
    borderLeftColor: "white",
    borderTopColor: "white",
    backgroundColor: "#C0C0C0",
  },
  windowheader: {
    backgroundColor: "#00007F",
    height: 30,
    width: "97%",
    marginLeft: "1.5%",
    marginRight: "1.5%",
    marginTop: "1.5%",
    flexDirection: "row",
  },
  windowheadertext: {
    color: "white",
    marginLeft: 10,
    fontSize: 17,
    marginTop: "auto",
    marginBottom: "auto",
    fontFamily: "DMMono_300Light",
  },
  windowheaderbutton1: {
    height: 18,
    width: 18,
    backgroundColor: "#C0C0C0",
    marginLeft: 5,
    borderWidth: 1,
    borderLeftColor: "white",
    borderTopColor: "white",
    marginTop: "auto",
    marginBottom: "auto",
  },
  windowheaderbutton: {
    height: 18,
    width: 18,
    backgroundColor: "#C0C0C0",
    marginLeft: "auto",
    marginRight: 5,
    borderWidth: 1,
    borderLeftColor: "white",
    borderTopColor: "white",
    marginTop: "auto",
    marginBottom: "auto",
  },
  windowheaderbuttontext: {
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "DMMono_500Medium",
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
    fontFamily: "DMMono_400Regular",
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
    fontFamily: "DMMono_400Regular",
  },
  loginbutton: {
    width: width / 1.5,
    height: height / 15,
    borderWidth: 3,
    borderLeftColor: "white",
    borderTopColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  buttontext: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "DMMono_400Regular",
  },
  error: {
    fontFamily: "DMMono_400Regular",
    textAlign: "center",
    marginBottom: 20,
  },
  background: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007F7F",
  },
});
