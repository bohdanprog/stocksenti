import React from 'react';
import {Avatar, List} from "antd";
import moment from "moment";
import SpinnerContainer from "../../Spiner/SpinnerContainer";
import classes from "../List.module.css";
import {SentimentTwitterTitle} from "./SentimentTwitterTitle";

interface PropsType {
  id: number
  date: number
  logo: string
  sentiment:string
  content: string
  location:string
  sentimentscore: number
}

export const ListTwitterNews:React.FC<PropsType> = React.memo(({logo,date, content, id,
                                                      location, sentiment, sentimentscore}) => {
    if (!content) {
        return <SpinnerContainer/>;
    }
    let day = moment(date);
    let diff = day.fromNow();
    let currentDate:any= new Date();
    let publicDate:any = date;
    let timeAgoDate:any = Number(currentDate) - Number(publicDate);
    moment(timeAgoDate).format("DD-MM-YYYY hh:mm");

  const actions = [<div style={{float:'right'}}><span style={{marginRight:'10px'}}>{location}</span><span>{diff}</span></div>];
    return (
        <React.Fragment>
            <List.Item  actions={actions} className={classes.card} style={{margin:'5px',padding:'8px'}}>
              <List.Item.Meta key={id} avatar={<Avatar alt={'avatar'} size={32} src={logo}/>}
               description={<SentimentTwitterTitle sentiment={sentiment} sentimentscore={sentimentscore}/>}/>
                <div>{content}</div>
            </List.Item>
        </React.Fragment>
    )
})

