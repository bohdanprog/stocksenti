import React from 'react';
import {FallOutlined, RiseOutlined} from "@ant-design/icons";
import SpinnerContainer from "../../Spiner/SpinnerContainer";

export let SentimentGoogleTitle = ({articleprovider, articlesentimentscore, titlesentiment}) => {
  if (!articleprovider) {
    return <SpinnerContainer/>;
  }
  return (
    <React.Fragment>
      {titlesentiment === 'negative' &&<p style={{margin:'0', width:'100%'}}>{articleprovider}
        .&nbsp;<span style={{color:'red', float:'right', fontSize:'14px', marginRight: '5px'}}>{titlesentiment} {articlesentimentscore} <FallOutlined /></span></p>}
      {titlesentiment === 'neutral' &&<p style={{margin:'0', width:'100%'}}>{articleprovider}
        .&nbsp;<span style={{color:'#649DD1', float:'right', fontSize:'14px', marginRight: '5px'}}> {titlesentiment} {articlesentimentscore}</span></p>}
      {titlesentiment === 'positive' &&<p style={{margin:'0', width:'100%'}}>{articleprovider}
        .&nbsp; <span style={{color: '#3f8600', float:'right', fontSize:'14px', marginRight: '5px'}}>{titlesentiment} {articlesentimentscore} <RiseOutlined /></span></p>}
    </React.Fragment>
  )
}