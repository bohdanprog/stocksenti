import React from 'react';
import {Button, Col, Row} from "antd";
import {BiCalendarWeek, BsCalendar} from "react-icons/all";
import {connect} from "react-redux";
import {
  requestGoogleNewsDayData,
  requestGoogleNewsMonthData,
  requestGoogleNewsWeekData,
  requestGoogleNewsYearData
} from "../../redux/GoogleNewsReducer";

class ButtonStatisticContainer extends React.Component {

  render() {
    const {instrument} = this.props;
    return (
      <Row gutter={[10]}>
        <Col className="gutter-row"  span={24}>
        <Button
          size={"middle"}
          style={{marginRight:'5px'}}
          type="primary"
          icon={<BiCalendarWeek style={{marginRight:'5px'}}/>}
          onClick={() => this.props.requestGoogleNewsDayData(instrument)}>
          Day
        </Button>
        <Button
          size={"middle"}
          style={{marginRight:'5px'}}
          type="primary"
          icon={<BiCalendarWeek style={{marginRight:'5px'}}/>}
          onClick={() => this.props.requestGoogleNewsWeekData(instrument)}>
          Week
        </Button>
        <Button
          size={"middle"}
          type="primary"
          style={{marginRight:'5px'}}
          icon={<BsCalendar style={{marginRight:'5px'}}/>}
          onClick={() => this.props.requestGoogleNewsMonthData(instrument)}>
           Month
        </Button>
        <Button
          size={"middle"}
          style={{marginRight:'5px'}}
          type="primary"
          disabled={true}
          icon={<BiCalendarWeek style={{marginRight:'5px'}}/>}
          onClick={() => this.props.requestGoogleNewsYearData(instrument)}>
           Year
        </Button>
        </Col>
      </Row>
    )
  }
}

let mapStateToProps = (state) => ({
})

export default connect(mapStateToProps,{
  requestGoogleNewsDayData,
  requestGoogleNewsWeekData,
  requestGoogleNewsMonthData,
  requestGoogleNewsYearData })(ButtonStatisticContainer);