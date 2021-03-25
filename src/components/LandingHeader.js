import React from 'react';
import { Link } from "react-router-dom";
import '../scss/_landing.scss';
import logo from '../img/logo3.png';
import bgImage from '../img/bg1.jpg'
const LandingHeader = () => {
	return (
		<>
		<header className="landing-header">
			<div className="landing-header__section">
				<img className="landing-header__logo" src={logo} />
			</div>
			<div className="landing-header__section">
				<ul className="landing-header__list">
					<li className="landing-header__li">
						<Link to="/signin" className="btn-transparent">
							Login
						</Link>
					</li>
					<li className="landing-header__li">
						<Link to="/signup" className="btn">
							Sign Up
						</Link>
					</li>
				</ul>
			</div>
		</header>
		<body> 
		<div className="landing-banner">
            <img className="landing-banner__image" src={bgImage} />
            <div className="landing-banner__content">
                <h1 className="landing-banner__title">
                    Flow Work lets you work more collaboratively and get more done
                </h1>
                <h4 className="landing-banner__subtitle">
                    Flow Work's boards, lists, and cards enable you to organize and
                    prioritize your projects in a fun, flexible, and rewarding
                    way.
                </h4>
                <Link to="/signup" className="btn">
                    Sign Up For Free
                </Link>
            </div>
        </div>
		</body>
		</>
	);
}

export default LandingHeader;
