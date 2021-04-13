import React from 'react';
import {SentimentslistType} from "../../type/types";
import {DashOutlined, FallOutlined, RiseOutlined} from "@ant-design/icons";


export let ListArticle: React.FC<SentimentslistType> = ({articlesentence, articlesentiment, sentimentscore}) => {
    return (
        <React.Fragment>
            {articlesentiment === 'negative' && <p style={{margin:'0', width:'100%'}}>{articlesentence}.&nbsp;
            <span style={{color:'red'}}>{articlesentiment}</span> <span style={{color:'red'}}>{sentimentscore?.toFixed(1)} <FallOutlined /></span></p>}
              {articlesentiment === 'neutral' && <p style={{margin:'0', width:'100%'}}>{articlesentence}.&nbsp;
              <span style={{color:'#649DD1'}}>{articlesentiment}</span> <span style={{color:'#649DD1'}}>{sentimentscore?.toFixed(1)} <DashOutlined /></span></p>}
              {articlesentiment === 'positive' && <p style={{margin:'0', width:'100%'}}>{articlesentence}.&nbsp;
              <span style={{color:'green', alignItems:'end'}}>{articlesentiment}</span> <span style={{color:'green', alignItems:'end'}}>{sentimentscore?.toFixed(1)} <RiseOutlined /> </span></p>}
        </React.Fragment>
    )
}

