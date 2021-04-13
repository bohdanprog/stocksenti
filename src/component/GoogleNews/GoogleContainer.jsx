import React from "react";
import {connect} from "react-redux";
import Paginator from "../Paginator/Paginator";
import {requestGoogleNewsDayData} from "../../redux/GoogleNewsReducer";
import {Content} from "antd/es/layout/layout";
import {Col, List, Row} from "antd";
import ButtonContainer from "../Button/ButtonGoogleNewsContainer";
import {ListNews} from "../ListNews/ListNews";

class GoogleContainer extends React.Component {
  componentDidMount() {
    this.props.requestGoogleNewsDayData(this.props.instrument)
  }

  render() {
    const {googleNews, logo} = this.props;
    return (
      <Content style={{width: '100%', height: '100%', minWidth:'100%', minHeight:'100%'}}>
        <Row  style={{alignItems: 'left'}}>
          <Paginator />
        </Row>
        <Row  style={{marginTop:'10px'}}>
          <ButtonContainer instrument = {this.props.instrument} style={{ alignItems: 'left'}}/>
        </Row>
        <Row  style={{justifyContent:'space-between', marginTop:'10px'}}>
          <Col  xs={{span: 24}} xxl={{span: 12}}>
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 1,
              md: 1,
              lg: 1,
              xl: 1,
              xxl: 1,
            }}
            rowKey={'key'}
            itemLayout="vertical"
            size="large"
            dataSource={googleNews}
            renderItem={item => (<ListNews logo={logo} articleprovider={item.articleprovider} titlesentiment={item.titlesentiment} title={item.title}
                        relatedsentenceswithsentimentslist={item.relatedsentenceswithsentimentslist}
                        date={item.createddate} key={item.id} id={item.id} articlephoto={item.articlephoto} link={item.link}/>)}
          />
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

export default connect(mapStateToProps, {requestGoogleNewsDayData})(GoogleContainer);