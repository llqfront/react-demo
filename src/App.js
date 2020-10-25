import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { withRouter,NavLink,Switch,Redirect,Route} from 'react-router-dom';

import lazyLoad from './unit/lazyLoad';

const home = lazyLoad(() => import(/* webpackChunkName: "home" */ './views/home/'));
const otc = lazyLoad(() => import(/* webpackChunkName: "otc" */ './views/otc/'));

// import home from './views/home/';
// import otc from './views/otc/';
class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
    }
    render() {
    // return this.props.children;
    return (
        <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/otc" component={otc} />
        </Switch>
        )
    }
}

export default hot(module)(App);