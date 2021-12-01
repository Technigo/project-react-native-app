import React from 'react';
import { useSelector } from 'react-redux';

// components
import Intro from './Intro';
import Cards from './Cards';

const Main = () => {
    const intro = useSelector((store) => store.potter.intro);

    return (
        <>
        {intro ? <Intro /> : <Cards />}
        </>
        )
}
export default Main;

