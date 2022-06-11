import React from "react";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import classes from "./Diagram.module.css";
import SpinnerContainer from "../Spiner/SpinnerContainer";
import moment from "moment";

export const Diagram = () => {
  // if (!data) {
  //   return <SpinnerContainer/>;
  // }
  return (
    <div className={classes.histogram}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart margin={{ top: 20, right: 30, left: 10, bottom: 0 }}>
          <defs>
            <linearGradient id="colorStock" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFA500" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#FFA500" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPositiveCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#228B22" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#228B22" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorNegativeCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8B0000" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8B0000" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorReachsum" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00008b" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#00008b" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey='stockvalue' activeDot={{r: 4}} name='value' fillOpacity={1} fill="url(#colorStock)" />
          <Area type="monotone" dataKey='googlenewsperiodscount'  name='count' fillOpacity={1} fill="url(#colorCount)" />
          <Area type="monotone" dataKey='googlenewsperiodstitlepositivecount'  name='positivecount' fillOpacity={1} fill="url(#colorPositiveCount)" />
          <Area type="monotone" dataKey='googlenewsperiodstitlenegativecount'  name='negativecount' fillOpacity={1} fill="url(#colorNegativeCount)" />
          <Area type="monotone" dataKey='tweetperiodsreachsum'  name='reachsum' fillOpacity={1} fill="url(#colorReachsum)" />
          <XAxis dataKey='createddate' name="createddate" axisLine={false} tickLine={false} dy={3}
                 tickFormatter={str =>{const date = moment(str.createddate).format("hh:mm")
            return date;
            }}/>
          <YAxis type="number" dataKey={"stockvalue"} tickCount={6} axisLine={false} tickLine={false} dx={-3}
                 domain={['auto', 'auto']} tickFormatter={(number) => `$${number}`}/>
          <YAxis type="number" dataKey={"googlenewsperiodscount"} tickCount={6} axisLine={false} tickLine={false} dx={-3}
                 domain={['auto', 'auto']} tickFormatter={(number) => `$${number}`}/>
          <YAxis type="number" dataKey={"googlenewsperiodstitlepositivecount"} tickCount={6} axisLine={false} tickLine={false} dx={-3}
                 domain={['auto', 'auto']} tickFormatter={(number) => `$${number}`}/>
          <YAxis type="number" dataKey={"googlenewsperiodstitlenegativecount"} tickCount={6} axisLine={false} tickLine={false} dx={-3}
                 domain={['auto', 'auto']} tickFormatter={(number) => `$${number}`}/>
          <YAxis type="number" dataKey={"tweetperiodsreachsum"} tickCount={6} axisLine={false} tickLine={false} dx={-3}
                 domain={['auto', 'auto']} tickFormatter={(number) => `$${number.tweetperiodsreachsum}`}/>
        </AreaChart>
      </ResponsiveContainer>
      <Tooltip content={<CustomTooltip/>}/>
      <CartesianGrid strokeDasharray="3 3" opacity={0.3} vertical={false}/>
    </div>
  );
}

const CustomTooltip = ({active, payload, label}) => {
  if (!payload) {
    return <SpinnerContainer/>;
  }
  if (active) {
    return (
      <div className={classes.customTooltip}>
        <h4 className={classes.label}>{`$${payload[0].payload.stockvalue} : ${moment(label).format("hh:mm")}`}</h4>
        {/*<p className={classes.label}>{`${payload[0].payload.instrument}`}</p>*/}
        {/*<p className={classes.label}>{`${payload[0].payload.stocksymbols}`}</p>*/}
        {/*<h4 className={classes.label}>{``}</h4>*/}
      </div>
    );
  }

  return null;
};