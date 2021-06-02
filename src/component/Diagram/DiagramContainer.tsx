import React, {useEffect} from 'react';
import SpinnerContainer from "../Spiner/SpinnerContainer";
import {Diagram} from "./Diagram";
import {useDispatch, useSelector} from "react-redux";
import {getStock} from "../../Selector/selector";
import {requestStocksDay} from "../../redux/stocksReducer";
import {GoogleSentimentType, TwitterSentimentType} from "../../type/types";

interface PropsI {
  instrument:string
  twitterSentiment: Array<TwitterSentimentType>
  googleSentiment: Array <GoogleSentimentType>
}
export const DiagramContainer: React.FC<PropsI> = React.memo(({instrument, twitterSentiment, googleSentiment}) =>  {
  let stocks = useSelector(getStock);
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(requestStocksDay(instrument));
  }, [dispatch,instrument]);
  if (!instrument) {
    return <SpinnerContainer/>;
  }

  googleSentiment.forEach(function(part, index) {
    part.googlenewsperiodscreateddate = new Date(part.googlenewsperiodscreateddate).toISOString();
  });
  twitterSentiment.forEach(function(part, index) {
    part.tweetperiodscreateddate = new Date(part.tweetperiodscreateddate).toISOString();
  });

  // let test = [].concat(...third)
  // let map = new Map;
  // let a= test.reduce(function (r, o) {
  //   let temp;
  //   if (map.has(o.googlenewsperiodscreateddate)) {
  //     Object.assign(map.get(o.createddate), o);
  //   } else {
  //     temp = Object.assign({}, o);
  //     map.set(temp.createddate, temp);
  //     r.push(temp);
  //   }
  //   return r;
  // }, []);
  // let data = Object.assign({}, ...stocks, ...googleSentiment, ...twitterSentiment);
  // let first  = [ {name: 'Maxim', secondName: 'Ivanov'}, {name: 'Lena', secondName: 'Kirolova'} ];
  // let second = [ {age: 20}, {age: 18} ];
  //
  // let third = first.map((item, index) => ({...item, ...second[index]}));
  //
  // console.log(third);

  // let M = stocks.concat(googleSentiment)
  // let C = [];
  // M.forEach(function(a) {
  //   let index;
  //   if (C.some(function(c, i) { index = i; return a.createddate === c.googlenewsperiodscreateddate; })) {
  //     C[index]['googlenewsperiodscount']= c.googlenewsperiodscount;
  //   } else {
  //     C.push(a);
  //   }
  // });
  // let third = stocks.map((item, index) => ({...item, ...googleSentiment[index]}));
  // let data = third.map((item, index) => ({...item, ...twitterSentiment[index]}));
  return (
    <React.Fragment><Diagram/></React.Fragment>
  )
})