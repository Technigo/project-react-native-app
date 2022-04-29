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
    paddingTop: StatusBar.currentHeight,
    margin: 0,
    height: 300,
  },
  title: {
    fontSize: 38,
    color: "#ced7e0",
    paddingBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    margin: 10,
    resizeMode: "contain",
  },
  text: {
    color: "#ced7e0",
    padding: 10,
    fontSize: 14,
  },
  imgtext: {
    color: "#ced7e0",
    fontSize: 24,
    textAlign: "center",
  },
  moreText: {
    color: "#ced7e0",
    fontSize: 14,
  },
  factBox: {
    flex: 1,
    alignItems: "center",
  },
  btnBox: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
  },
  scroll: {
    marginHorizontal: 20,
    backgroundColor: "#1d1124",
  },
  button: {
    padding: 8,
    margin: 10,
    backgroundColor: "#1d1124",
    borderRadius: 10,
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
        message: `More about space`,
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
      <Text style={styles.title}>About Space</Text>
      {fact.map((item) => (
        <View key={item.url} style={styles.factBox}>
          <Image style={styles.image} source={{ uri: item.url }} />
          <Text style={styles.imgtext}>{item.title}</Text>
          <View style={styles.btnBox}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setVisible(!visible);
              }}
            >
              <Text style={styles.moreText}>Learn more..&nbsp;&#8595;</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onShare}>
              <Text style={styles.moreText}>Share</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <ScrollView style={styles.scroll}>
              {visible && <Text style={styles.text}>{item.explanation}</Text>}
            </ScrollView>
          </View>
          <GenerateButton handlePress={newItem}></GenerateButton>
        </View>
      ))}
    </View>
  );
};
