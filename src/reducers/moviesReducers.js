import * as ACTION from '../actions/types';

const initialState = { 
    loading: {},
    movies: {
        results: []
    },
    movie: {},
    cast: {}
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state =  initialState, action ) {
    switch(action.type) {
        case ACTION.RECEIVE_GET_MOVIES: 
        return {
            ...state, 
            movies: action.payload
        }
        case ACTION.RECEIVE_GET_MOVIE:
            return{ 
                ...state,
                movie: action.payload
            }
        case ACTION.RECEIVE_GET_CAST:
            return {
                ...state,
                cast: action.payload
            }
        case ACTION.RECEIVE_GET_SEARCH_MOVIES:
            return { 
                ...state,
                movies: action.payload
            }
      default:
        return state;
    }
}
