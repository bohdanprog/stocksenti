import React, {useEffect} from 'react'
import {Col, List, Row} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {GetAllPost} from "../../Selector/selector";
import {addNewPost, requestAllPosts} from "../../redux/postsReducer";
import {PostsType} from "../../type/types";
import {Posts} from "./Posts";
import {PostAdd} from "./PostAdd";

type PropsType = {

}

export const PostsPage: React.FC<PropsType> = () => {
  let dispatch = useDispatch();
  const getAllPost = useSelector(GetAllPost);
  useEffect(() => {
    dispatch(requestAllPosts())
  }, [dispatch, getAllPost]);

  const onAddPost = (value: { username: string, text: string }) => {
    const{username, text}=value;
    dispatch(addNewPost(username,text))
  }
  return (
    <React.Fragment>
      <Row style={{display:'block', margin:'5px'}}>
        <Col xl={12} xs={22}>
      <h1>Create Post</h1>
      <PostAdd onAddPost={onAddPost}/>
        </Col>
      </Row>
      <Row style={{display:'block', margin:'5px'}}>
        <Col xl={12} xs={22}>
      <h1>Posts List</h1>
      <List grid={{gutter: 16, xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1,}}
        pagination={{showLessItems: true, showSizeChanger: false, responsive: true,
          hideOnSinglePage: true, pageSize: 5, position: 'both'}} rowKey={'key'} itemLayout="vertical"
            size="default" dataSource={getAllPost}
        renderItem= {(item:PostsType) => (<Posts created={item.created} username={item.username} id={item.id}
                               text={item.text} likesCount={item.likesCount} key={item.id}/>)}
      />
        </Col>
      </Row>
    </React.Fragment>
  )
}
