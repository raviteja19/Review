import * as types from './actionTypes';

  export function Login(loginform) {
    return {type: types.Login, loginform};
  }
  
  export function Register(registerform) {
    return {type: types.Register, registerform};
  }

  export function CheckUser(status) {
    return {type: types.CheckUser, status};
  }
  export function forgotpassword(data) {
    return {type: types.forgotPassword, data};
  }

  export function getMovieNames(movienames) {
    return {type: types.getMovieNames, movienames};
  }

  export function getMovieDetails(movieDetails)
  {
    return {type:types.getMovieDetails,movieDetails};
  }

  export function registerAjaxCall(data)
{
  return function(dispatch)
  { 
      var url = 'http://localhost:8080/api/review';
      fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), 
        credentials: 'omit',
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(res => res.text())
      .catch(error => console.error('Error:', error))
      .then(response => dispatch(Register(response),console.log(response))); 
  }
}
export function checkExistence(data)
{
  return function(dispatch)
  {
    var url = 'http://localhost:8080/api/checkuser';
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), 
      credentials: 'omit',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.text())
    .catch(error => console.error('Error:', error))
    .then(response => dispatch(CheckUser(response)));
  }
}

export function forgotPasswordAjax(data)
{
  return function(dispatch)
  {
    var url = 'http://localhost:8080/api/forgotpassword';
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), 
      credentials: 'omit',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.text())
    .catch(error => console.error('Error:', error))
    .then(response => dispatch(forgotpassword(response)));
  }
}

export function LoginAjax(data)
{
  return function(dispatch)
  {
    var url = 'http://localhost:8080/api/login';
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), 
      credentials: 'omit',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.text())
    .catch(error => console.error('Error:', error))
    .then(response => dispatch(Login(response)));
  }
}

export function moviesNameAjax()
{
  return function(dispatch)
  {
    var url = 'http://localhost:8080/api/movies';
    fetch(url, {
      method: 'GET', // or 'PUT'
      credentials: 'omit'
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => dispatch(getMovieNames(response)));
  }
}

export function moviesDetailsAjax()
{
  return function(dispatch)
  {
    var url = 'http://localhost:8080/api/moviesdetails';
    fetch(url, {
      method: 'GET', // or 'PUT'
      credentials: 'omit'
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => dispatch(getMovieDetails(response)));
  }
}