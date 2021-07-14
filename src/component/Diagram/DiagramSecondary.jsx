import React from "react";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import classes from "./Diagram.module.css";
import SpinnerContainer from "../Spiner/SpinnerContainer";
import moment from "moment";

export const DiagramSecondary = ({data}) => {
  if (!data) {
    return <SpinnerContainer/>;
  }
  let xAxisFormat = 'HH:mm';
  let tickCountTmp = 6;
  if (data.length > 300) {
    tickCountTmp = 7;
    xAxisFormat = 'ddd';
  } else if (data.length > 5000) {
    tickCountTmp = 15;
    xAxisFormat = 'MM/DD';
  } else if (data.length > 15000) {
    tickCountTmp = 12;
    xAxisFormat = 'Mon';
  }
  return (
    <div className={classes.histogram}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{top: 10, right: 0, left: 0, bottom: 10}} syncId="anyId">
          <Tooltip content={<CustomTooltip/>} cursor={{ strokeDasharray: '3 3' }}/>
      <CartesianGrid strokeDasharray="3 3" opacity={0.4}/>
          <YAxis type="number" yAxisId={'stockValue'} dataKey={"stockValue"} tickCount={6} hide axisLine={false} minTickGap={10}
                 tickLine={false} dx={-3} domain={['auto', 'auto']} tickFormatter={(number) => `$${number}`}/>
          <YAxis yAxisId={'googleNewsPositiveCount'} type="number" dataKey={"googleNewsPositiveCount"} hide
                 tickCount={6} axisLine={false} tickLine={false} dx={-3} domain={['auto', 'auto']} tickFormatter={(number) => `${number}`}/>
          <YAxis yAxisId={'googleNewsNegativeCount'} type="number" dataKey={"googleNewsNegativeCount"} hide
                 tickCount={6} axisLine={false} tickLine={false} dx={-3} domain={['auto', 'auto']} tickFormatter={(number) => `${number}`}/>
          <Tooltip content={<CustomTooltip/>}/>
          <YAxis hide/>

          <Area connectNulls type="monotone" dataKey='googleNewsNegativeCount' stackId="1" stroke="#FF4136" strokeWidth='0'
                name='googleNewsNegativeCount' fillOpacity={0.5} fill="#FF4136"/>
          <Area connectNulls type="monotone" dataKey='googleNewsPositiveCount' stackId="1" stroke="#2ECC40" strokeWidth='0'
                name='googleNewsPositiveCount' fillOpacity={0.5} fill="#2ECC40"/>
          <Area connectNulls yAxisId={'stockValue'} type="monotone" dataKey='stockValue' activeDot={{r: 4}} name='value' stroke="#D72600"  strokeWidth='1.5'
                fillOpacity={0} fill="#colorStock"/>
          <XAxis dataKey='createdDate' hide name="createdDate" axisLine={false} tickLine={false} dy={3} angle={-45} tickCount={tickCountTmp}
                 tickFormatter={str => {
                   return moment(str).format(xAxisFormat)
                 }}/>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

const CustomTooltip = ({active, payload, label}) => {
  if (active && payload && payload.length) {
    return (
      <div className={classes.customTooltip}>
        <p className={classes.label}><b>{`${label}`}</b></p>
        <p className={classes.label}>{`Positive: ${payload[0].payload.googleNewsPositiveCount}`}</p>
        <p className={classes.label}>{`Negative: ${payload[0].payload.googleNewsNegativeCount}`}</p>
      </div>
    );
  }

  return null;
};