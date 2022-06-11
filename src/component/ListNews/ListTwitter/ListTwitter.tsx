import React from 'react'
import {ListTwitterNews} from "./ListTwitterNews";
import {List} from "antd";
import {TwitterNewsType} from "../../../type/types";

interface ListTwitterI{
  logo:string
  twitterNews: Array<TwitterNewsType>
  loading:boolean
}
export const ListTwitter: React.FC<ListTwitterI> = React.memo(({loading,logo, twitterNews}) => {
  return (
    <React.Fragment>
      <List loading={loading}
            pagination={{showLessItems: true, showSizeChanger: false, responsive: true,
              hideOnSinglePage: true, pageSize: 20, position: 'both'}}
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