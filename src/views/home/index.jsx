import React, { Component } from 'react';
import {observer,inject} from 'mobx-react';
import { withRouter,NavLink} from 'react-router-dom';
// 导入需要的模块
@withRouter
@inject('otc')
@observer
class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const ylList = this.props.otc.ylList;
        return (
            <div>
                 home<br/>
                 {ylList[0].title}
                <NavLink to="/otc">otc</NavLink><br/>
                <NavLink to="/">home</NavLink>
            </div>
        )
    }
}
export default Home;