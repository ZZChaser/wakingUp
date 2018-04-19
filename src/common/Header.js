import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import '../styles/header.less';
import {Tabs} from 'wuCom'

class Main extends Component{

    constructor(props){
        super(props);
    }

    switchTabs (key) {
       switch (Number(key)) {
           case 0 :
               this.props.history.push('/');
               break;
           case 1 :
               this.props.history.push('/activity');
               break;
           case 2 :
               this.props.history.push('/danceTypes');
               break;
           case 3 :
               this.props.history.push('/crewCulture');
               break;
           case 4 :
               this.props.history.push('/crewHistory');
               break;
           case 5 :
               this.props.history.push('/contact');
               break;
       }
    }

    render () {

        let tabs = [
            {
                key : 0,
                name : '首页',
            },{
                key : 1,
                name : '最新活动',
            },{
                key : 2,
                name : '舞种介绍',
            },{
                key : 3,
                name : '社团文化',
            },{
                key : 4,
                name : '社团历史',
            },{
                key : 5,
                name : '联系我们',
            }
        ];

        return (
            <div className="wu-header">
                <div>

                </div>
                <header>
                    <Tabs
                        datas={tabs}
                        onChange={key => this.switchTabs(key)}
                    />
                </header>
            </div>
        )
    }
}

export default withRouter(Main)


