import React from 'react';
import {Avatar, List} from "antd";
import moment from "moment";
import {PostsType} from "../../type/types";
import SpinnerContainer from "../Spiner/SpinnerContainer";
import {DislikeOutlined, LikeOutlined} from "@ant-design/icons";


export const Posts: React.FC<PostsType> = ({id, username, text, likesCount,created}) => {
  if (!username) {
    return <SpinnerContainer/>;
  }
  let day = moment(created);
  let diff = day.fromNow();
  const actions = [<div><span style={{marginRight: '10px'}}>{diff}</span>&nbsp;
    <span>{likesCount >= 0 ? `${likesCount} ${<LikeOutlined />}`: `${likesCount} ${<DislikeOutlined />}`}</span></div>];
  return (
    <React.Fragment>
      <List.Item actions={actions} style={{margin: '10px', padding: '8px'}}>
        <List.Item.Meta key={id} avatar={<Avatar alt={'avatar'} src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} size={64}/>}
                        title={username}
                        description={text}/>
      </List.Item>
    </React.Fragment>
  )
}

