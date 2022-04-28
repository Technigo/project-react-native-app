import React, {
  useCallback,
  useState,
  useLayoutEffect,
  useContext,
} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";
import { Avatar } from "react-native-elements";
import { auth, db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  onSnapshot,
  setDoc,
  updateDoc,
  increment,
  FieldPath,
  doc,
} from "firebase/firestore";
import {
  GiftedChat,
  Bubble,
  Time,
  Day,
  InputToolbar,
  Send,
} from "react-native-gifted-chat";
import background from "../assets/image.jpg";
import { useNavigation } from "@react-navigation/native";
import {
  useFonts,
  DMMono_300Light,
  DMMono_400Regular,
  DMMono_500Medium,
} from "@expo-google-fonts/dm-mono";

import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

const { width, height } = Dimensions.get("screen");

const Chat = ({ thread }) => {
  const [messages, setMessages] = useState([]);
  const threadid = thread._id;
  const navigation = useNavigation();

  useLayoutEffect(() => {
    // navigation.setOptions({
    //   headerLeft: () => (
    //     <View style={{ marginLeft: 30, marginTop: 50 }}>
    //       <Image source={next} style={{ height: 20, width: 20 }} />
    //     </View>
    //   ),
    //   //   headerRight: () => (
    //   //     <TouchableOpacity
    //   //       style={{
    //   //         marginRight: 10,
    //   //       }}
    //   //       onPress={signOutNow}
    //   //     >
    //   //       <Text>logout</Text>
    //   //     </TouchableOpacity>
    //   //   ),
    // });

    const q = query(
      collection(db, "THREADS", threadid, "MESSAGES"),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) =>
      setMessages(
        snapshot.docs.map((doc) => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().message,
          user: doc.data().user,
        }))
      )
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const onSend = useCallback((messages = []) => {
    const { _id, createdAt, text, user } = messages[0];
    const message = `[${user.name}] - ${text}`;

    addDoc(collection(db, "THREADS", threadid, "MESSAGES"), {
      _id,
      createdAt,
      message,
      user,
    });

    // MAYBE ADD .then ??? or do a callback function?
    // setDoc(
    //   collection(db, "THREADS", threadid),
    //   {
    //     lastUpdated: Date.now(),
    //     latestMessage: text,
    //     numberOfMessages: increment(1),
    //   },
    //   { merge: true }
    // );
  }, []);

  Keyboard.dismiss();

  // GiftedChat Styling
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        // position={"left"}
        wrapperStyle={{
          left: {
            backgroundColor: "transparent",
          },
          right: {
            backgroundColor: "transparent",
          },
        }}
        textStyle={{
          left: {
            color: "black",
            fontFamily: "DMSans_400Regular",
            fontSize: 14,
            marginBottom: 2,
          },
          right: {
            color: "black",
            fontFamily: "DMSans_400Regular",
            fontSize: 14,
            marginBottom: 2,
          },
        }}
        usernameStyle={{
          color: "black",
        }}
      />
    );
  };
  const renderTime = (props) => {
    return (
      <Time
        {...props}
        timeTextStyle={{
          left: {
            color: "black",
            fontFamily: "DMMono_300Light",
          },
          right: {
            color: "black",
            fontFamily: "DMMono_300Light",
          },
        }}
      />
    );
  };
  const renderDay = (props) => {
    return (
      <Day
        {...props}
        textStyle={{
          color: "black",
          fontFamily: "DMMono_500Medium",
          fontSize: 14,
        }}
      />
    );
  };
  const renderInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          borderWidth: 2,
          borderTopWidth: 2,
          borderTopColor: "black",
          borderRightColor: "white",
          borderBottomColor: "white",
          backgroundColor: "#CDCDCD",
          marginLeft: "1.5%",
          marginRight: "1.5%",
          marginBottom: "1.5%",
        }}
      />
    );
  };
  const renderSend = (props) => {
    return (
      <Send
        {...props}
        containerStyle={{
          borderWidth: 0,
        }}
      >
        <Text style={styles.sendbutton}>➥</Text>
      </Send>
    );
  };

  const [loaded] = useFonts({
    DMMono_300Light,
    DMMono_400Regular,
    DMMono_500Medium,
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  if (!loaded) {
    return null;
  }
  return (
    // <View>
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
          <Text style={styles.windowheadertext}>{thread.name}</Text>
          <TouchableOpacity
            style={styles.windowheaderbutton}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.windowheaderbuttontext}>𑁋</Text>
          </TouchableOpacity>
        </View>
        <GiftedChat
          messages={messages}
          // renderUsernameOnMessage={true}
          renderAvatar={null}
          placeholder=""
          onSend={(messages) => onSend(messages)}
          alwaysShowSend
          renderBubble={renderBubble}
          renderTime={renderTime}
          renderUsername={renderBubble}
          renderDay={renderDay}
          multiline={false}
          bottomOffset={0}
          // isKeyboardInternallyHandled={false}
          renderInputToolbar={renderInputToolbar}
          renderSend={renderSend}
          textInputStyle={{
            fontFamily: "DMSans_400Regular",
          }}
          textInputProps={{
            marginTop: 5,
            marginBottom: 1,
          }}
          placeholderTextColor="#6e6e6e"
          listViewProps={{ marginBottom: "1.5%" }}
          user={{
            _id: auth.currentUser.uid,
            name: auth.currentUser.displayName,
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default Chat;

const styles = StyleSheet.create({
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
    height: height / 1.3,
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
  sendbutton: {
    marginBottom: 6,
    marginRight: 5,
    fontSize: 30,
  },
  background: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    backgroundColor: "#007F7F",
    alignItems: "center",
    justifyContent: "center",
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
