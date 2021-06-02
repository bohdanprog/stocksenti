import React from "react";
import {Col, Row} from "antd";
import Logo from "../../../Avatar/Logo";
import classes from "../TabsStyle.module.css"

type MainInfo = {
  instrumentphoto: string
  stocksymbols: string
  value: number | null
}

export const MainInfoAboutInstrument: React.FC<MainInfo> = React.memo(({instrumentphoto, stocksymbols, value}) => {

  return (
    <Row>
      <Col xs={24} xxl={23}>
        <div className={classes.containerView}>
            <span className={classes.containerLogo}><Logo logo={instrumentphoto}/></span>
          <div className={classes.containerStocks}>
            <h2 className={classes.stockSymbol}>{stocksymbols}</h2>
            <div className={classes.stockInfo}>
            <p className={classes.stockValue}>{value} USD</p>
            <p className={classes.stockPercent}>0.5 %</p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  )
})