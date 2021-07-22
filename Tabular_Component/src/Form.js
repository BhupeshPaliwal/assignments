import { DropDownTreeComponent, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

import * as React from 'react';

import form_items from "./config";

export default class Form extends React.Component {
  
    constructor(props) {
        super(props);
        // definining the dataSource
        this.device_list = form_items.device_list;
        this.fields = { dataSource: this.device_list, value: 'id', text: 'name', parentValue: "pid", hasChildren: 'hasChild' };
        this.treeSettings = { autoCheck: true , loadOnDemand: true, expandon: false};
        this.focus_title = form_items.focus_title;
        this.info = form_items.info;
        this.summary = form_items.summary;
        this.display = form_items.display;
        this.state = 
        {
          main_title: '',
          devices:{ parent:[], device:[]},
          focus_title: '',
          focus_info : '',
          summary_title: '',
          summary_info: '',
          left: 'min',
          center: 'avg',
          right: 'max'
        };
    }
    componentDidMount() {
      this.props.parentCallback(this.state);
    }
    selecteddevices(value)
    {
      for (var i = 0; i < this.device_list.length; i++) { 
        if(value.includes(String(this.device_list[i].id)) && !this.device_list[i].hasChild) 
        {
          for (var j = 0; j < this.device_list.length; j++)
          {
            if(this.device_list[j].id === this.device_list[i].pid) 
            {
            this.setState({ devices:{parent: this.state.devices.parent.concat([this.device_list[j].name]), 
            device: this.state.devices.device.concat([this.device_list[i].name]) }})
            }
          }
        }
      }
    }
    
    onClick(e) {
        //console.log(this.state);
        e.preventDefault();
        if(this.state) this.props.parentCallback(this.state);
        this.setState( 
        {
          main_title: '',
          devices:{ parent:[], device:[]},
          focus_title: '',
          focus_info : '',
          summary_title: '',
          summary_info: '',
          left: 'min',
          center: 'avg',
          right: 'max'
          
        });

     }

    render() {

        return (
   
<div class = 'form' >

  <div className="upper-form">

    <div className="tit-focus">  
        <div className = "t">Title  :</div>
        <div className="tit-input"><TextBoxComponent  input={(title) => {this.setState({ main_title: title.value })}}/></div>
        <br /><br />
        <div class = "textbox">Tag to display :</div>
        <DropDownTreeComponent id="dropdowntree" fields={this.fields} showCheckBox={true} treeSettings={this.treeSettings} style= {{textAlign: 'left', width: '100', overflow:'hidden'}}
        change={(device) =>{this.selecteddevices(device.value)}} />
        <br />
        <br />
        
        <h3>Focus</h3>

        <br />        
        <div class = "textbox">Title :</div>
        <DropDownListComponent id="ddlelement" dataSource={this.focus_title}  placeholder="Select a title" 
        change={(title) =>{this.setState({ focus_title: title.value })}} />
        <div class = "textbox">Info to display :</div>
        <DropDownListComponent id="ddlelement" dataSource={this.info}  placeholder="Select a info"
        change={(info) =>{this.setState({ focus_info: info.value })}} />
        
    </div>         

    <div class='summary'> 

      <h3>Summary</h3>
      <div className = "t">Title  :</div>
      <div className="tit-input"><TextBoxComponent floatLabelType="Auto" input={(title) => {this.setState({ summary_title: title.value })}}/></div>
      <br /><br />
      <div class = "textbox">Show summary of:</div>
      <DropDownListComponent id="ddlelement" dataSource={this.summary}  placeholder="Select a info"
      change={(info) =>{this.setState({ summary_info: info.value })}} />
      <br />
      <br />
  
      <div className="l-c-r">

      <div class = "textbox">Left:</div>
      <div className="l"><DropDownListComponent id="ddlelement" dataSource={this.display}  placeholder="Select display" value = {this.state.left}
      change={(left_value) =>{this.setState({ left : left_value.value })}} /></div>
      <div class = "textbox">Center:</div>
      <div className="c"><DropDownListComponent id="ddlelement" dataSource={this.display}  placeholder="Select display" value = {this.state.center}
      change={(center_value) =>{this.setState({ center : center_value.value })}} /></div>
      <div class = "textbox">Right:</div>
      <div className="r"><DropDownListComponent id="ddlelement" dataSource={this.display}  placeholder="Select display" value = {this.state.right}
      change={(right_value) =>{this.setState({ right : right_value.value })}} /></div>

      </div>
      
    </div>

  </div>  

    <br/>

  <div className="save-conf">
    <button onClick = {this.onClick.bind(this)}>Save Config</button>
  </div>  

</div>   

        );

    }
} 

//All wrapped in div layout