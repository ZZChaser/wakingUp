import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import 'normalize.css';
import './styles/common.less';
import Activity from './components/activity';
import Home from './components/home';
import Header from './common/Header';
import Footer from './common/Footer';


const BasicExample = () => (
    <Router>
        <div style={{height:'100%',backgroundImage:'url(./src/images/mainBg.jpg)',backgroundSize:'cover'}}>
            <div style={{height:'100%',width:'100%',background:'rgba(0,0,0,0.5)'}}>

                {/*头部导航*/}
                <div style={{position:'fixed',top:'0',width:'100%'}}>
                    <Header/>
                </div>

                {/*中间内容部分*/}
                <div className="contentWidth" style={{margin:'0 auto',position:'relative',height:'calc(100% - 200px)',background:'#333',top:'140px'}}>
                    <Route exact path="/" component={Home} />
                    <Route path="/activity" component={Activity} />
                    <Route path="/danceTypes" component={Activity} />
                    <Route path="/crewCulture" component={Activity} />
                    <Route path="/crewHistory" component={Activity} />
                    <Route path="/contact" component={Activity} />
                </div>

                {/*底部信息*/}
                <div style={{position:'fixed',bottom:'0',width:'100%',height:'40px',lineHeight:'40px'}}>
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

