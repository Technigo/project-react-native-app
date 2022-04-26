import React, { useCallback, useState, useLayoutEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
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
import { GiftedChat, Bubble } from "react-native-gifted-chat";

const Chat = ({ navigation, thread }) => {
  const [messages, setMessages] = useState([]);
  const threadid = thread._id;

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
          text: doc.data().text,
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

    addDoc(collection(db, "THREADS", threadid, "MESSAGES"), {
      _id,
      createdAt,
      text,
      user,
    });

    // MAYBE ADD .then ???
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

  // GiftedChat Styling

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "black",
          },
        }}
        // TextStyle isn't working? I wanted background of bubble to be transparent
        textStyle={{
          right: {
            color: "#000000",
          },
        }}
      />
    );
  };

  return (
    <GiftedChat
      messages={messages}
      renderUsernameOnMessage={true}
      renderAvatar={null}
      placeholder="Type your message here..."
      onSend={(messages) => onSend(messages)}
      alwaysShowSend
      renderBubble={renderBubble}
      user={{
        _id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
      }}
    />
  );
};

export default Chat;
