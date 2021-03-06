import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import '../scss/_landing.scss';
import { Link } from 'react-router-dom';
import bgImage from '../img/bg1.jpg'
const Landing = () => {
    return (
        <div className="landing-banner">
            <img className="landing-banner__image" src={bgImage} />
            <div className="landing-banner__content">
                <h1 className="landing-banner__title">
                    FlowWork lets you work more collaboratively and get more done
                </h1>
                <h4 className="landing-banner__subtitle">
                    FlowWork's boards, lists, and cards enable you to organize and
                    prioritize your projects in a fun, flexible, and rewarding
                    way.
                </h4>
                <Link to="/signup" className="btn">
                    Sign Up For Free
                </Link>
            </div>
        </div>
    );
        
    
}


export default Landing
