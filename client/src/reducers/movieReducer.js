import { 
	LOAD_MOVIES_SUCCESS, 
	INCREASE_OFFSET,
	RESET_OFFSET,
	LOAD_MORE_SUCCESS
} from '../actions/actionTypes';

const initialState = {
	moviesList: [],
	total: 0,
	offset: 0,
}

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
		case LOAD_MOVIES_SUCCESS:
      return {
        moviesList: action.payload.data,
				total: action.payload.total,
				offset: action.payload.offset,
			}
				
		case INCREASE_OFFSET:
			return {
				...state,
				offset: state.offset + 9
			}

		case RESET_OFFSET:
			return {
				...state,
				offset: 0
			}

		case LOAD_MORE_SUCCESS:
      return {
        moviesList: [...state.moviesList, ...action.payload.data],
				total: action.payload.total,
				offset: action.payload.offset,
			}
			default:
				return state
  }
}
  