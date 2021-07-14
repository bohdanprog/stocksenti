import React from 'react'
import {FallOutlined, RiseOutlined} from "@ant-design/icons";

export const SentimentGoogleDescription = ({titlesentiment, title}) => {
  return (
    <React.Fragment>
      {titlesentiment === 'negative' &&
      <span style={{display: 'flex', justifyContent: 'space-between', marginRight: '10px'}}>{title}<span
        style={{color: 'red'}}>{titlesentiment} <FallOutlined/></span></span>}
      {titlesentiment === 'positive' &&
      <span style={{display: 'flex', justifyContent: 'space-between', marginRight: '10px'}}>{title}<span
        style={{color: 'green'}}>{titlesentiment} <RiseOutlined/></span></span>}
      {titlesentiment === 'neutral' &&
      <span style={{display: 'flex', justifyContent: 'space-between', marginRight: '10px'}}>{title}<span
        style={{color: '#649DD1'}}>{titlesentiment}</span></span>}
    </React.Fragment>
  )
}