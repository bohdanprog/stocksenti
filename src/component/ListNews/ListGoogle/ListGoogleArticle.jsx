import React from 'react';
import classes from "../List.module.css";

export let ListGoogleArticle = ({articlesentence, articlesentiment, sentimentscore, sentenceid}) => {
  return (
    <React.Fragment>
      {articlesentiment === 'negative' && <p key={sentenceid} className={classes.sentimentGTContainer}>{articlesentence}&nbsp;
        <span className={classes.sentimentGANeg}>({articlesentiment} {sentimentscore})</span></p>}
      {articlesentiment === 'neutral' && <p key={sentenceid} className={classes.sentimentGTContainer}>{articlesentence}&nbsp;
        <span className={classes.sentimentGANeut}> ({articlesentiment} {sentimentscore})</span></p>}
      {articlesentiment === 'positive' && <p key={sentenceid} className={classes.sentimentGTContainer}>{articlesentence}&nbsp;
        <span className={classes.sentimentGAPos}>({articlesentiment} {sentimentscore})</span></p>}
    </React.Fragment>
  )
}