import React from 'react';

export default function Card(props){

  function onClickView(){
    window.open(`${props.url_repo}`, '_blank');
  };

  return (
    <div className="my-box-card">

      <div className="my-bc-content-img">
        <img src={props.url_avatar} className="my-img-profile" alt="Avatar Usuario" />
      </div>

      <div className="my-repo-names">
        <div className="my-repo-name">
          {props.name}
        </div>
        <div className="my-repo-username">
          by <b>{props.username}</b>
        </div>
      </div>

      <div className="my-repo-description">
          {props.description}
      </div>

      <div className="my-repo-actions">
        <button onClick={onClickView} className="my-repo-buttons my-btn1">
          View
        </button>
        <button className="my-repo-buttons my-btn2">
        <i className="fas fa-star"></i> {props.stars}
        </button>
      </div>
      
    </div>
  );
};