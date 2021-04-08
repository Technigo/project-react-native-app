import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Global function to get users
const getUsers = async () => {
  try {
    //console.log(userInfo);
    const users = await AsyncStorage.getItem("@registerUsers");
    const usersToJson = users != null ? JSON.parse(users) : [];
    return usersToJson;
  } catch (error) {}
};

// CustomHook to check login user
export const useGetUser = () => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const userValue = await AsyncStorage.getItem("@user");
      //console.log(userValue);

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

// CustomHook to check register users
export const useSaveUserInfo = () => {
  const [success, setSuccess] = useState(null);

  const getUsers = async (userInfo) => {
    try {
      //console.log(userInfo);
      const users = await AsyncStorage.getItem("@registerUsers");
      const usersToJson = users != null ? JSON.parse(users) : [];
      return [userInfo, ...usersToJson];
    } catch (error) {}
  };

  const storeData = async (userInfo) => {
    try {
      const preValues = await getUsers(userInfo);
      //console.log("prev value", preValues);

      const jsonValue = await JSON.stringify(preValues);
      // console.log("json values", jsonValue);

      await AsyncStorage.setItem("@registerUsers", jsonValue);
      await AsyncStorage.setItem("@user", JSON.stringify(userInfo));
      setSuccess(true);
    } catch (e) {
      // saving error
    }
  };
  return { success, storeData };
};

//CustomHook to validate if the user exists.
export const loginUser = async (loginInfo) => {
  const currentUsers = await getUsers();
  console.log(currentUsers);
  const userFound = currentUsers.find(
    (user) =>
      user.userName === loginInfo.userName &&
      user.password === loginInfo.password
  );

  if (userFound) {
    try {
      await AsyncStorage.setItem("@user", JSON.stringify(loginInfo));
      return true;
    } catch (error) {
      return false;
    }
  } else {
    return false;
  }
};

export const logoutUser = async () => {
  try {
    await AsyncStorage.removeItem("@user");
  } catch (e) {
    // remove error
  }
};
