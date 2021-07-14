import React from 'react';
import {Avatar, List} from "antd";
import moment from "moment";
import {PostsType} from "../../type/types";
import SpinnerContainer from "../Spiner/SpinnerContainer";
import classes from "./PostStyle.module.css"

export const Posts: React.FC<PostsType> = React.memo(({id, username, text, likesCount,created}) => {
  if (!username) {
    return <SpinnerContainer/>;
  }
  let day = moment(created);
  let diff = day.fromNow();
  const actions = [<div><span className={classes.timeContainer}>{diff}</span></div>];
  return (
    <React.Fragment>
      <List.Item actions={actions} style={{margin: '10px', padding: '8px'}}>
        <List.Item.Meta key={id} avatar={<Avatar alt={'avatar'} src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
                                                 size={{ xs: 44, xxl: 56}}/>}
                        title={<span className={classes.usernameContainer}>{username}</span>}
                        description={<span className={classes.textContainer}>{text}</span>}/>
      </List.Item>
    </React.Fragment>
  )
})

