import React from 'react';
import {Dropdown, Menu} from "antd";
import Patreon from "../../../assets/patreon.png";
import BMC from "../../../assets/by-me-a-coffee.png";
import {DownOutlined} from "@ant-design/icons";
import {CreditCardOutlined} from "@ant-design/icons";

const menu = (
  <Menu theme="light" style={{padding:'1rem', fontSize:'14px'}}>
    <div>
    <Menu.Item key="1"><img alt={'patreon'} src={Patreon} style={{width: '24px', margin:'3px', alignItems:'center'}}/>
    <a style={{color:'#5d5d5d'}} target="_blank" rel="noopener noreferrer" href="https://www.patreon.com/">Patreon</a></Menu.Item></div>
    <div><Menu.Item key="2"><img alt={'by-me-a-coffee'} src={BMC} style={{width: '24px', margin:'3px', alignItems:'center'}}/>
      <a style={{color:'#5d5d5d'}} target="_blank" rel="noopener noreferrer" href="https://www.buymeacoffee.com/">Buy me a
      coffee</a></Menu.Item></div>
  </Menu>
);

const MenuItemSupport = () => {
  return (
    <Dropdown placement={'bottomCenter'} trigger={['click']} arrow={true} overlay={menu}>
      <a style={{color:'#5d5d5d'}} href={'index.html'} target='_parent' rel='noopener' className="ant-dropdown-link"
         onClick={e => e.preventDefault()}><CreditCardOutlined /> Support us<DownOutlined />
      </a>
    </Dropdown>
  )
}

export default MenuItemSupport