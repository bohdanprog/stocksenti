import React from "react";
import {connect} from "react-redux";
import Paginator from "../Paginator/Paginator";
import {Content} from "antd/es/layout/layout";
import {Col, Row, Space} from "antd";
import ButtonNewsTwitterContainer from "../Button/ButtonNewsTwitterContainer";

class TwitterNewsContainer extends React.Component {
  componentDidMount() {
    // this.props.requestTwitterNewsDayData(this.props.instrument)
  }

  render() {
    const IconText = ({ icon, text }) => (
      <Space>
        {React.createElement(icon)}
        {text}
      </Space>
    );
    return (
      <Content style={{width: '100%', height: '100%', minWidth:'100%', minHeight:'100%'}}>
        <Row gutter={[20, 8]} style={{alignItems: 'left'}}>
          <Paginator />
        </Row>
        <Row gutter={[20, 8]} style={{marginTop:'10px'}}>
          <ButtonNewsTwitterContainer instrument = {this.props.instrument} style={{ alignItems: 'left'}}/>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{justifyContent:'space-between'}}>
          <Col xs={{span: 24}} xxl={{span: 12}}>
          {/*<List*/}
          {/*  itemLayout="vertical"*/}
          {/*  size="large"*/}
          {/*  dataSource={this.props.googleNews}*/}
          {/*  renderItem={item => (*/}
          {/*    <List.Item*/}
          {/*      key={item.id}*/}
          {/*      actions={[*/}
          {/*        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,*/}
          {/*        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,*/}
          {/*      ]}>*/}
          {/*      <List.Item.Meta*/}
          {/*        avatar={<Avatar src={'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'} />}*/}
          {/*        title={<p>{item.articleprovider}</p>}*/}
          {/*        description={item.title}*/}
          {/*      />*/}
          {/*      {<p>{item.relatedsentenceswithsentiments}</p>}*/}
          {/*      {<div>{moment(item.date).format("DD-MM-YYYY hh:mm")}</div>}*/}
          {/*    </List.Item>*/}
          {/*  )}*/}
          {/*/>*/}
          </Col>
        </Row>
      </Content>
    )
  }
}


let mapStateToProps = (state) => (
  {
    googleNews: state.googleNews.googleInfo
  })

export default connect(mapStateToProps, {})(TwitterNewsContainer);