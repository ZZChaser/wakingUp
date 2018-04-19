import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import 'normalize.css';
import './styles/common.css';
import Activity from './components/activity';
import Home from './components/home';
import Header from './common/Header';
import Footer from './common/Footer';


const BasicExample = () => (
    <Router>
        <div style={{height:'100%',backgroundImage:'url(./src/images/mainBg.jpg)',backgroundSize:'cover'}}>
            <div style={{height:'100%',width:'100%',background:'rgba(0,0,0,0.5)'}}>
                {/*头部导航*/}
                <div style={{position:'fixed',top:'10px',left:'0',right:'0'}}>
                    <div>
                        <span>四川理工学院 Waking Up 街舞社团</span>
                    </div>
                    <div style={{background:'#999',textAlign:'center'}}>
                        <Header/>
                    </div>
                </div>
                {/*中间内容部分*/}
                <div style={{width:'50%',margin:'0 auto',padding:'20px 0',height:'calc(100% - 40px)'}}>
                    <div style={{padding:'50px 0',height:'calc(100% - 140px)'}}>
                        <Route exact path="/" component={Home} />
                        <Route path="/activity" component={Activity} />
                        <Route path="/danceTypes" component={Activity} />
                        <Route path="/crewCulture" component={Activity} />
                        <Route path="/crewHistory" component={Activity} />
                        <Route path="/contact" component={Activity} />
                    </div>
                </div>
                {/*底部信息*/}
                <div style={{position:'fixed',bottom:'0',left:'0',right:'0'}}>
                    <Footer/>
                </div>
            </div>
        </div>
    </Router>
);


ReactDOM.render(
    <BasicExample/>,
    document.getElementById('content')
);

