import * as types from '../actions/actionTypes';
import initialState from './intialstate';

export  function getMoviesName(state = initialState.moviesName, action) {
    switch (action.type) {
    case types.getMovieNames:
      return action.movienames;
  
    default:
      return state;
  }
  }

  export function getMoviesDetails(state = initialState.moviedetails, action) {
    switch (action.type) {
    case types.getMovieDetails:
      return action.movieDetails;
  
    default:
      return state;
  }
  }