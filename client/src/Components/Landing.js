import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from '../images/img1.jpeg';
import imag2 from '../images/survey.jpg';

class Landing extends Component {
	render() {
		const style = {
			height: "100vh"
		}

		const heroImageStyle = {
			width: "250px",
	    position: "absolute",
	    right: "220px",
	    top: "200px"
		}

		const heroButtonsStyle = {
			marginTop: "70px"
		}



		return (
			<div id="landingHero" style={style} >
				<p>Simple to use. Easy to understand. Get stats.</p>
				<h2>Collect easy,</h2><br/>
				<h2>to understand stats</h2><br/>
				<h2>from your users.</h2><br/>
				<div id="landingHeroImages">
					<img style={heroImageStyle} src={imag2} alt="" />
				</div>
				<div id="landingHeroButtons" style={heroButtonsStyle}>
					Try it <a href='/api/login' className='btn'>now!</a>
				</div>
			</div>
		);
	}
}

export default Landing;