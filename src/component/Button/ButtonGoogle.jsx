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
  requestStocksYear
} from "../../redux/stocksReducer";


export const ButtonGoogle = ({instrument}) => {
  let dispatch = useDispatch()
  const getStocksAndGoogleSentimentDayData = (instrument) => {
    dispatch(requestStocksDay(instrument));
    dispatch(requestGoogleSentimentDay(instrument));
  }
  const getStocksAndGoogleSentimentWeekData = (instrument) => {
    dispatch(requestStocksWeek(instrument));
    dispatch(requestGoogleSentimentWeek(instrument));
  }
  const getStocksAndGoogleSentimentMonthData = (instrument) => {
    dispatch(requestStocksMonth(instrument));
    dispatch(requestGoogleSentimentMonth(instrument));
  }
  const getStocksAndGoogleSentimentYearData = (instrument) => {
    dispatch(requestStocksYear(instrument));
    dispatch(requestGoogleSentimentYear(instrument));
  }
  return (
    <Space align={'center'} style={{marginLeft: '5px'}}>
      <Button size={"middle"} type="primary" icon={<BiCalendarWeek style={{marginRight: '5px'}}/>}
              onClick={() => {getStocksAndGoogleSentimentDayData(instrument)}}>Day</Button>
      <Button size={"middle"} type="primary" icon={<BiCalendarWeek style={{marginRight: '5px'}}/>}
              onClick={() => {getStocksAndGoogleSentimentWeekData(instrument)}}>Week</Button>
      <Button size={"middle"} type="primary" icon={<BsCalendar style={{marginRight: '5px'}}/>}
              onClick={() => {getStocksAndGoogleSentimentMonthData(instrument)}}>Month</Button>
      <Button size={"middle"} type="primary" icon={<BiCalendarWeek style={{marginRight: '5px'}}/>}
              onClick={() => {getStocksAndGoogleSentimentYearData(instrument)}}>Year</Button>
    </Space>
  )
}
