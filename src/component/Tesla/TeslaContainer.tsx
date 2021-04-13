import React from "react";
import {requestStocks} from "../../redux/stockReducer";
import Tesla from "./Tesla";
import SpinnerContainer from "../Spiner/SpinnerContainer";
import {AppStateType} from "../../redux/ReduxStore";
import {connect} from "react-redux";
import {compose} from "redux";


type MapStatePropsType = {

}
type MapDispatchPropsType = {

}

type OwnPropsType = {

}


type PropsType ={
    instrument: string | null
    requestStocks: () => void
    logo: string | null
}

class TeslaContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.requestStocks();

  }

  render() {
    const { instrument, logo } = this.props;
    if (!instrument) {
      return <SpinnerContainer/>;
    }
    return (
      <React.Fragment><Tesla logo ={logo} instrument={instrument}/></React.Fragment>
    )
  }
}

let mapStateToProps = (state: AppStateType) => ({
    logo: state.stocksInfo.entityConfigList[0].instrumentphoto,
    instrument: state.stocksInfo.entityConfigList[0].instruments
})

export default compose (
    connect(mapStateToProps, {requestStocks})) (TeslaContainer);