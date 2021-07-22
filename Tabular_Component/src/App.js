import React, { Component } from 'react';
import Table from './table.js';
import 'antd/dist/antd.css';
import './index.css';
import Form from './Form.js';
import "./form.css";
import {ExportCSV} from './ExportCSV';
import { Popover, Button } from 'antd';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            scroll: false,
            search: "",
            counter: 0,
            mainTitle: "Title here",
            list: [],
            visible: false
        };
        this.switchscroll = this.switchscroll.bind(this);
        this.handlesearch = this.handlesearch.bind(this);
        this.increaseCounter = this.increaseCounter.bind(this);
        this.decreaseCounter = this.decreaseCounter.bind(this);
        this.handleCallback = this.handleCallback.bind(this);
    }
    handleCallback(childData){
        this.setState({ visible: !this.state.visible });
        if ( childData.main_title!=='' || childData.devices.device.length>0 ) {

            var data = childData;
            var newlist = data.devices.device.map(rowElement=>{
                return { "param":rowElement, "current":0, "avg":0, "max":0, "min":0 }
            });
            for(var i=0; i<newlist.length; ++i){
                newlist[i].parentDevice = data.devices.parent[i];
            };
            this.setState({ mainTitle: data.main_title, list: newlist });
        }
        console.log(this.state.list);
    }
    switchscroll(e){
        e.preventDefault();
        var scroll = this.state.scroll; 
        this.setState({ scroll: !scroll, counter: 0 });
    }
    handlesearch(e){
        e.preventDefault();
        this.setState({ search: e.target.value });
    }
    increaseCounter(e){
        e.preventDefault();
        var counter = this.state.counter;
        var list = this.state.list;
        var scroll = this.state.scroll;
        if( counter<parseInt(list.length/5) && !scroll ) this.setState({ counter: counter+1 });
    }
    decreaseCounter(e){
        e.preventDefault();
        var counter = this.state.counter;
        if(counter>0 && !this.state.scroll ) this.setState({ counter: counter-1 });
    }
    componentDidMount(){
        const interval = setInterval(() => {
        if(this.state.list) {
            var newValues = this.state.list.map(row=>{
            //row.param=row.param;
                row.current=(100*Math.random()).toFixed(2);
                row.avg=(100*Math.random()).toFixed(2);
                row.max=(100*Math.random()).toFixed(2);
                row.min=(100*Math.random()).toFixed(2);
                return row;
            })
            var counter =   this.state.counter;
            var list = this.state.list;
            if(counter <= (parseInt((list.length)/5)) && !this.state.scroll && this.state.search==="") counter===parseInt(list.length/5)? this.setState({ counter: 0 }):this.setState({ counter: counter+1 });
            this.setState({ list: newValues });
        };
        }, 8000);
        return () => clearInterval(interval);
    };
   
    render(){

        const content = ( <Form parentCallback = {this.handleCallback} /> );

        const navig = (

            <div className="tab-end">

                <div className="tab-btns"><button onClick={this.decreaseCounter}><i class="material-icons">arrow_back_ios</i></button></div>

                <div className="page-no">{this.state.counter+1}</div>
                
                <div className="tab-btns"><button onClick={this.increaseCounter}><i class="material-icons">arrow_forward_ios</i></button></div>

            </div>
        );

        return  (

            <div className="tabular">

                <div className="top">

                    <div className="tit">{this.state.mainTitle}</div>

                    <i class="material-icons">search</i><div className="tab-btns"><input value={this.state.search} onChange={this.handlesearch} placeholder="Search..." type="text" /></div>

                    <div className="tab-btns"><ExportCSV csvData={this.state.list} fileName={this.state.mainTitle} /></div>
                
                    <div className="tab-end">
                        <Popover 
                        placement="bottomRight" 
                        content={content} 
                        trigger="click"
                        visible={this.state.visible}
                        handleVisibleChange={(visible)=>{}}
                        >
                            <Button onClick={()=>{this.setState({ visible: !this.state.visible })}}><i class="material-icons">settings</i></Button>
                        </Popover>
                    </div>

                </div>            
                    
                <div className="all-tables">

                    <div className="headings">

                        <thead>
                            <th className="has-para">Parameter</th>
                            <th>Current</th>
                            <th>Average</th>
                            <th>Maximum</th>
                            <th>Minimum</th>          
                        </thead>

                    </div>

                    <div className="scrollon">

                        <Table rows={this.state.list} search={this.state.search} counter={this.state.counter} scroll={this.state.scroll} />

                    </div>    

                </div>    

                <div className="bottom">
                
                    <div className="tab-btns-scroll"><button onClick={this.switchscroll}>SCROLL</button></div>

                    { !this.state.scroll ? navig : null }    

                </div>

            </div>
        );
    }
}