import React from 'react';
import {Avatar, List} from "antd";
import {Diagram} from "../Diagram/Diagram";

type DocType = {

}

export const Documentation: React.FC<DocType> = React.memo((props) => {

  const data = [
    {
      title: 'Ant Design Title 1',
      description: 'Hello'
    },
    {
      title: 'Ant Design Title 2',
      description: 'Hello'
    },
    {
      title: 'Ant Design Title 3',
      description: 'Hello'
    },
    {
      title: 'Ant Design Title 4',
      description: 'Hello'
    },
  ];

  return (
    <React.Fragment>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (<List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={<a href="https://ant.design">{item.title}</a>}
            description={item.description}
          />
        </List.Item>)}/>
    </React.Fragment>

  )
})