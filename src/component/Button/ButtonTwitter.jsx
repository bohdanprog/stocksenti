import React from 'react';
import {Button, Space} from "antd";
import {BiCalendarWeek, BsCalendar} from "react-icons/all";
import {useDispatch} from "react-redux";
import {
  requestStocksDay,
  requestStocksMonth,
  requestStocksWeek,
  requestStocksYear,
  requestTwitterSentimentDay,
  requestTwitterSentimentMonth,
  requestTwitterSentimentWeek,
  requestTwitterSentimentYear
} from "../../redux/stocksReducer";


export const ButtonTwitter = ({instrument}) => {
  let dispatch = useDispatch()
  const getStocksAndTwitterSentimentDayData = (instrument) => {
    dispatch(requestStocksDay(instrument));
    dispatch(requestTwitterSentimentDay(instrument));
  }
  const getStocksAndTwitterSentimentWeekData = (instrument) => {
    dispatch(requestStocksWeek(instrument));
    dispatch(requestTwitterSentimentWeek(instrument));
  }
  const getStocksAndTwitterSentimentMonthData = (instrument) => {
    dispatch(requestStocksMonth(instrument));
    dispatch(requestTwitterSentimentMonth(instrument));
  }
  const getStocksAndTwitterSentimentYearData = (instrument) => {
    dispatch(requestStocksYear(instrument));
    dispatch(requestTwitterSentimentYear(instrument));
  }
  return (
    <Space align={'center'} style={{marginLeft: '5px'}}>
      <Button size={"middle"} type="primary" icon={<BiCalendarWeek style={{marginRight: '5px'}}/>}
              onClick={() => {getStocksAndTwitterSentimentDayData(instrument)}}>Day</Button>
      <Button size={"middle"} type="primary" icon={<BiCalendarWeek style={{marginRight: '5px'}}/>}
              onClick={() => {getStocksAndTwitterSentimentWeekData(instrument)}}>Week</Button>
      <Button size={"middle"} type="primary" icon={<BsCalendar style={{marginRight: '5px'}}/>} onClick={() => {
        getStocksAndTwitterSentimentMonthData(instrument)}}>Month</Button>
      <Button size={"middle"} type="primary" icon={<BiCalendarWeek style={{marginRight: '5px'}}/>}
              onClick={() => {getStocksAndTwitterSentimentYearData(instrument)}}>Year</Button>
    </Space>
  )
}
