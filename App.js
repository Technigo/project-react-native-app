import React, { useState, useEffect } from 'react';

import Question from './components/Question';
import Answer from './components/Answer';
import { ShakeEventExpo } from './components/ShakeEventExpo';

const App = () => {
  const [firstView, setFirstView] = useState(true);

  const shakePhone = () => {
    setFirstView(false);
  };

  useEffect(() => {
    ShakeEventExpo.addListener(() => {
      shakePhone();
    });

    return () => {
      ShakeEventExpo.removeListener();
    };
  }, []);

  return (
    <>
      {firstView && <Question />}
      {!firstView && <Answer onStartAgain={() => setFirstView(true)} />}
    </>
  );
};

export default App;
