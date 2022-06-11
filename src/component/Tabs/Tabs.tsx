import {Tabs} from 'antd';
import {GoogleOutlined, TwitterOutlined} from '@ant-design/icons';
import {ResponsiveContainer} from "recharts";
import classes from "../Diagram/Diagram.module.css";
import React from "react";
import {AiOutlineFileSearch} from "react-icons/ai";
import {OverviewFull} from "./FullViewTabs/OverviewFull";
import {TwitterFull} from "./FullViewTabs/TwitterFull";
import {GoogleFull} from "./FullViewTabs/GoogleFull";
import {GoogleSentimentType, TwitterSentimentType} from "../../type/types";

const {TabPane} = Tabs;

type PropsType = {
  instrument: string
  stocksymbols: string
  instrumentphoto: string
  lastValueData: number
  twitterSentiment: Array<TwitterSentimentType>
  googleSentiment: Array<GoogleSentimentType>
  logo: string
}

export const TabsConnect: React.FC<PropsType> = React.memo(({
                                                              instrument,
                                                              instrumentphoto,
                                                              stocksymbols,
                                                              lastValueData,
                                                              twitterSentiment,
                                                              googleSentiment,
                                                              logo
                                                            }) => {
  return (
    <div className={classes.responsiveTabs}>
      <ResponsiveContainer>
        <Tabs defaultActiveKey="1" tabPosition={'top'} centered={true} type={'card'}>
          <TabPane tab={<span><AiOutlineFileSearch/>Overview</span>} key="1">
            <OverviewFull instrument={instrument} instrumentphoto={instrumentphoto} stocksymbols={stocksymbols}
                          twitterSentiment={twitterSentiment} googleSentiment={googleSentiment}
                          lastValueData={lastValueData}/>
          </TabPane>
          <TabPane tab={<span><TwitterOutlined/>Twitter</span>} key="2">
            <TwitterFull instrument={instrument} instrumentphoto={instrumentphoto} stocksymbols={stocksymbols}
                         twitterSentiment={twitterSentiment} lastValueData={lastValueData} logo={logo}/>
          </TabPane>
          <TabPane tab={<span><GoogleOutlined/>Google</span>} key="3">
            <GoogleFull instrument={instrument} instrumentphoto={instrumentphoto} stocksymbols={stocksymbols}
                        googleSentiment={googleSentiment} lastValueData={lastValueData}/>
          </TabPane>
        </Tabs>
      </ResponsiveContainer>
    </div>
  )
})