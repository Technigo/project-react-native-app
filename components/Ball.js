import * as React from "react";
import Svg, { Defs, RadialGradient, LinearGradient, Stop, Circle } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

export const BallSvg = (props) => (
  <Svg width={300} height={300} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsBx="https://boxy-svg.com" {...props}>
    <Defs>
      <RadialGradient
        id="b"
        gradientUnits="userSpaceOnUse"
        cx={290.585}
        cy={122.155}
        r={164.549}
        gradientTransform="matrix(.0141 -1.07379 .98768 .01298 -10.7 444.197)"
      >
        <Stop
          offset={0}
          style={{
            stopColor: "#fff",
          }}
        />
        <Stop
          offset={0.595}
          style={{
            stopColor: "#a9a9a9",
          }}
        />
        <Stop
          offset={0.941}
          style={{
            stopColor: "#686868",
          }}
        />
        <Stop
          offset={1}
          style={{
            stopColor: "#686868",
          }}
        />
      </RadialGradient>
      <LinearGradient id="a"></LinearGradient>
    </Defs>
    <Circle
      style={{
        paintOrder: "fill",
        fill: "url(#b)",
      }}
      cx={150.0}
      cy={150.0}
      r={150}
    />
  </Svg>
);
