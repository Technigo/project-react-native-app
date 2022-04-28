import React, { useContext, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Dimensions,
  ImageBackground,
} from "react-native";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { AuthContext } from "./AuthProvider";
import { useHeaderHeight } from "@react-navigation/elements";
import background from "../assets/image.jpg";

const { width, height } = Dimensions.get("screen");

const Home = ({ navigation }) => {
  const { user, setUser } = useContext(AuthContext);

  const signOutNow = (e) => {
    console.log(e);
    signOut(auth)
      .then(() => {
        setUser(null);
        // navigation.replace("Login");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <TouchableOpacity
  //         style={styles.windowheaderbutton}
  //         onPress={signOutNow}
  //       >
  //         <Text style={styles.windowheaderbuttontext}>X</Text>
  //       </TouchableOpacity>
  //     ),
  //   });
  // }, [navigation]);

  return (
    <>
      {/* <View style={styles.container}>
      <Button
        title="New Chatroom"
        onPress={() => navigation.navigate("Add Room")}
      />
      <Text>Home Screen</Text>
      <Text>User: {user}</Text>
    </View> */}

      <View style={styles.backgroundcontainer}>
        <ImageBackground
          source={background}
          resizeMode="cover"
          style={styles.background}
        >
          <View style={styles.windowcontainer}>
            <View style={styles.windowheader}>
              <Text style={styles.windowheadertext}>{user} online!</Text>
              <TouchableOpacity
                style={styles.windowheaderbutton}
                onPress={signOutNow}
              >
                <Text style={styles.windowheaderbuttontext}>X</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.windowcontent}>
              <Text style={styles.title}>Hi {user}!</Text>
              <View>
                <Text style={styles.leftalign}>
                  &nbsp;&nbsp;&nbsp;._________________.
                </Text>

                <Text style={styles.leftalign}>
                  &nbsp;&nbsp;&nbsp;|.---------------.|
                </Text>
                <Text style={styles.leftalign}>
                  &nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||
                </Text>
                <Text style={styles.leftalign}>
                  &nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;-._
                  .-.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||
                </Text>
                <Text style={styles.leftalign}>
                  &nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;-._| |
                  |&nbsp;&nbsp;&nbsp;&nbsp;||
                </Text>
                <Text style={styles.leftalign}>
                  &nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;-._|"|"|&nbsp;&nbsp;&nbsp;&nbsp;||
                </Text>
                <Text style={styles.leftalign}>
                  &nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;-._|.-.|&nbsp;&nbsp;&nbsp;&nbsp;||
                </Text>
                <Text style={styles.leftalign}>
                  &nbsp;&nbsp;&nbsp;||_______________||
                </Text>
                <Text style={styles.leftalign}>
                  &nbsp;&nbsp;&nbsp;/.-.-.-.-.-.-.-.-.\
                </Text>
                <Text style={styles.leftalign}>
                  &nbsp;&nbsp;/.-.-.-.-.-.-.-.-.-.\
                </Text>
                <Text style={styles.leftalign}>
                  &nbsp;/.-.-.-.-.-.-.-.-.-.-.\
                </Text>
                <Text style={styles.leftalign}>/______/__________\___o_\ </Text>
                <Text style={styles.leftalign}>\_______________________/</Text>
              </View>

              <Text>
                Create a new chatroom below or use the navigation in the upper
                left to check out the existing chatrooms!
              </Text>
              <Text>Close the application to sign out.</Text>
              <TouchableOpacity
                style={styles.loginbutton}
                onPress={() => navigation.navigate("Add Room")}
              >
                <Text style={styles.buttontext}>New Chatroom</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: headerHeight,
    backgroundColor: "#C0C0C0",
    borderLeftColor: "white",
    borderWidth: 5,
    borderRightColor: "black",
    borderTopWidth: 0,
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
  subtitle: {},
  leftalign: {
    textAlign: "left",
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
