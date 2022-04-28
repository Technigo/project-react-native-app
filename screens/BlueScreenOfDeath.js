import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("screen");

const BlueScreen = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.windows}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.windowstext}>Windows</Text>
        </TouchableOpacity>
        <Text style={styles.leftalign}>An error has occured. To continue:</Text>
        <Text style={styles.leftalign}>
          Press Enter to return to Windows, or
        </Text>
        <Text style={styles.leftalign}>
          Press CTRL+ALT+DEL to restart your computer. If you do this, you will
          lose any unsaved information in all open applications.
        </Text>
        <Text style={styles.leftalign}>Error: 0E : 16F : BFF9B3D4</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.centeralign}>Press any key to continue _</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BlueScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0000AA",
    width: width,
    height: height,
  },
  container: {
    width: width / 1.25,
  },
  windows: {
    color: "#0000AA",
    backgroundColor: "#AAAAAA",
    width: "20%",
    alignSelf: "center",
    marginBottom: 10,
  },
  windowstext: {
    textAlign: "center",
  },
  leftalign: {
    textAlign: "left",
    color: "#AAAAAA",
    marginBottom: 10,
  },
  centeralign: {
    textAlign: "center",
    color: "#AAAAAA",
  },
});
