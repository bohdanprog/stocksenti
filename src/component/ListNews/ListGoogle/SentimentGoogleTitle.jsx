import React from 'react';
import {FallOutlined, RiseOutlined} from "@ant-design/icons";
import SpinnerContainer from "../../Spiner/SpinnerContainer";
import classes from "../List.module.css";

export let SentimentGoogleTitle = ({articleprovider, articlesentimentscore, titlesentiment}) => {
  if (!articleprovider) {
    return <SpinnerContainer/>;
  }
  return (
    <React.Fragment>
      {titlesentiment === 'negative' &&<p className={classes.sentimentGTContainer}>{articleprovider}
        .&nbsp;<span className={classes.sentimentGoogleTitleNegative}>{titlesentiment} {articlesentimentscore} <FallOutlined /></span></p>}
      {titlesentiment === 'neutral' &&<p className={classes.sentimentGTContainer}>{articleprovider}.&nbsp;
        <span className={classes.sentimentGoogleTitleNeutral}> {titlesentiment} {articlesentimentscore}</span></p>}
      {titlesentiment === 'positive' &&<p className={classes.sentimentGTContainer}>{articleprovider}.&nbsp;
        <span className={classes.sentimentGoogleTitlePositive}>{titlesentiment} {articlesentimentscore} <RiseOutlined /></span></p>}
    </React.Fragment>
  )
}