import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import SignIn from './controllers/SignIn';
import Loading from './components/Loading';

function Index() {

  document.title = 'Search GitHub Repos';

  const [loading, setLoading] = useState('none');
  const history = useHistory();

  if(sessionStorage.getItem('login')){
    history.push('/home');
  };

  async function handleSignIn(e){

    e.preventDefault();

    var getEmail = document.getElementById('inputEmail').value;
    var getPass = document.getElementById('inputPassword').value;

    if(SignIn(getEmail, getPass) === 0){

      setLoading('flex');
      setTimeout(function(){ 
        history.push('/home');
      }, 2000);

    };

  };

  return (
    <>
    <div className="my-boxLogin">
      <div className="my-boxLogo">
        <i className="fab fa-d-and-d"></i>
      </div>
      <div className="my-boxTitle">
        Please Sign In
      </div>
      <div className="my-boxForm">
        <form onSubmit={handleSignIn}>
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input
            type="email"
            id="inputEmail"
            className="form-control my-form-input-settings-bottom"
            placeholder="Email address"
            required
            autoFocus
          />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            className="form-control my-form-input-settings-top"
            placeholder="Password"
            required
          />
          <div className="mb-3 my-form-input-settings-align">
            <label><input type="checkbox" value="remember-me" /> Remember me </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
    <Loading display={loading} />
    </>
  );
}

export default Index;
