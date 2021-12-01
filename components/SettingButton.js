import React, { useState } from "react";
import { Text, TouchableHighlight, StyleSheet } from "react-native";
import { Settings } from "./Settings";

const styles = StyleSheet.create({
  SettingButton: {
    height: 50,
    width: 300,
    backgroundColor: "rosybrown",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 35,
  },
  SettingText: {
    textAlign: "center",
    color: "white",
    fontSize: 25,
    marginTop: "auto",
    marginBottom: "auto",
  },
});

export const SettingButton = () => {
  const [currentPage, setCurrentPage] = useState("StepCount");
  return (
    <>
      <TouchableHighlight
        style={styles.SettingButton}
        activeOpacity={0.6}
        underlayColor="rosybrown"
        onPress={() => setCurrentPage("Settings")}
      >
        <Text style={styles.SettingText}>Settings</Text>
      </TouchableHighlight>
      {currentPage === "Settings" && <Settings />}
    </>
  );
};
