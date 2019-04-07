import { 
	LOAD_MOVIES_SUCCESS, 
	LOAD_MOVIE_BY_ID_SUCCESS,
	RESET_SELECTED_MOVIE,
	INCREASE_OFFSET,
	RESET_OFFSET,
	LOAD_MORE_SUCCESS
} from '../actions/actionTypes';

const initialState = {
	moviesList: [],
	total: 0,
	offset: 0,
	//selectedMovie: null
}

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
		case LOAD_MOVIES_SUCCESS:
			console.log('LOAD_MOVIES_SUCCESS');
      return {
				//...state,
        moviesList: action.payload.data,
				total: action.payload.total,
				offset: action.payload.offset,
			}
      
    /*
		case LOAD_MOVIE_BY_ID_SUCCESS:
			console.log('LOAD_MOVIE_BY_ID_SUCCESS');
			return {
				...state,
				selectedMovie: action.payload
			}

		case RESET_SELECTED_MOVIE:
			console.log('RESET_SELECTED_MOVIE');
			return {
				...state,
				selectedMovie: null
			}*/
				
		case INCREASE_OFFSET:
			console.log('INCREASE_OFFSET');
			return {
				...state,
				offset: state.offset + 9
			}

		case RESET_OFFSET:
			console.log('RESET_OFFSET');
			return {
				...state,
				offset: 0
			}

		case LOAD_MORE_SUCCESS:
			console.log('LOAD_MORE_SUCCESS');
      return {
				//...state,
        moviesList: [...state.moviesList, ...action.payload.data],
				total: action.payload.total,
				offset: action.payload.offset,
			}
			default:
				return state
  }
}
  