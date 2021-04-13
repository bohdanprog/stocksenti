import React from 'react';
import {connect} from "react-redux";
import {requestStocks} from "../../redux/stockReducer";
import {Link} from "react-router-dom";
import {Menu} from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import {CommentOutlined, HomeOutlined, StockOutlined} from "@ant-design/icons";


class MenuItemContainer extends React.Component {

  componentDidMount() {
    this.props.requestStocks();
  }

  render() {
    return (
      <Menu theme="light" mode="inline">
        <Menu.Item key="4" icon={<HomeOutlined/>}><Link to='/main'>Main</Link></Menu.Item>
        <SubMenu  key="sub1" icon={<StockOutlined/>} title="Stock">
          {this.props.instruments.map(i =>
            <Menu.Item  key={i.id}><Link to={i.instruments}>{i.instruments}</Link></Menu.Item>)}
        </SubMenu>
        <Menu.Item key="3" icon={<CommentOutlined/>}><Link to='/comment'>Comment</Link></Menu.Item>
      </Menu>
    )
  }
}


let mapStateToProps = (state) => ({
  instruments: state.stocksInfo.entityConfigList
})

export default connect (mapStateToProps, {requestStocks})(MenuItemContainer)
