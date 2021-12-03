import React from 'react';
import { useSelector } from 'react-redux';

// components
import Intro from './Intro';
import Cards from './Cards';
import Loading from './Loading';


const Main = () => {
    const fan = useSelector((store) => store.potter.fan);
    const loading = useSelector((store) => store.potter.loading);


    return (
        <>
        {fan ? <Cards /> : <Intro />}
        {loading && <Loading />}

        </>
        )
}
export default Main;

