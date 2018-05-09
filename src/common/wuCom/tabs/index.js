
 /*
 Created by Administrator on 2018/4/19
*/

 import React, {Component} from 'react';
 import './style/index.less';

 export default class Main extends Component {

     constructor(props){
         super(props);
         const { datas = [], activeKey = 0 } = this.props;
         this.state = {
             datas,
             activeKey
         }
     }

     switchTabs (item) {
         this.setState({activeKey:item.key});
         this.props.onChange && this.props.onChange(item)
     }

     render () {

         const { datas = [], activeKey = 0 } = this.state;
         // datas = [
         //     {
         //         key : 0,
         //         name : 'tab1'
         //     },{
         //         key : 2,
         //         name : 'tab2'
         //     }
         // ]

         return (
             <div className="wu-com-tabs">
                 <ul>
                     {
                         datas.map(item => {
                            return (
                                <li
                                    key={item.key}
                                    className={Number(item.key) === Number(activeKey) ? 'active' : ''}
                                    onClick={() => this.switchTabs(item)}
                                >
                                    {item.name}
                                </li>
                            )
                         })
                     }
                 </ul>
             </div>
         )
     }
 }