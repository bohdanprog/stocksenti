import React, {useEffect} from 'react'
import {Col, List, Row} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {GetAllPost, getPostLoader} from "../../Selector/selector";
import {addNewPost, requestAllPosts} from "../../redux/postsReducer";
import {PostsType} from "../../type/types";
import {Posts} from "./Posts";
import {PostAdd} from "./PostAdd";

type PropsType = {

}

export const PostsPage: React.FC<PropsType> = React.memo(() => {
  let dispatch = useDispatch();
  const getAllPost = useSelector(GetAllPost);
  let postLoader = useSelector(getPostLoader);
  useEffect(() => {
    dispatch(requestAllPosts())
  }, [dispatch, getAllPost]);
debugger
  const onAddPost = (value: { username: string, text: string }) => {
    const{username, text}=value;
    dispatch(addNewPost(username,text))
  }
  return (
    <React.Fragment>
      <Row style={{margin:'5px'}}>
        <Col xl={22} xs={23}>
      <h1>Create Feedback</h1>
      <PostAdd onAddPost={onAddPost}/>
        </Col>
      </Row>
      <Row style={{margin:'5px'}}>
        <Col xl={22} xs={23}>
      <List loading={postLoader} pagination={{showLessItems: true, showSizeChanger: false, responsive: true,
          hideOnSinglePage: true, pageSize: 5, position: 'both'}} rowKey={'key'} itemLayout="vertical"
            size='default' dataSource={getAllPost}
        renderItem= {(item:PostsType) => (<Posts created={item.created} username={item.username} id={item.id}
                               text={item.text} likesCount={item.likesCount} key={item.id}/>)}
      />
        </Col>
      </Row>
    </React.Fragment>
  )
})
