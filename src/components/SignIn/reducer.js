import React from 'react';
const initState = {
	data: null
};

export default (state = initState, action) => {
	switch (action.type) {
		case 'SETUSER':
			return {
				data:action.data
			}
		default:
			return state;
	}
};