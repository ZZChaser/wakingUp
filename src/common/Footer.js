import React, {Component} from 'react';


export default class Main extends Component{

    constructor(props){
        super(props)
    }

    render () {

        return (
            <div className="contentWidth" style={{margin:'0 auto',fontSize:'12px'}}>
                <span>Copyright@2017 四川理工学院waking up街舞社团版权所有</span>
                <span style={{marginLeft:'10px'}}>waking up交流群：1615591278</span>
                <span style={{marginLeft:'10px'}}>地址：四川自贡四川理工学院</span>
            </div>
        )
    }
}