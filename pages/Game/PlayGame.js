import React, { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";
import styled from "styled-components/native";
import "react-native-gesture-handler";

import { BattleDisplay } from "../../components/Game/BattleDisplay";

// Global functions
const isShaking = (data) => {
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
  return totalForce > 1.78;
};

//global const
const ImageArray = [
  require("../../assets/AttackIcons/lightning.png"),
  require("../../assets/AttackIcons/spiderweb.png"),
  require("../../assets/AttackIcons/tornado.png"),
  require("../../assets/AttackIcons/fist.png"),
];

export const PlayGame = ({ route, navigation }) => {
  Accelerometer.setUpdateInterval(400);
 
  //local consts 
  const { hero } = route.params;
  const { villain } = route.params;

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);
  const [hit, setHit] = useState();
  const [damage, setDamage] = useState();
  const [heroHP, setHeroHP] = useState();
  const [villainHP, setVillainHP] = useState();

  //local functions
  const setInitialValues = () => {
    if (!villainHP) {
      setVillainHP(villain.hp);
    }
    if (!heroHP) {
      setHeroHP(hero.hp);
    }
  };

  const winOrLose = () => {
    if (villainHP <= 0) {
      navigation.push("WinLoseScreen", {
        hero: hero,
        villain: villain,
        winner: true,
        navigation: navigation,
      });
    }
    if (heroHP <= 0) {
      navigation.push("WinLoseScreen", {
        hero: hero,
        villain: villain,
        winner: false,
        navigation: navigation,
      });
    }
  };

  const handleAttack = () => {
    if (isShaking(data)) {
      setHit(Math.floor(Math.random() * hero.dmg));
      setDamage(Math.floor(Math.random() * villain.dmg));
      setHeroHP(heroHP - damage);
      setVillainHP(villainHP - hit);
    }
  };

  const printAttack = () => {
    if (!hit) {
      return <ShakeData>Shake to attack!</ShakeData>;
    } else if (hit > 0) {
      return <ShakeData>Your did {hit} damage!</ShakeData>;
    }
    return <ShakeData> MISS </ShakeData>;
  };

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  //useEffects
  useEffect(() => {
    _subscribe();

    return () => _unsubscribe();
  }, []);

  useEffect(() => {
    setInitialValues();
    winOrLose();
    handleAttack();
  }, [isShaking(data)]);


//render
  return (<>
    <Scroll>
      <BattleDisplay char={villain} HP={villainHP} alignment="villain" />
      <ShakeView>
        {isShaking(data) ? (
          <ShakeAlert>
            <AttackImage source={ImageArray[hero.number]}></AttackImage>
          </ShakeAlert>
        ) : (
          printAttack()
        )}
      </ShakeView>
      <BattleDisplay char={hero} HP={heroHP} alignment="hero" />
    </Scroll></>
  );
};


//styled components
const Scroll = styled.SafeAreaView`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ShakeView = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ShakeAlert = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ShakeData = styled.Text`
  font-weight: bold;
  color: black;
`;

const AttackImage = styled.Image`
  width: 100px;
  height: 100px;
`;

