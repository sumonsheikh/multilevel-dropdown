import React from 'react';
import {useGlobalContext} from '../context';

const  Hero = () => {
    const data = useGlobalContext();
    console.log(data);
    return (
        <div>
            <h2>Hero component</h2>
        </div>
    )
}
export default Hero;