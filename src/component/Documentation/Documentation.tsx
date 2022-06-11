import React from 'react';
import {Avatar, List} from "antd";
import {Diagram} from "../Diagram/Diagram";

type DocType = {

}

export const Documentation: React.FC<DocType> = React.memo((props) => {

  const data = [
    {
      title: 'How Stocksenti works?',
      description: 'Well, we need to start from the <b>purpose</b>.',
      image:'https://media3.giphy.com/media/tQz4EqZhNudDjPSEDy/giphy.gif?cid=6c09b9527tfjne40wugfwdtr5d057cim2cgnk36i5o4guwge&rid=giphy.gif&ct=s'
    },
    {
      title: 'How can we help you?',
      description: 'Considering why would you even use Stocksenti?',
      image:'https://thumbs.gfycat.com/UnrulyImpressiveLark-max-1mb.gif'
    },
    {
      title: 'Continious improvement',
      description: '"Its not about being the best, Its about being better than yesterday!',
      image:'https://media0.giphy.com/media/3o7buhIQho4RsDOf8Q/giphy.gif'
    },
    {
      title: 'About Us',
      description: 'Lets introduce our team. If someone would ask what Stocksenti is, the best answear would be people.',
      image:'https://i.pinimg.com/originals/d3/40/e0/d340e0ff1ce7863c2b8438314335dd0c.gif'
    },
  ];

  return (
    <React.Fragment>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (<List.Item>
          <List.Item.Meta
            avatar={<Avatar src={item.image} />}
            title={<a href="https://ant.design">{item.title}</a>}
            description={item.description}
          />
        </List.Item>)}/>
    </React.Fragment>

  )
})