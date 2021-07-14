import React from 'react';
import {Button, Space} from "antd";
import {BiCalendarWeek, BsCalendar} from "react-icons/all";
import {useDispatch, useSelector} from "react-redux";
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
import {setButtonLoading} from "../../Selector/selector";
import classes from "./ButtonStyle.module.css";

export const ButtonGoogle = ({instrument}) => {
  let dispatch = useDispatch();
  let buttonLoading = useSelector(setButtonLoading);
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
    <Space align={'center'} className={classes.ButtonContainer}>
      <Button size={"middle"} loading={buttonLoading} type="primary" icon={<BiCalendarWeek style={{marginRight: '5px', alignItems:'center'}}/>}
              onClick={() => {getStocksAndGoogleSentimentDayData(instrument)}}>Day</Button>
      <Button size={"middle"} loading={buttonLoading} type="primary" icon={<BiCalendarWeek style={{marginRight: '5px', alignItems:'center'}}/>}
              onClick={() => {getStocksAndGoogleSentimentWeekData(instrument)}}>Week</Button>
      <Button size={"middle"} loading={buttonLoading} type="primary" icon={<BsCalendar style={{marginRight: '5px', alignItems:'center'}}/>}
              onClick={() => {getStocksAndGoogleSentimentMonthData(instrument)}}>Month</Button>
      <Button size={"middle"} loading={buttonLoading} type="primary" icon={<BiCalendarWeek style={{marginRight: '5px', alignItems:'center'}}/>}
              onClick={() => {getStocksAndGoogleSentimentYearData(instrument)}}>Year</Button>
    </Space>
  )
}
