import { DropDownTreeComponent, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

import * as React from 'react';
import "./form.css";
import form_items from "./config"



class Form extends React.Component {

  
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
        this.props.parentCallback(this.state);
     }
    render() {
        return (
<div class='layout'>      
<div class = 'form' >
  <div class = "textbox">Title :</div>
    <TextBoxComponent  input={(title) => {this.setState({ main_title: title.value })}}/>
  <div class = "textbox">Tag to display :</div>
    <DropDownTreeComponent id="dropdowntree" fields={this.fields} showCheckBox={false} treeSettings={this.treeSettings} style= {{textAlign: 'left'}}
    change={(device) =>{this.selecteddevices(device.value)}} />
    <div class='focus'> 
    <h4>Focus</h4>
    <hr/>
    <div class = "textbox">Title :</div>
    <DropDownListComponent id="ddlelement" dataSource={this.focus_title}  placeholder="Select a title" 
    change={(title) =>{this.setState({ focus_title: title.value })}} />
    <div class = "textbox">Info to display :</div>
    <DropDownListComponent id="ddlelement" dataSource={this.info}  placeholder="Select a info"
    change={(info) =>{this.setState({ focus_info: info.value })}} />
    </div>
    <br/>
    <div class='summary'> 
    <h4>Summary</h4>
    <hr/>
    <div class = "textbox">Title :</div>
    <TextBoxComponent floatLabelType="Auto" input={(title) => {this.setState({ summary_title: title.value })}}/>
    <div class = "textbox">Show summary of:</div>
    <DropDownListComponent id="ddlelement" dataSource={this.summary}  placeholder="Select a info"
    change={(info) =>{this.setState({ summary_info: info.value })}} />
    <div class = "textbox">Left:</div>
    <DropDownListComponent id="ddlelement" dataSource={this.display}  placeholder="Select display" value = {this.state.left}
    change={(left_value) =>{this.setState({ left : left_value.value })}} />
    <div class = "textbox">Center:</div>
    <DropDownListComponent id="ddlelement" dataSource={this.display}  placeholder="Select display" value = {this.state.center}
    change={(center_value) =>{this.setState({ center : center_value.value })}} />
    <div class = "textbox">Right:</div>
    <DropDownListComponent id="ddlelement" dataSource={this.display}  placeholder="Select display" value = {this.state.right}
    change={(right_value) =>{this.setState({ right : right_value.value })}} />
    </div>
    <br/>
    <ButtonComponent cssClass='e-info' onClick = {this.onClick.bind(this)}>Save Config</ButtonComponent>

</div>   
</div> 
        );

    }
} 

export default Form;
