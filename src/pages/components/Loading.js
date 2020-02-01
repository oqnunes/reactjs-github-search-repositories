import React from 'react';

export default function Loading(props){
  const loading = props.display;
  return(
    <div className="my-contentLoading" style={{display: loading}}>
      <div className="my-boxImage-Loading">
        <i className="fas fa-spinner my-spinner"></i>
      </div>
      <div className="my-boxText-Loading">
        Making it happen
      </div>
    </div>
  );
};