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
  const actions = [<span className={classes.bottomInformationTime}>{diff}</span>,
    <a className={classes.link} href={link} target="_blank">Source</a>,
    <Button className={classes.bottomInformationButton} size={'small'} type={'primary'} disabled={relatedsentenceswithsentimentslist.length==0} 
    onClick={() => toggleShow(!show)}>{show ?'Hide':'Read more' }</Button>];
  return (
    <React.Fragment>
      <List.Item className={classes.card} actions={actions} style={{margin: '5px', padding: '10px'}}>
        <List.Item.Meta key={id} avatar={<Avatar alt={'avatar'} size={{ xs: 44, xxl: 64}} src={articlephoto}/>}
        title={<SentimentGoogleTitle articleprovider={articleprovider} articlesentimentscore={articlesentimentscore}
               titlesentiment={titlesentiment}/>} description={<span className={classes.descriptionTitle}>{title}</span>}/>
        {!show && articlegooglesummary}
        {show &&  relatedsentenceswithsentimentslist.map(i => <ListGoogleArticle articlesentence={i.articlesentence}
                                                                                 sentenceid={i.sentenceid}
                                                                                 articlesentiment={i.articlesentiment}
                                                                                 sentimentscore={i.sentimentscore}/>)}

      </List.Item>
    </React.Fragment>
  )
})

