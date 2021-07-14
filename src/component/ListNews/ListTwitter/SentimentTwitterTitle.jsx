import React from 'react'
import {FallOutlined, RiseOutlined} from "@ant-design/icons";

export const SentimentTwitterTitle = ({sentiment, sentimentscore}) => {
  return (
    <React.Fragment>
    {sentiment === 'negative'&&<span style={{display:'flex', float:'right', marginRight:'0px'}}><span style={{color:'red'}}>{sentiment} {sentimentscore} <FallOutlined /></span></span>}
    {sentiment === 'positive'&&<span style={{display:'flex', float:'right', marginRight:'0px'}}><span style={{color:'green'}}>{sentiment} {sentimentscore} <RiseOutlined /></span></span>}
      {sentiment === 'neutral'&&<span style={{display:'flex', float:'right', marginRight:'0px'}}><span style={{color:'#649DD1'}}>{sentiment} {sentimentscore}</span></span>}
    </React.Fragment>
  )
}