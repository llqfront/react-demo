import React, { Component } from 'react';
import { HashRouter,BrowserRouter,Switch,Route} from 'react-router-dom';
import { Provider } from 'mobx-react';
// import { observable, useStrict ,autorun} from 'mobx';
// import ReactDOM from 'react-dom';
import App from './App.js';
import RootStore from './store/store.js';
const Router = () => (
    <BrowserRouter>
        <Provider {...RootStore}>
            <App/>
        </Provider>
    </BrowserRouter>
)
export default Router;