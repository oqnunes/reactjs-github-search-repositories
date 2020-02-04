import React from 'react';

export default function NullSearch(props){

  const visibility = props.visibility;

  return(
    <div className="boxNullSearch" style={{display: visibility}}>
      <div className="titleEmptyResearch">
        Your research will be here.
      </div>
      <lottie-player
        src="https://assets6.lottiefiles.com/packages/lf20_MrIjH2.json"  
        background="transparent"
        speed="0.4"
        style={{width: 300, height: 300}}
        loop
        autoplay >
      </lottie-player>
    </div>
  );
};