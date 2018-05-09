import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import '../styles/header.less';
import { Tabs } from 'wuCom';

class Main extends Component{

    constructor(props){
        super(props);
    }

    render () {

        const tabs = this.getTabs();

        return (
            <div className="wu-header">
                <div className="contentWidth" style={{margin:'10px auto'}}>


                    <h2 style={{margin:'0px'}}>四川理工学院 Waking Up 街舞社团</h2>
                    <p>Sichuan University of Science and Engineering waking up crew</p>
                </div>
                <div style={{background:'#333'}}>
                    <header className="contentWidth" style={{margin:'0 auto'}}>
                        <Tabs
                            datas={tabs}
                            onChange={tab => this.switchTabs(tab)}
                        />
                    </header>
                </div>
            </div>
        )
    }


    //切换导航
    switchTabs = (tab) => {
        const router = tab.src;
        this.props.history.push(router);

    }

    //获取导航数据
    getTabs = () => {
        let tabs = [
            {
                key : 0,
                name : '首页',
                src : '/'
            },{
                key : 1,
                name : '最新活动',
                src : '/activity'
            },{
                key : 2,
                name : '舞种介绍',
                src : '/danceTypes'
            },{
                key : 3,
                name : '社团文化',
                src : '/crewCulture'
            },{
                key : 4,
                name : '社团历史',
                src : '/crewHistory'
            },{
                key : 5,
                name : '联系我们',
                src : '/contact'
            }
        ];
        return tabs;
    }
}

export default withRouter(Main)




