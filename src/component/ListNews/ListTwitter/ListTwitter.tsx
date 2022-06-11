import React from 'react'
import {ListTwitterNews} from "./ListTwitterNews";
import {List} from "antd";
import SpinnerContainer from "../../Spiner/SpinnerContainer";
import {TwitterNewsType} from "../../../type/types";

interface ListTwitterI{
  logo:string
  twitterNews: Array<TwitterNewsType>
}
export const ListTwitter: React.FC<ListTwitterI> = React.memo(({logo, twitterNews}) => {
  if (!twitterNews) {
    return <SpinnerContainer/>;
  }
  return (
    <React.Fragment>
      <List grid={{
        gutter: 16, xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1,}}
            pagination={{showLessItems: true, showSizeChanger: false, responsive: true,
              hideOnSinglePage: true, pageSize: 5, position: 'both'}}
            rowKey={'key'}
            itemLayout="vertical"
            size="default"
            dataSource={twitterNews}
            renderItem={item => (
              <ListTwitterNews logo={logo} content={item.content} date={item.createddate} location={item.location}
                               sentiment={item.sentiment} sentimentscore={item.sentimentscore} id={item.id}
                                key={item.id} />)}
      />
    </React.Fragment>
  )
})