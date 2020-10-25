import {observable, computed, action, autorun,runInAction} from 'mobx';
// import {observable, computed, action} from 'mobx';
import axios from 'axios';

import p0 from '../img/p0.jpg';
import p1 from '../img/p1.jpg';
import p2 from '../img/p2.jpg';
import p3 from '../img/p3.jpg';
import p4 from '../img/p4.jpg';
import p5 from '../img/p5.jpg';
import p6 from '../img/p6.jpg';
import p7 from '../img/p7.jpg';
import p8 from '../img/p8.jpg';
import p9 from '../img/p9.jpg';
class Store {
    // constructor(price) {
    //     this.price = price;
    // }
    @observable ylList = [
        {
            "id":"1",
            "title":"刘济铭"
        }
    ]
    @observable tradeCfg = {
        'sadf':'sadf'
    };
    @observable baseInfo = {};
    @observable callback = null;
    @observable price = 0;
    @observable amount = 1;


    @computed get total() {
        return this.price * this.amount;
    }
    set total(total) {
        this.price = total / this.amount // 从 total 中推导出 price
    }
    @action
    async postApi(url,cfg,headers){
        let fd = new FormData();
        for(let key in cfg){
            fd.append(key, cfg[key]);
        }
        let	data = await axios.post(url,fd,
        {
            headers: headers
        })
        return data;
    }
    @observable token = [
        {
            "id":1,
            "name":"YD"
        },
        {
            "id":2,
            "name":"ETH"
        }
    ];
}
export default Store;
