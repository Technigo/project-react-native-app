import React, { useState, useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
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

  if (loading) {
    return <Loading />;
  }
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ headerTransparent: true }}
      />
      <Drawer.Screen
        name="Add Room"
        component={AddRoom}
        options={{ headerTransparent: true }}
      />
      {threads.map((thread) => {
        return (
          <Drawer.Screen key={thread._id} name={thread.name} setParams={thread}>
            {(props) => <Chat thread={thread} />}
          </Drawer.Screen>
        );
      })}
    </Drawer.Navigator>
  );
};

export default HomeStack;
