import React, { useState, useEffect, useRef } from "react";

import useDeviceMotion from "../hooks/useDeviceMotion";
import Share from "./Share";
import RotateClock from "./icons/RotateClock";
import RotateCounterClock from "./icons/RotateCounterClock";
import Highlight from "./Highlight";
import CatImage from "./CatImage";

import {
  Container,
  IndicatorContainer,
  Indicator,
  Title,
} from "../styles/Style";

export default function SensorCompnent({ cats }) {
  const [data, setData] = useState({ orientation: 0 });
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);

  const { _subscribe, _unsubscribe } = useDeviceMotion(setData);

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  /** orientation */
  useEffect(() => {
    const orientation = data.orientation;
    if (orientation === 90) {
      const index = count === cats.length - 1 ? 0 : count + 1;
      return setCount(index);
    }

    if (orientation === -90) {
      const index = count === 0 ? cats.length - 1 : count - 1;
      return setCount(index);
    }
  }, [data]);

  return (
    <Container ref={containerRef}>
      <CatImage uri={cats[count].url} />

      <IndicatorContainer>
        <Indicator>
          <RotateCounterClock />
          <Title>Prev</Title>
        </Indicator>
        <Highlight message="Rotate Device" />
        <Indicator>
          <RotateClock />
          <Title>Next</Title>
        </Indicator>
      </IndicatorContainer>
      <Share containerRef={containerRef} />
    </Container>
  );
}
