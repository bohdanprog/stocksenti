import React from "react";
import {Col, Row} from "antd";
import Logo from "../../../Avatar/Logo";
import classes from "../TabsStyle.module.css"
import {useSelector} from "react-redux";
import {getStock} from "../../../Selector/selector";
import SpinnerContainer from "../../Spiner/SpinnerContainer";

type MainInfo = {
  instrumentphoto: string
  stocksymbols: string
  value: number
}

export const MainInfoAboutInstrument: React.FC<MainInfo> = React.memo(({instrumentphoto, stocksymbols, value}) => {
  const stocksData = useSelector(getStock);
  if(!value){
    return <SpinnerContainer/>
  }
  let averageValue:number;
  if(value !==0){
    averageValue = (value - stocksData[0].stockvalue) / value * 100 ;
  }else{
    averageValue = (value - stocksData[0].stockvalue) / 1 * 100 ;
  }
  let diffValue = Number(Number(averageValue).toFixed(2));
  return (
    <Row>
      <Col xs={24} xxl={23}>
        <div className={classes.containerView}>
            <span className={classes.containerLogo}><Logo logo={instrumentphoto}/></span>
          <div className={classes.containerStocks}>
            <h2 className={classes.stockSymbol}>{stocksymbols}</h2>
            <div className={classes.stockInfo}>
            <p className={classes.stockValue}>{value} USD<span className={classes.stockPercent}>
              {diffValue > 0 && <span style={{color: 'green'}}>{diffValue} %</span>}
              {diffValue < 0 && <span style={{color: 'red'}}>{diffValue} %</span>}
              {diffValue === 0 && <span style={{color: 'white'}}>{diffValue} %</span>}
            </span></p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  )
})