import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user')
	dispatch({ type: FETCH_USER, payload: res.data });
}

// handles stripe token to send to stripe API
export const handleToken = (token) => async dispatch => {
	// send stripe token to be authenticated
	const res = await axios.post('/api/stripe', token);
	dispatch({
		type: FETCH_USER,
		payload: res.data
	});
}

// submits survey, posts survey data to MongoDB, then redirect to survey's page
export const submitSurvey = (values, history) => async dispatch => {
	const res = await axios.post('/api/surveys', values);
	// navigate back to 'surveys' route upon completion
	history.push('/surveys');
	dispatch({
		type: FETCH_USER,
		payload: res.data
	});
}

// fetch surveys to be used to display on dashboard
export const fetchSurveys = () => async dispatch => {
	const res = await axios.get('/api/surveys');
	dispatch({
		type: FETCH_SURVEYS,
		payload: res.data
	});
}