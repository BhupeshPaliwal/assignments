import {AxisModel,Tooltip,Legend,LineSeries, ChartComponent,DateTime,Inject,SeriesCollectionDirective, SeriesDirective, StepLineSeries, Zoom, ZoomSettingsModel, ScrollBar} from'@syncfusion/ej2-react-charts';
import * as React from 'react';
import { CSSTransition } from "react-transition-group";
import ShowForm from './button';
import "./FlipCard.css";


class FlipCard extends React.Component{
  constructor(props) {
  super(props);
  this.primaryXAxis = { title: 'Time (secs)', minimum: 0, maximum: 340, interval: 10,  edgeLabelPlacement:'Shift', zoomFactor: 0.3, } ;
  //this.primaryYAxis = { title:(this.state.data.devices.device) , minimum: 0, maximum: 100, interval: 10 } ;
  this.zoomsettings ={ enableMouseWheelZooming: true, enablePinchZooming: true, enableSelectionZooming: true, mode: 'X', enableScrollbar: true } ;
  this.marker = { visible: true };
  this.tooltip = { enable: true };
  this.state = {
    count: 0,
    data: null,
    data1 : []
     }
    };

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
      this.setState({count:((this.state.count+2))});
      this.setState({
        data1:this.state.data1.concat({ x: this.state.count, y: Math.floor(Math.random()*100) })
      });
      console.log(this.state.data1);             
      this.componentDidMount();
    }
    , 5000); //Set interval here
  }

  maincContent()
  {if (this.state.data.devices.device.length!==0){
    return(
      <div>
      <div>
      <ChartComponent title={this.state.data.main_title} id='charts' primaryXAxis={this.primaryXAxis} primaryYAxis={{title:(this.state.data.devices.device), minimum: 0, maximum: 100, interval: 10 }} tooltip={this.tooltip} zoomSettings={this.zoomsettings}>
        <Inject services={[LineSeries, StepLineSeries, Tooltip, DateTime,Legend, ScrollBar,Zoom]} />
        <SeriesCollectionDirective>
        <SeriesDirective dataSource={this.state.data1} xName='x' yName='y' type='Line' marker={this.marker} />
        </SeriesCollectionDirective>
      </ChartComponent>
      </div>
      </div>
      )
  }
  else
    {
      return(
    <div className="e-card " style={{ width: `1500px`, height: '650px', backgroundColor: 'pink'}}/>
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
            <div className="e-card " style={{ width: `400px`, height: '250px', backgroundColor: 'pink'}}/>:this.maincContent.bind(this)}
            </CSSTransition>
          <div className = 'button'>
            < ShowForm parentCallback = {this.handleCallback}/>
          </div>
      </div>
  );
    
  }

};
export default FlipCard;