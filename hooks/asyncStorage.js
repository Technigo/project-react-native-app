import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { exp } from "react-native/Libraries/Animated/src/Easing";
import { set } from "react-native-reanimated";

// Global function to get users
const getUsers = async () => {
  try {
    //console.log(userInfo);
    const users = await AsyncStorage.getItem("@registerUsers");
    const usersToJson = users != null ? JSON.parse(users) : [];
    return usersToJson;
  } catch (error) {}
};
//END

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
//END

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
//END

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
//END

//CustomHook to make the user logout
export const logoutUser = async () => {
  try {
    await AsyncStorage.removeItem("@user");
  } catch (e) {
    // remove error
  }
};
// END

//CustomHook to implement save favorites movies in the profile
export const useSaveFavoriteMedia = () => {
  const [favorites, setFavorites] = useState([]);

  const getFavorites = async (media_id) => {
    try {
      //console.log(userInfo);
      const idList = await AsyncStorage.getItem("@myList");
      const idListToJson = idList != null ? JSON.parse(idList) : [];
      const idIndex = idListToJson.findIndex((id) => id === media_id);
      if (idIndex > -1) {
        idListToJson.splice(idIndex, 1);
        return idListToJson;
      } else {
        return [media_id, ...idListToJson];
      }
    } catch (error) {}
  };

  const storeData = async (media_id) => {
    try {
      const preValues = await getFavorites(media_id);
      //console.log("prev value", preValues);

      const jsonValue = await JSON.stringify(preValues);
      // console.log("json values", jsonValue);

      await AsyncStorage.setItem("@myList", jsonValue);
      setFavorites(preValues);
    } catch (e) {
      // saving error
    }
  };

  return { favorites, storeData };
};
//END

//CustomHook to validate if the movie id exist in the saved list
export const useGetMediaId = (media_id) => {
  const [idFound, setIdFound] = useState(null);

  const getId = async () => {
    try {
      const idValues = await AsyncStorage.getItem("@myList");
      const idValuesToJson = idValues != null ? JSON.parse(idValues) : [];
      const idExist = await idValuesToJson.find(
        (stored_id) => stored_id === media_id
      );
      await setIdFound(idExist);
    } catch (error) {
      console.log("User error", error);
    }
  };
  useEffect(() => {
    getId();
  }, [media_id]);
  return { idFound, getId };
};
