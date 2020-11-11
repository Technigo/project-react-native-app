import React from "react";
import moment from "moment";
import { View, Text } from "react-native";

const Time = () => {
  return <Text>{moment().format("LLLL")}</Text>;
};
export default Time;
