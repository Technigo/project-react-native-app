import React, { useState, useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import Chat from "./Chat";
import AddRoom from "./AddRoom";
import Loading from "../components/Loading";
import { auth, db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { useFonts, DMMono_500Medium } from "@expo-google-fonts/dm-mono";

const Drawer = createDrawerNavigator();

const HomeStack = ({ navigation }) => {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "THREADS"), orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (snapshot) =>
      setThreads(
        snapshot.docs.map((doc) => ({
          _id: doc.id,
          name: doc.data().name,
          user: doc.data().user,
          ...doc.data(),
        }))
      )
    );
    if (loading) {
      setLoading(false);
    }
    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const [fontsloaded] = useFonts({
    DMMono_500Medium,
  });

  if (!fontsloaded || loading) {
    return <Loading />;
  }
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          // backgroundColor: "rgba(0, 0, 0, 0)",
          backgroundColor: "#C0C0C0",
          width: 200,
          borderRightWidth: 2,
        },
        drawerType: "front",
        drawerActiveBackgroundColor: "#00007F",
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "black",
        drawerItemStyle: {
          borderWidth: 3,
          borderRightColor: "white",
          borderBottomColor: "white",
        },
        drawerLabelStyle: { fontFamily: "DMMono_500Medium", fontSize: 15 },
        drawerPosition: "left",
        headerLeft: () => <></>,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerTransparent: true,
          headerTitleStyle: { color: "rgba(0, 0, 0, 0)" },
        }}
      />
      <Drawer.Screen
        name="Add Room"
        component={AddRoom}
        options={{
          headerTransparent: true,
          headerTitleStyle: { color: "rgba(0, 0, 0, 0)" },
        }}
      />
      {threads.map((thread) => {
        return (
          <Drawer.Screen
            key={thread._id}
            name={thread.name}
            setParams={thread}
            options={{
              headerTransparent: true,
              headerTitleStyle: { color: "rgba(0, 0, 0, 0)" },
            }}
          >
            {(props) => <Chat key={thread._id} thread={thread} />}
          </Drawer.Screen>
        );
      })}
    </Drawer.Navigator>
  );
};

export default HomeStack;
