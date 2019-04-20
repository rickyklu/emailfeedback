import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Dashboard = () => {
	return (
		<h2>Dashboard</h2>
	);
}

const Surveynew = () => {
	return (
		<h2>Surveynew</h2>
	);
}

class App extends Component {
	componentDidMount() {
			this.props.fetchUser();
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<div className="container">
						<Header />
						<Route exact={true} path="/" component={Landing}/>
						<Route exact path="/surveys" component={Dashboard}/>
						<Route path="/surveys/new" component={Surveynew}/>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
