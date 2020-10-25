运行环境，mac, node:v8.11.2 npm：6.4.0
```javascript
最近更新
llqfront:react-mbox taching$ node -v
node -v
v12.19.0
llqfront:react-mbox taching$ npm -v
6.14.8
一样有效
https://blog.bdplus.cn/archives/2789
```
1、创建app,

<pre><code class="language-cmd line-numbers">npx create-react-app my-app
</code></pre>

2、进入项目目录

<pre><code class="language-cmd line-numbers">cd my-app
</code></pre>



3、启用配置文件（默认是不开启配置文件的）

<pre><code class="language-cmd line-numbers">yarn eject
</code></pre>

这时候会报错，意思大概是你要把之前的文件最好提交一下git

<pre><code class="language-cmd line-numbers">git add --all 
git commit -m 'up'
</code></pre>

<pre><code class="language-cmd line-numbers">yarn eject
</code></pre>

4、提示 成功

<pre><code class="language-cmd line-numbers">success Saved lockfile.
Ejected successfully!
</code></pre>

5、启动项目（不启动配置文件也能启项目，但最好把配置打开，这样你可以更多的扩展）
这时候报错：Cannot find module  XXXX 基本的意思就是什么什么包 没有。
以前是没有这个错的，现在估计新加的，大概意思是新找开了配置（eject）后再需要安装一下

<pre><code class="language-cmd line-numbers">npm install
</code></pre>

此命令是根据package.json重新安装一下包，此命令，如果是别人的项目没有node_modules 是无法启动项目，需要npm install 后 就可以正常打开别人的项目，这主要是因为node_modules太大，一般都不会git上传。
这个时间有点久，可以把npm 改成cpm 自行（搜索，百度、bing、谷歌啥都行）

<pre><code class="language-cmd line-numbers">yarn start
</code></pre>

<pre><code class="language-tip line-numbers">Compiled successfully!

You can now view my-app in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://192.168.50.143:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
</code></pre>

<h2>ok.</h2>

接下来，是sass安装，现在没有直接写css的了，（ps:less,postcss都行，此文介绍的是sass）
1、sass 安装

<pre><code class="language-cmd line-numbers">yarn add node-sass-chokidar
</code></pre>

找到package.json中的scripts位置 替换成以下代码

<pre><code class="language-node line-numbers">"scripts": {
    "build-css": "node-sass-chokidar src/ -o src/",
    "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
    "start-js": "node scripts/start.js",
    "start": "npm-run-all -p watch-css start-js",
    "build-js": "node scripts/build.js",
    "build": "npm-run-all build-css build-js",
    "test": "node scripts/test.js --env=jsdom"
  },
</code></pre>

进行src目录，mkdir styles vi index.scss(就是sass 有两个后缀，就是写法不同，我们常用scss后缀)
进行src/index.js
增加以下代码（在原样式文件下）

<pre><code class="language-es6 line-numbers">import './index.css';（原样式文件）
import './styles/index.css';
</code></pre>

warn:/bin/sh: npm-run-all: command not found

<pre><code class="language-cmd line-numbers">yarn add npm-run-all
yarn start
</code></pre>

index.scss 增加以下代码

<pre><code class="language-css line-numbers">body {
    background: red;
}
</code></pre>

其实这时候你以已经发现了index.scss 一个并列文件index.css 而我们上面imPort时也是index.css 这就是编译后的文件，虽然写的是scss 但引入的还是css
没看出效果，你需要把原来的app.css 和index.css 的代码注释掉就可以看到

<h2>此时sass 已生效。</h2>
```javascript
报错 App.js:5 Uncaught ReferenceError: React is not defined
在app.js 中添加如下代码
import React, {Component} from 'react';
```
路由：router
ctrl +c 终止任务
1、添加路由模块

<pre><code class="language-cmd line-numbers">yarn add react-router-dom
</code></pre>

2、添加路由Router.jsx（react 中基本都是jsx后缀文件）
代码内容：

<pre><code class="language-react line-numbers">import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter} from 'react-router-dom';
import App from './App.js';

const Router = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
export default Router;
</code></pre>

