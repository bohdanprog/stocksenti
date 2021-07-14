import React from 'react';
import {Button, Space} from "antd";
import {BiCalendarWeek, BsCalendar} from "react-icons/all";
import {useDispatch} from "react-redux";
import {
  requestChartMonth,
  requestChartWeek, requestChartYear,
  requestGoogleSentimentDay,
  requestGoogleSentimentMonth,
  requestGoogleSentimentWeek,
  requestGoogleSentimentYear,
  requestStocksDay,
  requestStocksMonth,
  requestStocksWeek,
  requestStocksYear,
  requestTwitterSentimentDay,
  requestTwitterSentimentMonth,
  requestTwitterSentimentWeek,
  requestTwitterSentimentYear
} from "../../redux/stocksReducer";
import classes from "./ButtonStyle.module.css";


export const ButtonOverview = ({instrument}) => {
  let dispatch = useDispatch()
  const getStocksGoogleAndTwitterSentimentDayData = (instrument) => {
    dispatch(requestStocksDay(instrument));
    dispatch(requestTwitterSentimentDay(instrument));
    dispatch(requestGoogleSentimentDay(instrument));
  }
  const getStocksGoogleAndTwitterSentimentWeekData = (instrument) => {
    dispatch(requestStocksWeek(instrument));
    dispatch(requestTwitterSentimentWeek(instrument));
    dispatch(requestGoogleSentimentWeek(instrument));
    dispatch(requestChartWeek(instrument));
  }
  const getStocksGoogleAndTwitterSentimentMonthData = (instrument) => {
    dispatch(requestStocksMonth(instrument));
    dispatch(requestTwitterSentimentMonth(instrument));
    dispatch(requestGoogleSentimentMonth(instrument));
    dispatch(requestChartMonth(instrument));
  }
  const getStocksGoogleAndTwitterSentimentYearData = (instrument) => {
    dispatch(requestStocksYear(instrument));
    dispatch(requestTwitterSentimentYear(instrument));
    dispatch(requestGoogleSentimentYear(instrument));
    dispatch(requestChartYear(instrument));
  }
  return (
    <Space align={'center'} className={classes.ButtonContainer}>
      <Button size={"middle"} type="primary" icon={<BiCalendarWeek style={{marginRight: '5px'}}/>}
              onClick={() => {getStocksGoogleAndTwitterSentimentDayData(instrument)}}>Day</Button>
      <Button size={"middle"} type="primary" icon={<BiCalendarWeek style={{marginRight: '5px'}}/>}
              onClick={() => {getStocksGoogleAndTwitterSentimentWeekData(instrument)}}>Week</Button>
      <Button size={"middle"} type="primary" icon={<BsCalendar style={{marginRight: '5px'}}/>} onClick={() => {
        getStocksGoogleAndTwitterSentimentMonthData(instrument)}}>Month</Button>
      <Button size={"middle"} type="primary" icon={<BiCalendarWeek style={{marginRight: '5px'}}/>}
              onClick={() => {getStocksGoogleAndTwitterSentimentYearData(instrument)}}>Year</Button>
    </Space>
  )
}
