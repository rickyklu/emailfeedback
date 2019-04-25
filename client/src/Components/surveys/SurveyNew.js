/*
SurveyNew: renders components SurveyForm and SurveyReview
*/
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showReview: false		
		}
		this.renderContent = this.renderContent.bind(this);
	}

	// function: upon toggling state, show/hide the SurveyReview page
	renderContent() {
		if (this.state.showReview) {
			return (
				<SurveyFormReview
					onCancel={() => this.setState({ showReview: false })}
				/>
			);
		}
		return (
			<SurveyForm
				onSurveySubmit={() => this.setState({ showReview: true })}
			/>
		);
	}

	render() {
		return (
			<div>
				{ this.renderContent() }
			</div>
		);
	}
}

// upon unmounting SurveyNew component (clicking cancel), dump form values 
//  (no destroyOnUnmount; see SurveyForm component for other case)
export default reduxForm({ form: 'surveyForm' })(SurveyNew);