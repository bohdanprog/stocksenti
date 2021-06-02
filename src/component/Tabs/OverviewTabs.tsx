import React from 'react';
import {Layout, Row} from "antd";
import classes from "../Diagram/Diagram.module.css";
import {DiagramContainer} from "../Diagram/DiagramContainer";
import {ButtonOverview} from "../Button/ButtonOverview";
import {GoogleSentimentType, TwitterSentimentType} from "../../type/types";

interface PropsI {
  instrument:string
  googleSentiment: Array<GoogleSentimentType>
  twitterSentiment: Array<TwitterSentimentType>
}
export const OverviewTabs: React.FC<PropsI> = React.memo(({instrument, googleSentiment, twitterSentiment}) => {
  return (
    <Layout className={classes.containerTabs}>
        <ButtonOverview instrument = {instrument}/>
      <Row>
        <DiagramContainer instrument={instrument} googleSentiment={googleSentiment} twitterSentiment={twitterSentiment}/>
      </Row>
    </Layout>
  )
})