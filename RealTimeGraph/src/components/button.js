import React, { Component } from 'react';
import Form from './form';
import "./button.css";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

class ShowForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            viewForm: false,
            data: null
    };
    }
    handleCallback = (childData) =>{
      this.setState({data: childData});
      this.props.parentCallback(this.state.data);
  }
    onClick(e) {

        this.setState({ viewForm: !this.state.viewForm });
      }

render() {
        return ( <div>
    <div className='e-btn-group'>
       <ButtonComponent id="dropdownelement" onClick = {this.onClick.bind(this)} iconCss = 'e-icons e-dots'/> 
    </div>
    {this.state.viewForm? <Form parentCallback = {this.handleCallback}/> : null}
  </div>);

}
}
export default ShowForm