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
				<div key={survey.id} class="card blue-grey darken-1">
	        <div class="card-content white-text">
	          <span class="card-title">{survey.title}</span>
	          <p>{survey.body}</p>
	          <p className="right">
							SenT on: {new Date(survey.dateSent).toLocaleDateString()}
	          </p>
	        </div>
	        <div class="card-action">
	          <a href="#">Yes: {survey.yes}</a>
	          <a href="#">No: {survey.no}</a>
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