import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useGetUser = () => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const userValue = await AsyncStorage.getItem("@user");
      console.log(userValue);
      const userValueToJson = userValue != null ? JSON.parse(userValue) : null;
      setUser(userValueToJson);
    } catch (error) {
      console.log("User error", error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return { user, getUser };
};

export const useSaveUserInfo = () => {
  const [success, setSuccess] = useState(null);

  const { getUser } = useGetUser();

  const getUsers = async (userInfo) => {
    try {
      console.log(userInfo);
      const users = await AsyncStorage.getItem("@registerUsers");
      const usersToJson = users != null ? JSON.parse(users) : [];
      return [userInfo, ...usersToJson];
    } catch (error) {}
  };

  const storeData = async (userInfo) => {
    try {
      const preValues = await getUsers(userInfo);
      console.log("prev value", preValues);
      const jsonValue = await JSON.stringify(preValues);
      console.log("json values", jsonValue);
      await AsyncStorage.setItem("@registerUsers", jsonValue);

      await AsyncStorage.setItem("@user", JSON.stringify(userInfo));
      setSuccess(true);
      getUser();
    } catch (e) {
      // saving error
    }
  };
  return { success, storeData };
};
