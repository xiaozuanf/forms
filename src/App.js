import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import Project from './pages/project'
import Board from './pages/board'
function App() {
  return (
    <Router>
      <div className="container">
        <div className="container-mould">
          <h1 className="title">小钻风个人博客</h1>
          <div className="subTitle">记录工作项目中遇到的问题,分享tips</div>
          <ul className="router-list clearfix">
            <li class="router-li"><Link to="/home">首页</Link></li>
            <li class="router-li"><Link to="/project">项目</Link></li>
            <li class="router-li"><Link to="/board">留言板</Link></li>
          </ul>
          <Route path="/home" component={Home}></Route>
          <Route path="/project" component={Project}></Route>
          <Route path="/board" component={Board}></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
