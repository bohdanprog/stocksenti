import React, {useState} from "react";
import {Button, Col, Drawer, Row} from "antd";
import {MenuOutlined} from "@ant-design/icons";
import "./NavBar.css";
import logo from "./../../logo.svg";
import MenuItemSupport from "../MenuItem/MenuItemSupport/MenuItemSupport";

const NavBar = ({ menu }) => {
  const [visible, setVisible] = useState(false);

  return (
    <nav className="navbar">
        <Row style={{width:'100%', height:'100%',alignItems:'center', justifyContent:'space-between', marginRight:'20px'}}>
          <Col xs={14} md={18} lg={18} xl={20} xxl={20}><Button className="menu" type="primary" icon={<MenuOutlined />}
            onClick={() => setVisible(true)}
          />
            <span style={{alignItems:'center', justifyContent:"center"}}><img src={logo} className="logo" alt="logo"/>
            <a href={'index.html'}
               style={{importUrl:('https://fonts.googleapis.com/css2?family=Mukta&display=swap'),
              fontFamily: "'Mukta', sans-serif",
              letterSpacing:'-0.025em',
              fontSize:'18px',
              fontWeight: 'normal',
              color:'#5d5d5d'}} target='_parent' rel='noopener'>Stocksenti</a></span>
            <Drawer
              title="Menu"
              placement="left"
              onClick={() => setVisible(false)}
              onClose={() => setVisible(false)}
              visible={visible}
            >
              {menu}
            </Drawer>
          </Col>
          <Col xs={8} md={4} lg={4} xl={2} xxl={2} offset={2}>
            <MenuItemSupport/>
          </Col>
        </Row>
    </nav>
  );
};

export default NavBar;
