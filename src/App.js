import './App.css';
import React, {Suspense, useState} from "react";
import 'antd/dist/antd.css';
import {Col, Layout, Row} from 'antd';
import {BrowserRouter, Route} from 'react-router-dom'
import {Redirect, Switch} from "react-router";
import {Provider, useSelector} from "react-redux";
import store from "./redux/ReduxStore";
import MenuItemContainer from "./component/MenuItem/MenuItemContainer";
import SpinnerContainer from "./component/Spiner/SpinnerContainer";
import Page404Container from "./component/Page404/Page404Container";
import NavBar from "./component/NavBar/NavBar";
import SideBar from "./component/SideBar/SideBar";
import {getInstrumentInfo} from "./Selector/selector";
import {MainTabs} from "./component/mainTabs/MainTabs";
import {PostsPage} from "./component/Feedback/PostsPage";
import {Documentation} from "./component/Documentation/Documentation";

const MainContainer = React.lazy(() => import('./component/Main/MainContainer'));

const {Footer} = Layout;

const MainApp = () => {
  const [setContentIndex] = useState(0);
  const [selectedKey, setSelectedKey] = useState("0");

  const changeSelectedKey = (event) => {
    const key = event.key;
    setSelectedKey(key);
    setContentIndex(+key);
  };

  const Menu = (<MenuItemContainer selectedKey={selectedKey} changeSelectedKey={changeSelectedKey}/>);

  let listInstrument = useSelector(getInstrumentInfo);
  const listInstruments = listInstrument.map((i) => <Route path={`/${i.instruments}`} render={() =>
      <MainTabs instrumentphoto={i.instrumentphoto} stocksymbols={i.stocksymbols}
                instrument={i.instruments} key={i.toString()}/>}/>);

  return (
    <React.Fragment>
      <Row align={'middle'} justify={'center'}>
        <Col xs={23} xxl={18}>
      <NavBar menu={Menu} />
      <Layout style={{backgroundColor:'#fff'}}>
        <SideBar menu={Menu} />
        <Layout style={{width:'100%', backgroundColor:'#fff'}} className="site-layout-background ">
          <Row>
            <Col xs={24} xxl={24}>
                <Suspense fallback={<SpinnerContainer/>}>
                  <Switch>
                    <Route path='/main' render={() => <MainContainer/>}/>
                    {listInstruments}
                    <Route path='/comment' render={() => <PostsPage/>}/>
                    <Route path='/documentation' render={() => <Documentation/>}/>
                    <Route path='/page404' render={() => <Page404Container/>}/>
                    <Route path='/' render={() => <MainContainer/>} />
                    <Route render={() => <Redirect to={{pathname: "/page404"}}/>}/>
                  </Switch>
                </Suspense>
            </Col>
          </Row>
          <Row>
            <Col xs={24} xl={24}>
              <Footer style={{backgroundColor: '#fff', padding: '50px', textAlign: 'center'}}>Stocksenti 2021</Footer>
            </Col>
          </Row>
        </Layout>
      </Layout>
      </Col>
      </Row>
    </React.Fragment>
  );
}

const StockSenti = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MainApp/>
      </Provider>
    </BrowserRouter>
  )
}

export default StockSenti;
