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
import { GiftedChat, Bubble, Time, Day } from "react-native-gifted-chat";
import background from "../assets/image.jpg";
const { width, height } = Dimensions.get("screen");
import { useNavigation } from "@react-navigation/native";

const Chat = ({ thread }) => {
  const [messages, setMessages] = useState([]);
  const threadid = thread._id;
  const navigation = useNavigation();

  useLayoutEffect(() => {
    // navigation.setOptions({
    //   headerLeft: () => (
    //     <View style={{ marginLeft: 20 }}>
    //       <Avatar
    //         rounded
    //         source={{
    //           uri: auth?.currentUser?.photoURL,
    //         }}
    //       />
    //     </View>
    //   ),
    //   headerRight: () => (
    //     <TouchableOpacity
    //       style={{
    //         marginRight: 10,
    //       }}
    //       onPress={signOutNow}
    //     >
    //       <Text>logout</Text>
    //     </TouchableOpacity>
    //   ),
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
        wrapperStyle={{
          left: {
            backgroundColor: "transparent",
          },
          right: {
            backgroundColor: "transparent",
          },
        }}
        // TextStyle isn't working? I wanted background of bubble to be transparent
        textStyle={{
          right: {
            color: "black",
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
          },
          right: {
            color: "black",
          },
        }}
      />
    );
  };

  const renderDay = (props) => {
    return (
      <Day
        {...props}
        textStyle={{ color: "black", fontWeight: "bold", fontSize: 13 }}
      />
    );
  };

  return (
    // <View>
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.windowcontainer}>
        <View style={styles.windowheader}>
          <Text style={styles.windowheadertext}>{thread.name}</Text>
          <TouchableOpacity
            style={styles.windowheaderbutton}
            // NAVIGATION TO HOME ISN'T WORKING???
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.windowheaderbuttontext}>_</Text>
          </TouchableOpacity>
        </View>
        <GiftedChat
          messages={messages}
          // renderUsernameOnMessage={true}
          renderAvatar={null}
          placeholder="Type your message here..."
          onSend={(messages) => onSend(messages)}
          alwaysShowSend
          renderBubble={renderBubble}
          renderTime={renderTime}
          renderUsername={renderBubble}
          renderDay={renderDay}
          multiline={false}
          bottomOffset={0}
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
  // windowheaderbutton1: {
  //   height: 18,
  //   width: 18,
  //   backgroundColor: "#C0C0C0",
  //   marginLeft: "auto",
  //   // marginRight: "2%",
  //   marginRight: "0%",
  //   borderWidth: 1,
  //   borderLeftColor: "white",
  //   borderTopColor: "white",
  //   marginTop: "auto",
  //   marginBottom: "auto",
  // },
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
    backgroundColor: "#007F7F",
    alignItems: "center",
    justifyContent: "center",
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
