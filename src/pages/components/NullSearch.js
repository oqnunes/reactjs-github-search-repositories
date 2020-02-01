import React from 'react';
import { useHistory } from 'react-router-dom';

export default function NullSearch(){

  const history = useHistory();

  async function handleLogOut(e){
    e.preventDefault();
    sessionStorage.clear();
    history.push('/');
  };

  return(
    <div className="boxNullSearch">
      <button type="button" onClick={handleLogOut} className="btn btn-danger">Logout</button>
    </div>
  );
};