3、react-hot-loader 官网解释

<blockquote>React Hot Loader is a plugin for Webpack that allows instantaneous live refresh without losing state while editing React components.</blockquote>

按我们理解就是自动更新的

<pre><code class="language-cmd line-numbers">yarn add react-hot-loader
</code></pre>

4、App.js

<pre><code class="language-react line-numbers">import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { withRouter,NavLink,Switch,Redirect,Route} from 'react-router-dom';
import home from './views/home/';
import otc from './views/otc/';
class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
    }
    render() {
    // return this.props.children;
    return (
        <div className="main">
            <Switch>
                <Route exact path="/" component={home} />
                <Route path="/otc" component={otc} />
            </Switch>

        </div>)
    }
}

export default hot(module)(App);
</code></pre>

5、index.js

<pre><code class="language-react line-numbers">import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

</code></pre>

6、mkdir views/home  views/otc
views/home/index.jsx

<pre><code class="language-react line-numbers">import React, { Component } from 'react';
import { withRouter,NavLink} from 'react-router-dom';
class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="home">
                home
                <NavLink to="/otc">otc</NavLink>
            </div>
        )
    }
}
export default Home;
</code></pre>

views/otc/index.jsx

<pre><code class="language-react line-numbers">import React, { Component } from 'react';
import { withRouter,NavLink} from 'react-router-dom';
class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="otc">
                otc
                <NavLink to="/">home</NavLink>
            </div>
        )
    }
}
export default Home;
<NavLink to="/">home</NavLink>  就是路由切换的意思
</code></pre>

8、yarn start

<pre><code class="line-numbers">稍后贴github 代码地址（https://github.com/llqfront/react/tree/master/my-app1 为源码 。稍后上传my-app 为完整）希望你是把按步骤操作一次，没有的代码上github 上取，
</code></pre>

<hr />

mobx 简单、可扩展的状态管理(https://cn.mobx.js.org/)
1、需要安装

<pre><code class="language-cmd line-numbers">yarn add mobx
yarn add mobx-react
</code></pre>

2、需要处理错误，错误代码如下（意思就是不支持这个装饰符）

<pre><code class="language-tip line-numbers">SyntaxError: /Users/hello/workspace/fe.youdeal.io/app/my-app/src/store/otc.js: Support for the experimental syntax 'decorators-legacy' isn't currently enabled (3:5):

  1 | import {observable, computed, action} from 'mobx';
  2 | class Store {
> 3 |     @observable tradeCfg = {
    |     ^
  4 |         'sadf':'sadf'
  5 |     };
  6 |     @observable baseInfo = {};
</code></pre>

还有挺爱报错的，可算解决了；
解决参考地址：
1、https://babeljs.io/docs/en/babel-plugin-proposal-decorators 
2、https://github.com/babel/babel/issues/8562
3、https://github.com/facebook/react-native/issues/21320
4、https://github.com/mobxjs/mobx-react/issues/506
5、https://github.com/zeit/next.js/issues/5231
6、https://github.com/ant-design/ant-design-pro/issues/2043
7、https://segmentfault.com/q/1010000016473651
这个问题以前是很好解决，现在有点问题，当然不是最优，但也可以。
3、.babelrc 文件 与src 并列

<pre><code class="language-node line-numbers">{
    "presets": [
        ["@babel/preset-react"]
    ],
    "plugins": [
        ["@babel/plugin-proposal-decorators", {"legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose" : true }]
    ]
}
yarn add @babel/plugin-proposal-decorators
yarn add @babel/plugin-proposal-class-properties
yarn add mobx
yarn add mobx-react
</code></pre>

文件都有改动，据体看源码(router.jsx app.js home otc 都有修改 就不贴出来了)
当然当然 使用mobx 做项目是非常方便的
yarn start
https://github.com/llqfront/react/tree/master/my-app
mobx 会有以下几个问题
第一是装饰符，那就使用.babelrc（对应模块安装）
当使用.babelrc 后 出提示mobx 找不到，再把mobx mobx-react 安装一下就行了 要打不开，
一下午已亲测成功。有问题欢迎交流
km.liu@aliyun.com
