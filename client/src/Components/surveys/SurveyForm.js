/*
SurveyForm: shows form for user to input survey info
*/
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';


class SurveyForm extends Component {
	renderFields() {
		return formFields.map(field => {
			return <Field 
					label={field.label}
					type="text"
					name={field.name}
					component={SurveyField}
					key={field.name}
				/>
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
					{ this.renderFields() }
					<button className="teal btn-flat right white-text" type='submit'>
						Next
						<i className="material-icons right">done</i>
					</button>
					<Link to="/surveys" className="red btn-flat left white-text">
						Cancel
					</Link>
				</form>
			</div>
		);
	}
}

// validates the form entries
function validate(values) {
	const errors = {};
	errors.email = validateEmails(values.email || '');
	formFields.forEach(({name}) => {
		if (!values[name]) {
			errors[name] = `You must provide a valid value.`
		}
	});

	return errors;
}

export default reduxForm({ 
	form: 'surveyForm',
	validate,
	destroyOnUnmount: false
})(SurveyForm);