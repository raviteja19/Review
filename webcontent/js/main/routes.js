import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Movies from './jsx/movies/movies.jsx';
import Restuarants from './jsx/restuarants.jsx';
import Stays from './jsx/stays.jsx';
import Gadgets from './jsx/gadgets.jsx';
import App from './jsx/App.jsx';
import MoviesReview from './jsx/movies/movieReview.jsx';

export default (
  <Switch>
    <Route exact path="/" component={App}/>
    <Route path="/movies" component={Movies}/>
    <Route path="/moviereview/:name" component={MoviesReview}/>
    <Route path="/stays" component={Stays}/>
    <Route path="/gadgets" component={Gadgets}/>
    <Route path="/restuarants" component={Restuarants}/>
    </Switch>
);