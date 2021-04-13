import {Layout, Tabs} from 'antd';
import {GoogleOutlined, TwitterOutlined} from '@ant-design/icons';
import {ResponsiveContainer} from "recharts";
import classes from "../Diagram/Diagram.module.css";
import Diagram from "../Diagram/Diagram";
import React from "react";
import {AiOutlineFileSearch} from "react-icons/ai";
import GoogleContainer from "../GoogleNews/GoogleContainer";
import ButtonOverviewContainer from "../Button/ButtonOverviewContainer";
import TwitterNewsContainer from "../TwitterNews/TwitterNewsContainer";


const {TabPane} = Tabs;

const TabsContainer = (props) => {
  return (
    <ResponsiveContainer  height={"100%"} width={"100%"}>
      <Tabs defaultActiveKey="2" tabBarGutter={10} tabBarStyle={{width:'100%', height:'100%'}} type={'line'} size={'small'}  centered={true}>
        <TabPane
          forceRender={true}
          tab={
            <span>
          <AiOutlineFileSearch/>
          <span> Overview</span>
        </span>
          }
          key="1"
        >
          <ButtonOverviewContainer style={{alignItems: 'left'}}/>
          <Layout className={classes.containerTabs}>
            <Diagram/>
          </Layout>
        </TabPane>
        <TabPane
          forceRender={true}
          tab={
            <span>
          <TwitterOutlined />
          News Twitter
        </span>
          }
          key="2"
        >
          <Layout className={classes.containerTabs}>
            <Diagram/>
          </Layout>
        </TabPane>
        <TabPane
          forceRender={true}
          tab={
            <span>
          <TwitterOutlined />
          Twitter News
        </span>
          }
          key="3"
        >
          <Layout className={classes.containerTabs}>
            <TwitterNewsContainer instrument={props.instrument}/>
          </Layout>
        </TabPane>
        <TabPane
          forceRender={true}
          tab={
            <span>
          <GoogleOutlined />
          Google News
        </span>
          }
          key="4"
        >
          <Layout className={classes.containerTabs}>
            <GoogleContainer logo={props.logo} instrument={props.instrument} />
          </Layout>
        </TabPane>
      </Tabs>
    </ResponsiveContainer>
  )
}

export default TabsContainer;