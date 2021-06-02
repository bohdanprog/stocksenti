import React from 'react';
import {connect} from "react-redux";
import {requestStocks} from "../../redux/instrumentsReducer";
import {Link} from "react-router-dom";
import {Menu} from "antd";
import {CommentOutlined, HomeOutlined, CodeOutlined} from "@ant-design/icons";
import SpinnerContainer from "../Spiner/SpinnerContainer";


class MenuItemContainer extends React.Component {

  componentDidMount() {
    this.props.requestStocks();
  }

  render() {
    const { instruments} = this.props;
    if (!instruments) {
      return <SpinnerContainer/>;
    }
    return (
      <Menu theme="light" mode="vertical">
        <Menu.Item key="101" icon={<HomeOutlined/>}><Link to='/main'>Main</Link></Menu.Item>
        <Menu.Divider style={{marginTop:'0.75rem'}} />
        {instruments.map(i =><Menu.Item key={i.id}><Link to={i.instruments}>{i.instruments}</Link></Menu.Item>)}
        <Menu.Divider style={{margin:'0'}}/>
        <Menu.Item key="112" icon={<CodeOutlined />}><Link to='/documentation'>Documentation</Link></Menu.Item>
        <Menu.Item key="133" icon={<CommentOutlined/>}><Link to='/comment'>Comment</Link></Menu.Item>
      </Menu>
    )
  }
}


let mapStateToProps = (state) => ({
  instruments: state.instrumentsInfo.entityConfigList
})

export default connect (mapStateToProps, {requestStocks})(MenuItemContainer)
