import React, { Component } from 'react';

const Gif = props => {
  return(
    <li>
      <img src={props.url} alt="" />
    </li>
  );

};

export default Gif;
