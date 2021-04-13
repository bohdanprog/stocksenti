import './App.css';
import React, {Suspense, useState} from "react";
import 'antd/dist/antd.css';
import {Col, Layout, Row} from 'antd';
import {BrowserRouter, Route} from 'react-router-dom'
import {Redirect, Switch} from "react-router";
import {Provider} from "react-redux";
import store from "./redux/ReduxStore";
import MenuItemContainer from "./component/MenuItem/MenuItemContainer";
import SpinnerContainer from "./component/Spiner/SpinnerContainer";
import Page404Container from "./component/Page404/Page404Container";
import NavBar from "./component/NavBar/NavBar";
import SideBar from "./component/SideBar/SideBar";

const MainContainer = React.lazy(() => import('./component/Main/MainContainer'));
const BitcoinContainer = React.lazy(() => import('./component/Bitcoin/BitcoinContainer'));
const TeslaContainer = React.lazy(() => import('./component/Tesla/TeslaContainer'));
const FeedbackContainer = React.lazy(() => import('./component/Feedback/FeedbackContainer'));


const {Footer} = Layout;

const MainApp = () => {
  const [contentIndex, setContentIndex] = useState(0);
  const [selectedKey, setSelectedKey] = useState("0");

  const changeSelectedKey = (event) => {
    const key = event.key;
    setSelectedKey(key);
    setContentIndex(+key);
  };

  const Menu = (
    <MenuItemContainer selectedKey={selectedKey} changeSelectedKey={changeSelectedKey}/>
  );
  return (
    <React.Fragment>
      <NavBar menu={Menu} />
      <Layout style={{backgroundColor:'#fff'}}>
        <SideBar menu={Menu} />
        <Layout style={{width:'100%', backgroundColor:'#fff'}} className="site-layout-background ">
          <Row>
            <Col xs={24} xxl={24}>
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
            </Col>
          </Row>
          <Row>
            <Col xs={24} xl={24} style={{width:'100%', height:'100%'}}>
              <Footer style={{backgroundColor: '#fff', padding: '50px', textAlign: 'center'}}>Stocksenti 2021</Footer>
            </Col>
          </Row>
        </Layout>
      </Layout>
    </React.Fragment>
  );
}

const StockSend = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MainApp/>
      </Provider>
    </BrowserRouter>
  )
}

export default StockSend;
