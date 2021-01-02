import React from 'react';
import  phoneImg  from '../images/phone.svg';
import {useGlobalContext} from '../context';

const  Hero = () => {
    const data = useGlobalContext();
    console.log(data);
    return (
        <section className="hero">
            <div className="hero-center">
                <article className="hero-info">
                    <h2>Payments infrastructure for the internet</h2>
                    <p>This is the group for the current and former students 
                        of EEE/CS/CSE/ICT dept from any public or private
                         university in Bangladesh to get al
                    </p>
                    <button className="btn">
                        Start now
                    </button>
                </article>
                <article className="hero-images">
                        <img className="phone-img" src={phoneImg} alt="phone"/>
                </article>
            </div>
        </section>
    )
}
export default Hero;