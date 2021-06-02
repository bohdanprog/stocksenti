import React from 'react';
import {Button, Space} from "antd";
import {BiCalendarWeek, BsCalendar} from "react-icons/all";
import {useDispatch} from "react-redux";
import {
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
  }
  const getStocksGoogleAndTwitterSentimentMonthData = (instrument) => {
    dispatch(requestStocksMonth(instrument));
    dispatch(requestTwitterSentimentMonth(instrument));
    dispatch(requestGoogleSentimentMonth(instrument));
  }
  const getStocksGoogleAndTwitterSentimentYearData = (instrument) => {
    dispatch(requestStocksYear(instrument));
    dispatch(requestTwitterSentimentYear(instrument));
    dispatch(requestGoogleSentimentYear(instrument));
  }
  return (
    <Space align={'center'} style={{marginLeft: '5px'}}>
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
