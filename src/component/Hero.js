import React from 'react';
import { useGlobalContext } from '../context';
import phoneImg from '../images/phone.svg';

const  Hero = () => {
    const { closeSubmenu } = useGlobalContext();
   
    return (
        <section className="hero" onMouseOver={ closeSubmenu}>
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