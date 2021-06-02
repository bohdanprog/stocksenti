import React from 'react';
import {FallOutlined, RiseOutlined} from "@ant-design/icons";

export let ListGoogleArticle = ({articlesentence, articlesentiment, sentimentscore, sentenceid}) => {
  return (
    <React.Fragment>
      {articlesentiment === 'negative' &&
      <p key={sentenceid} style={{margin: '0', width: '100%'}}>{articlesentence}&nbsp;<span
        style={{color: 'red'}}>({articlesentiment} {sentimentscore} <FallOutlined/>)</span></p>}
      {articlesentiment === 'neutral' &&
      <p key={sentenceid} style={{margin: '0', width: '100%'}}>{articlesentence}&nbsp;<span
        style={{color: '#649DD1'}}> ({articlesentiment} {sentimentscore})</span></p>}
      {articlesentiment === 'positive' &&
      <p key={sentenceid} style={{margin: '0', width: '100%'}}>{articlesentence}&nbsp; <span
        style={{color: '#3f8600', alignItems: 'end'}}>({articlesentiment} {sentimentscore} <RiseOutlined/>)</span></p>}
    </React.Fragment>
  )
}