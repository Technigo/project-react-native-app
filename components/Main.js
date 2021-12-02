import React from 'react';
import { useSelector } from 'react-redux';

// components
import Intro from './Intro';
import Cards from './Cards';

const Main = () => {
    const fan = useSelector((store) => store.potter.fan);

    return (
        <>
        {fan ? <Cards /> : <Intro />}
        </>
        )
}
export default Main;

