import { LOAD_MOVIE_BY_ID_SUCCESS, RESET_SELECTED_MOVIE } from '../actions/actionTypes';

const initialState = {
	data: null
}

export default function selectedMovieReducer(state = initialState, action) {
  switch (action.type) {

		case LOAD_MOVIE_BY_ID_SUCCESS:
			return {
				data: action.payload
			}

		case RESET_SELECTED_MOVIE:
			return {
				data: null
			}

		
		default:
			return state
  }
}
  