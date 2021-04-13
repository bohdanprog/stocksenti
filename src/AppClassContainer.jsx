import React, {Component, Suspense} from "react";
import SpinnerContainer from "./component/Spiner/SpinnerContainer";
import {Col, Layout, Menu, Row} from "antd";
import MenuItemContainer from "./component/MenuItem/MenuItemContainer";
import Patreon from "./assets/patreon.png";
import BMC from "./assets/by-me-a-coffee.png";
import {Redirect, Switch, withRouter} from "react-router";
import {Route} from "react-router-dom";
import Page404Container from "./component/Page404/Page404Container";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({collapsed});
  };

  render() {
    const {collapsed} = this.state;

    if (!this.props.initialized) {
      return <SpinnerContainer/>;
    }
    return (
      <React.Fragment>
        <Layout className="site-layout-background App">
          <Row>
            <Col xs={24} xxl={24} span={24}>
              {/*<div className="logo" />*/}
              <Sider breakpoint="xs"
                     collapsedWidth={0}
                     style={{width: '100%', height: '100%', paddingTop: '50px'}} collapsible collapsed={collapsed}
                     onCollapse={this.onCollapse}>
                <MenuItemContainer/>
              </Sider>
            </Col>
          </Row>
          <Layout>
            <Header className="header">
              <Row justify='end'>
                <Col xs={4} xl={4} offset={4} align='right'>
                  <div className="logo"/>
                  <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="1"><img alt={'patreon'} src={Patreon} style={{width: '24px'}}/> Patreon</Menu.Item>
                    <Menu.Item key="2"><img alt={'by-me-a-coffee'} src={BMC} style={{width: '24px'}}/> Buy me a
                      coffee</Menu.Item>
                  </Menu>
                </Col>
              </Row>
            </Header>
            <Layout className="site-layout site-layout-background"
                    style={{paddingTop: '40px', backgroundColor: '#fff'}}>
              <Row>
                <Col xs={24} xl={24}>
                  <div className="site-layout-background">
                    <Suspense fallback={<SpinnerContainer/>}>
                      <Switch>
                        <Route path='/main' render={() => <MainContainer/>}/>
                        <Route path='/tesla' render={() => <TeslaContainer/>}/>
                        <Route path='/bitcoin' render={() => <BitcoinContainer/>}/>
                        <Route path='/comment' render={() => <FeedbackContainer/>}/>
                        <Route path='/page404' render={() => <Page404Container/>}/>
                        <Route render={() => <Redirect to={{pathname: "/page404"}}/>}/>
                      </Switch>
                    </Suspense>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={24} xl={24}>
                  <Footer style={{backgroundColor: '#fff', padding: '50px', textAlign: 'center'}}>Stock send I
                    2021</Footer>
                </Col>
              </Row>
            </Layout>
          </Layout>
        </Layout>
      </React.Fragment>
    );
  }
}

let mapStateToProps = (state) => (
  {
    initialized: state.app.initialized,
  })

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App);