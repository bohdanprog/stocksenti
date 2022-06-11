import React from 'react';
import {Col, Layout, Row} from "antd";
import classes from "../Diagram/Diagram.module.css";
import {ListTwitter} from "../ListNews/ListTwitter/ListTwitter";
import {ButtonTwitter} from "../Button/ButtonTwitter";
import {TwitterNewsType, TwitterSentimentType} from "../../type/types";

interface TwitterI {
  instrument:string
  twitterNews: Array<TwitterNewsType>
  twitterSentiment: Array <TwitterSentimentType>
  loading:boolean
  logo:string
}

export const TwitterTabs: React.FC<TwitterI> = ({logo, instrument, twitterNews,
                                                  twitterSentiment, loading}) => {
  return (
    <Layout className={classes.containerTabs}>
      <ButtonTwitter instrument={instrument}/>
      {/*<DiagramContainer instrument={instrument} twitterSentiment={twitterSentiment}/>*/}
      <Row>
        <Col xs={{span: 24}} xxl={{span: 24}} style={{float: 'left'}}>
          <ListTwitter loading={loading} logo={logo} twitterNews={twitterNews}/>
        </Col>
      </Row>
    </Layout>
  )
}