import React, { Component } from 'react';
import { CircularGaugeComponent, AxesDirective, AxisDirective,
     PointersDirective, PointerDirective, RangeDirective,
      RangesDirective, AnnotationsDirective,AnnotationDirective,
      Annotations,Inject,Legend } from '@syncfusion/ej2-react-circulargauge';
import "./gauge.css";
import { CSSTransition } from "react-transition-group";
import ShowForm from './button';


class Gauge extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
          console.log(this.state.data);
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
        this.setState({values: {
          'value': Math.floor(Math.random()*100)
        }});             
        this.componentDidMount();          }
      , 200); //Set interval here
            
          }
    
    render() {
    return (
        
        <div className="main">
            
            <CircularGaugeComponent id='circulargauge'width='400' height='350'  x='1000' y='1500'
               legendSettings=
               {{
                visible: true,
               position: 'Top',
               opacity: 100,
               alignment: 'Near',
               location: { x: 100, y: 150 },
               toggleVisibility: true
                
                }}>
               <Inject services={[Annotations,Legend]}/>
                 <AxesDirective>
                     <AxisDirective>
                     <RangesDirective>
                 <RangeDirective start={0} end={25} radius='108%' color = 'red' legendText='low'></RangeDirective>
                 <RangeDirective start={25} end={50} radius='108%' color = 'blue' legendText='medium'></RangeDirective>
                 <RangeDirective start={50} end={75} radius='108%' color = 'yellow' legendText='high'></RangeDirective>
                 <RangeDirective start={75} end={100} radius='108%' color= 'orange' legendText='very high'></RangeDirective>
                 </RangesDirective>
                     <PointersDirective>
                 <PointerDirective value={this.state.data != null?this.state.values.value:0}
                 animation={{
                     enable: false,
                     duration: 100,
                 }}>
                 </PointerDirective>
                 </PointersDirective>
                 <AnnotationsDirective>
                 <AnnotationDirective content = {this.state.data != null?this.state.values.value:'0'} zIndex='1'/>
                 </AnnotationsDirective>
                 </AxisDirective>
             </AxesDirective>
             < div className = 'button'>
            <ShowForm parentCallback = {this.handleCallback}/>
            </div>
             </CircularGaugeComponent>
             <div className="e-card " style={{ width: `400px`, height: '200px', backgroundColor: 'white'}}>
        <div className="e-card-content"  style={{ position: 'relative', fontWeight: 'bold'}}>
          {"Title: "}  {this.state.data != null?this.state.data.main_title:null}
        </div>
        <div className="e-card-content"  style={{ position: 'relative', fontWeight: 'bold'}}>
          {"Device: "}  {this.state.data != null?this.state.data.devices.parent[0]:null}
        </div>
        <div className="e-card-content"  style={{ position: 'relative', fontWeight: 'bold'}}>
          {"Sensor: "}  {this.state.data != null?this.state.data.devices.device[0]:null}
        </div>
        <div className ='e-card-horizontal'>
            <div className="e-card-content"  style={{ position: `relative`, right: '60px', fontWeight: 'bold'}}>
            {this.state.data != null?this.state.data.left:null}
            <div>{this.state.data != null?(this.state.data.left === 'N.A.'? null : Math.floor(Math.random()*50)):null}</div>
            </div>
            <div  className="e-card-content"  style={{ position: `relative`, fontWeight: 'bold'}}>
            {this.state.data != null?this.state.data.center:null}
            <div>{this.state.data != null?(this.state.data.center === 'N.A.'? null : Math.floor(Math.random()*50)):null}</div>
            </div>
            <div className="e-card-content" style={{ position: `relative`, left: '60px', fontWeight: 'bold'}}>
            {this.state.data != null?this.state.data.right:null}
            <div>{this.state.data != null?(this.state.data.right === 'N.A.'? null : Math.floor(Math.random()*50)):null}</div>
            </div>
            </div>
            </div>

        </div>
    );
  }
  }
  

  export default Gauge;