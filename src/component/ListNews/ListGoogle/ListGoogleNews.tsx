import React, {useState} from 'react';
import {Avatar, Button, List} from "antd";
import moment from "moment";
import {ListGoogleArticle} from "./ListGoogleArticle";
import {SentimentslistType} from "../../../type/types";
import SpinnerContainer from "../../Spiner/SpinnerContainer";
import classes from "../List.module.css";
import {SentimentGoogleTitle} from './SentimentGoogleTitle';

interface ListGoogleI {
  id: number
  articleprovider: string
  title: string
  relatedsentenceswithsentimentslist: Array<SentimentslistType>
  date: string
  link: string
  titlesentiment: string
  titlesentimentscore: string
  articlesentimentscore: number
  articlephoto: string
  articlegooglesummary:string
}

export const ListGoogleNews: React.FC<ListGoogleI> = React.memo(({
                                                      id, articleprovider, title,
                                                      titlesentiment, relatedsentenceswithsentimentslist,
                                                      date, link,
                                                      articlesentimentscore, articlephoto, articlegooglesummary,
                                                    }) => {
  const [show, toggleShow] = useState(false);
  if (!articlegooglesummary) {
    return <SpinnerContainer/>;
  }
  let day = moment(date);
  let diff = day.fromNow();
  // let currentDate:any= new Date();
  // let publicDate:any = date;
  // let timeAgoDate:any = Number(currentDate) - Number(publicDate);
  // moment(timeAgoDate).format("DD-MM-YYYY hh:mm")

  const actions = [<div style={{display:'flex', alignItems:'center'}}><div><span style={{marginRight: '10px'}}>{diff}</span>&nbsp;
    <a className={classes.link} href={link} target="_blank" rel="noopener noreferrer" key="read-more">Read the whole</a>
  </div><Button style={{marginLeft:'5px',}} size={'small'} type={'primary'} onClick={() => toggleShow(!show)}>Read more {show ?'hide':'show'}</Button></div>];
  return (
    <React.Fragment>
      <List.Item className={classes.card} actions={actions} style={{margin: '10px', padding: '8px'}}>
        <List.Item.Meta key={id} avatar={<Avatar alt={'avatar'} size={64} src={articlephoto}/>}
        title={<SentimentGoogleTitle articleprovider={articleprovider} articlesentimentscore={articlesentimentscore}
               titlesentiment={titlesentiment}/>} description={title}/>
        {!show && articlegooglesummary}
        {show && relatedsentenceswithsentimentslist.map(i => <ListGoogleArticle articlesentence={i.articlesentence}
                                                                                 sentenceid={i.sentenceid}
                                                                                 articlesentiment={i.articlesentiment}
                                                                                 sentimentscore={i.sentimentscore}/>)}

      </List.Item>
    </React.Fragment>
  )
})

