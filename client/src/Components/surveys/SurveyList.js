import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
	componentDidMount() {
		this.props.fetchSurveys();
	}

	// render list of surveys to dashboard
	renderSurveys() {
		return this.props.surveys.reverse().map(survey => {
			return (
				<div key={survey._id} className="card blue-grey darken-1">
	        <div className="card-content white-text">
	          <span className="card-title">{survey.title}</span>
	          <p>{survey.body}</p>
	          <p className="right">
							Sent on: {new Date(survey.dateSent).toLocaleDateString()}
	          </p>
	        </div>
	        <div className="card-action">
	        	<p className="grey-text">Yes: {survey.yes}</p>
	        	<p className="grey-text">No: {survey.no}</p>
	        </div>
	      </div>
			);
		})	
	}


	render() {
		return (
			<div>
				{ this.renderSurveys() }
			</div>
		);
	}
}


function mapStateToProps(state) {
	return { surveys: state.surveys }
}

export default connect(mapStateToProps, { fetchSurveys})(SurveyList);