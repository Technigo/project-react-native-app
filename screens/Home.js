import React, { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { AuthContext } from "./AuthProvider";
import { useHeaderHeight } from "@react-navigation/elements";

const Home = ({ navigation }) => {
  const headerHeight = useHeaderHeight();
  const { user, setUser } = useContext(AuthContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: headerHeight,
    },
  });

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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{
            marginRight: 10,
          }}
          onPress={signOutNow}
        >
          <Text>Sign out</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Button
        title="New Chatroom"
        onPress={() => navigation.navigate("Add Room")}
      />
      <Text>Home Screen</Text>
      <Text>All chat rooms will be here</Text>
      <Text>User: {auth.currentUser.displayName}</Text>
    </View>
  );
};

export default Home;
