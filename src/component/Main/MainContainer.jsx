import React from "react";
import classes from "./Container.module.css";

class MainContainer extends React.Component {
  render() {
    return (
      <div >        
          <h2 ><b>Stocksenti</b></h2>
          <h3>Sentimental analysis of financial instruments</h3>
          
          <img src='http://attendify.com/blog//wp-content/uploads/2018/02/sentiment-analysis.gif' style={{width:'75%', height:'75%' }}></img>
          <h3>We want to help you with giving you this powerfull information</h3>
          <h4>Twitter sentiment analysis</h4><h4>GoogleNews financial sentiment analysis</h4>
        </div>
    )
  }
}

export default MainContainer;