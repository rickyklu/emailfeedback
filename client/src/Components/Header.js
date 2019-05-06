import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
	renderContent(){
		switch(this.props.auth) {
			case null:
				return;
			case false:
				return(
					<li><a href='/auth/google'>Login with Google</a></li>
				);
			default:
				return (
					[
						<li key='1'><Payments className="addCredits" /></li>,
						<li key='4'><a href='/surveys'>Dashboard</a></li>,
						<li key='3' style={{margin: '0 10px'}}>Credits: {this.props.auth.credits}</li>,
						<li key='2'><a href='/api/logout'>Logout</a></li>
					]
				);
		}
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<Link 
						to={ this.props.auth ? '/surveys' : '/' } 
						className="left brand-logo"
						style={{ "marginLeft": "10px"}}
					>
						Email Feedback
						<i style={{"fontSize" : "2.3rem"}} className="right material-icons ">contact_mail</i>
					</Link>
					<ul className="right">
						{ this.renderContent() }
					</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }){
	return {
		auth 
	}
}
export default connect(mapStateToProps)(Header);
