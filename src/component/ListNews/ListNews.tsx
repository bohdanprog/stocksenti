import React from 'react';
import {Avatar, List} from "antd";
import moment from "moment";
import {ListArticle} from "./ListArticle";
import {SentimentslistType} from "../../type/types";
import SpinnerContainer from "../Spiner/SpinnerContainer";
import classes from "./List.module.css";

type PropsType ={
        id: number | null
        articleprovider: string | null
        title: string | null
        relatedsentenceswithsentimentslist: Array <SentimentslistType>
        date:number | null
    logo: string| null
        link: string | undefined
        titlesentiment: string | null
}

export const ListNews:React.FC<PropsType> = ({id, articleprovider,
                                                 title, titlesentiment, relatedsentenceswithsentimentslist,
                                                 date,logo, link}) => {
    if (!relatedsentenceswithsentimentslist) {
        return <SpinnerContainer/>;
    }
    let day = moment(date);
    let diff = day.fromNow();
    // let currentDate:any= new Date();
    // let publicDate:any = date;
    // let timeAgoDate:any = Number(currentDate) - Number(publicDate);
    // moment(timeAgoDate).format("DD-MM-YYYY hh:mm")
    const actions = [<div style={{float:'right'}}><span style={{marginRight:'10px'}}>{diff}</span>&nbsp;
                    <a className={classes.link} href={link} target="_blank" rel="noopener noreferrer" key="read-more">Read the whole</a></div>];
    return (
        <React.Fragment>
            {titlesentiment === 'negative' && <List.Item className={classes.card} actions={actions} style={{margin:'5px',padding:'8px',color:'#373D3F', border: '2px solid red'}} key={id}>
              <List.Item.Meta avatar={<Avatar alt={'avatar'} size={32} src={logo}/>} title={articleprovider} description={title}/>
                {relatedsentenceswithsentimentslist?.map(i=><ListArticle articlesentence={i.articlesentence}
                                                                        articlesentiment={i.articlesentiment} sentimentscore={i.sentimentscore}/>)}
            </List.Item>}
            {titlesentiment === 'positive' && <List.Item className={classes.card} actions={actions} style={{margin:'5px',padding:'8px',color:'#373D3F', border: '2px solid #649DD1'}} key={id}>
              <List.Item.Meta avatar={<Avatar alt={'avatar'} size={32} src={logo}/>} title={articleprovider} description={title}/>
                {relatedsentenceswithsentimentslist?.map(i=><ListArticle articlesentence={i.articlesentence}
                                                                        articlesentiment={i.articlesentiment} sentimentscore={i.sentimentscore}/>)}
            </List.Item>}
            {titlesentiment === 'neutral' && <List.Item className={classes.card} actions={actions} style={{margin:'5px',padding:'8px',color:'#373D3F', border: '2px solid green'}} key={id}>
              <List.Item.Meta avatar={<Avatar alt={'avatar'} size={32} src={logo}/>} title={articleprovider} description={title}/>
                {relatedsentenceswithsentimentslist?.map(i=><ListArticle articlesentence={i.articlesentence}
                                                                        articlesentiment={i.articlesentiment} sentimentscore={i.sentimentscore}/>)}
            </List.Item>}
        </React.Fragment>
    )
}

