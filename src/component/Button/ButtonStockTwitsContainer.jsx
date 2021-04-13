import React from 'react';
import {Button, Row} from "antd";
import {BiCalendarWeek, BsCalendar} from "react-icons/all";
import {connect} from "react-redux";
import {requestGoogleNewsMonthData} from "../../redux/GoogleNewsReducer";

class ButtonStatisticContainer extends React.Component {

  render() {
    // const {instrument} = this.props;
    return (
      <Row gutter={20}>
        <Button
          size={"middle"}
          type="primary"
          style={{marginRight:'5px'}}
          icon={<BsCalendar style={{marginRight:'5px'}}/>}>
           Month
        </Button>
        <Button
          size={"middle"}
          style={{marginRight:'5px'}}
          type="primary"
          icon={<BiCalendarWeek style={{marginRight:'5px'}}/>}>
           Week
        </Button>
        <Button
          size={"middle"}
          style={{marginRight:'5px'}}
          type="primary"
          icon={<BiCalendarWeek style={{marginRight:'5px'}}/>}>
           Year
        </Button>
      </Row>
    )
  }
}

let mapStateToProps = (state) => ({
})

export default connect(mapStateToProps,{ requestGoogleNewsMonthData })(ButtonStatisticContainer);