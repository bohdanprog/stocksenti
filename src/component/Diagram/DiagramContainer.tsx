import React, {useEffect} from 'react';
import SpinnerContainer from "../Spiner/SpinnerContainer";
import {Diagram} from "./Diagram";
import {useDispatch, useSelector} from "react-redux";
import {requestChartDay} from "../../redux/stocksReducer";
import {GoogleSentimentType, TwitterSentimentType} from "../../type/types";
import {getChart} from "../../Selector/selector";
import {DiagramSecondary} from "./DiagramSecondary";
import {DiagramThird} from "./DiagramThird";

interface PropsI {
  instrument:string
  twitterSentiment: Array<TwitterSentimentType>
  googleSentiment: Array <GoogleSentimentType>
}
export const DiagramContainer: React.FC<PropsI> = React.memo(({instrument}) =>  {
  let data = useSelector(getChart);
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(requestChartDay(instrument));
  }, [dispatch,instrument]);
  if (!instrument) {
    return <SpinnerContainer/>;
  }

  return (
    <React.Fragment>
      <Diagram data={data}/>
      <DiagramSecondary data={data}/>
      <DiagramThird data={data}/>
    </React.Fragment>
  )
})