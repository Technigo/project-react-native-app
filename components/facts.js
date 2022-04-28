import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Share,
} from "react-native";
import { GenerateButton } from "./generatebutton";

const styles = StyleSheet.create({
  wrapping: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    height: 200,
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    color: "grey",
  },

  image: {
    width: 300,
    height: 300,
    margin: 10,
  },

  text: {
    color: "white",
    padding: 10,
  },

  imgtext: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },

  moreText: {
    color: "#ced7e0",
  },

  factBox: {
    flex: 1,
    alignItems: "center",
  },

  scroll: {
    // backgroundColor: "#001736",
    marginHorizontal: 20,
    height: 300,
  },

  button: {
    padding: 8,
    margin: 10,
    backgroundColor: "transparent",
    borderRadius: 2,
  },
});

export const Facts = () => {
  const [fact, setFact] = useState([]);
  const [visible, setVisible] = useState();

  useEffect(() => {
    newItem();
  }, []);

  const newItem = () => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=luBC7hHhG19fUe5tSWnL0sTNWq7NhgCjFcFpqigI&count=1"
    )
      .then((response) => response.json())
      .then((data) => setFact(data));
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.wrapping}>
      {/* <Text style={styles.title}>Best of Space!</Text> */}
      {fact.map((item) => (
        <View key={item.url} style={styles.factBox}>
          <Image style={styles.image} source={{ uri: item.url }} />
          <Text style={styles.imgtext}>{item.title}</Text>
          <TouchableOpacity style={styles.button} onPress={onShare}>
            <Text style={styles.moreText}>Dela&nbsp;&#8595;</Text>
          </TouchableOpacity>
          <View style={styles.container}>
            <ScrollView style={styles.scroll}>
              {visible && <Text style={styles.text}>{item.explanation}</Text>}
            </ScrollView>
          </View>
          <GenerateButton handlePress={newItem}></GenerateButton>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setVisible(!visible);
            }}
          >
            <Text style={styles.moreText}>Learn more..&nbsp;&#8595;</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};
