import { LOAD_MOVIES_SUCCESS } from '../actions/actionTypes';

const initialState = {
	moviesList: [],
	total: 0,
	offset: 0,
}

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
		case LOAD_MOVIES_SUCCESS:
			console.log('LOAD_MOVIES_SUCCESS');
			console.log(state);
			//console.log(action.payload);
      return {
        moviesList: action.payload.data,
				total: action.payload.total,
				offset: action.payload.offset,
			}
      
      default:
        return state
  }
}
  