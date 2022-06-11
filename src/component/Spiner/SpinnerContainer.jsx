import React from 'react';
import {Spin} from "antd";

const SpinnerContainer = () => {
  return (
    <Spin style={{marginLeft:'10px'}} tip="Loading...">
    </Spin>
  )
}

export default SpinnerContainer;