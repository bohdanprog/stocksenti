import React from 'react';
import {Col, Layout, Row} from "antd";
import classes from "../Diagram/Diagram.module.css";
import {DiagramContainer} from "../Diagram/DiagramContainer";
import {ListGoogleContainer} from "../ListNews/ListGoogle/ListGoogleContainer";
import {ButtonGoogle} from "../Button/ButtonGoogle";
import {GoogleNewsType, GoogleSentimentType} from "../../type/types";

interface PropsType {
  instrument:string
  googleNews: Array<GoogleNewsType>
  googleSentiment: Array<GoogleSentimentType>
  loading:boolean
}

export const GoogleTabs: React.FC<PropsType> = React.memo(({instrument, googleNews, googleSentiment, loading}) => {
  return (
    <Layout className={classes.containerTabs}>
        <ButtonGoogle instrument={instrument}/>
      <Row>
        {/*<DiagramContainer instrument={instrument} googleSentiment={googleSentiment}/>*/}
      </Row>
      <Row>
        <Col xs={{span: 24}} xxl={{span: 24}}>
          <ListGoogleContainer loading={loading} googleNews={googleNews}/>
        </Col>
      </Row>
    </Layout>
  )
})