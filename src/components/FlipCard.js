import React, { Component } from 'react';
import { CSSTransition } from "react-transition-group";
import "./FlipCard.css";
import ShowForm from './button';
import {Category, ChartComponent, Inject, SplineSeries, SeriesDirective, SeriesCollectionDirective, Legend, DataLabel, Tooltip} from "@syncfusion/ej2-react-charts";
import {salesData, temperaturedata, volumeData} from './data';







class FlipCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 0,
        data: null,
        values: {
          'value': null,
          'min': null ,
          'avg': null,
          'max': null
        }
};
    
}
    handleCallback = (childData) =>{
      this.setState({data: childData});
    }
    componentDidMount() {
      this.timeout = setTimeout(() => {
        if(this.state.data == null)
        {this.len = 1;}
        else
        {
          if(this.state.data.devices.device.length === 0)
        {this.len = 1;}
        else{
          this.len = this.state.data.devices.device.length;
        }
      }
        this.setState({count:((this.state.count+1)%this.len)});
        this.setState({values: {
          'value': Math.floor(Math.random()*20),
          'min': Math.floor(Math.random()*5) ,
          'avg': Math.floor(Math.random()*10),
          'max': Math.floor(Math.random()*50)
        }});             
        this.componentDidMount();
      }
      , 2000); //Set interval here
    }
  maincContent()
  {if (this.state.data.devices.device=="Temperature")
    {
    return(
      <div className="e-card " style={{ width: `1000px`, height: '1000px', backgroundColor: 'green'}}>
    <div class="e-card-header" > 
    <div className="e-card-header-caption">
    <ChartComponent title={this.state.data.main_title} primaryXAxis={{valueType:"Category", title:"Month"}} 
primaryYAxis={{title:"Temperature"}} legendSettings={{visible:true}} tooltip={{enable:true}}>
  <Inject services={[SplineSeries, Category, Legend, DataLabel,Tooltip]}></Inject>
  <SeriesCollectionDirective>
    <SeriesDirective 
    type="Spline" 
    dataSource={temperaturedata}
    xName="month"
    yName="Temperature"
    name="Temperature"
    marker={{dataLabel:{visible: true}, visible:true}}
    ></SeriesDirective>
  </SeriesCollectionDirective>
</ChartComponent>
      {/* <div className="e-card-title" style ={{position: 'absolute', left: '10px',top: '0', fontSize: '250%', fontStyle: 'initial'}}>
        {this.state.data.devices.device[this.state.count]}
        </div>
               
    </div>
      </div>
      <div className="e-card-content" style = {{position: 'absolute', right: '10px',bottom: '110px', fontStyle: 'Georgia', fontSize: '500%'}}>
    { this.state.values['value']}
    </div>
    <div style = {{position: 'absolute', left: '10px',bottom: '100px', fontStyle: 'Georgia', fontSize: '100%'}}>
    {'Summary' }
    </div>
    <div className =' e-card-horizontal' style = {{position: 'relative', top: '50px'}}>
    <div className="e-card-content" style = {{position: 'relative', right: '90px', fontWeight: 'bold'}} >
    {this.state.data.left}
    <div className="e-card-content">{this.state.data.left === 'N.A.'? null : this.state.values[this.state.data.left]} </div>
    </div>
    <div className="e-card-content" style = {{position: 'relative', fontWeight: 'bold'}}>
    {this.state.data.center}
    <div className="e-card-content">{this.state.data.center === 'N.A.'? null : this.state.values[this.state.data.center]} </div>
    </div>
    <div className="e-card-content" style = {{position: 'relative', left: '90px', fontWeight: 'bold'}}>
    {this.state.data.right}
    <div className="e-card-content">{this.state.data.right === 'N.A.'? null : this.state.values[this.state.data.right]} </div> */}
    </div>
    </div>
    </div>
      );
    }
    else if (this.state.data.devices.device=="Volume") {
      return(
      <div className="e-card " style={{ width: `1000px`, height: '1000px', backgroundColor: 'green'}}>
    <div class="e-card-header" > 
    
    <div className="e-card-header-caption">
    <ChartComponent title={this.state.data.main_title}  primaryXAxis={{valueType:'Category', title:"month"}} 
primaryYAxis={{title:"Volume"}} legendSettings={{visible:true}} tooltip={{enable:true}}>
  <Inject services={[SplineSeries, Category, Legend, DataLabel,Tooltip]}></Inject>
  <SeriesCollectionDirective>
    <SeriesDirective 
    type="Spline" 
    dataSource={volumeData}
    xName="month"
    yName="Volume"
    name="Volumeplot"
    marker={{dataLabel:{visible: true}, visible:true}}
    ></SeriesDirective>
  </SeriesCollectionDirective>
</ChartComponent>
      
    </div>
    </div>
    </div>
      ); 
    }
    else
    {
      return(
    <div className="e-card " style={{ width: `1000px`, height: '1000px', backgroundColor: 'green'}}/>
      );
    }
  }

 


  render() {
  return (
      
      <div className="main">
        <CSSTransition
      key={this.state.count}
      addEndListener={(node, done) => {
        node.addEventListener("transitionend", done, false);
      }}
      classNames="fade"
    >
          
            
            {!this.state.data?
            <div className="e-card " style={{ width: `1000px`, height: '1000px', backgroundColor: 'green'}}/>:this.maincContent.bind(this)}
            </CSSTransition>
          <div className = 'button'>
            < ShowForm parentCallback = {this.handleCallback}/>
          </div>
      </div>
  );
}
}

export default FlipCard;