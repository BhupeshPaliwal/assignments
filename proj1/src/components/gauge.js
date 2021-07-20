import React, { Component } from 'react';
import { CircularGaugeComponent, AxesDirective, AxisDirective,
     PointersDirective, PointerDirective, RangeDirective,
      RangesDirective, AnnotationsDirective,AnnotationDirective,
      Annotations,Inject,Legend } from '@syncfusion/ej2-react-circulargauge';
import "./gauge.css";
import { CSSTransition } from "react-transition-group";
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import ShowForm from './button';
const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }
    .imageStyle {
        width: 16px;
        height: 16px;
        margin-top: 4px;
    }
        
    .fontDes {
        float: right;
        padding-left: 5px;
        color:#424242;
        font-size:20px;
        font-family:Roboto";
    }
    .fontDes1 {
        color:#9E9E9E;
        font-size:16px;
        font-family:Roboto";
    }
    `;


class Gauge extends Component {
    constructor(props) {
        super(props);
        this.state = {
              data: null,
            values: {
              'value': null,
              'value1': null,
              'value2': null,
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
          'value': Math.floor(Math.random()*100),
          'value1': Math.floor(Math.random()*101),
          'value2': Math.floor(Math.random()*102),
          'min': Math.floor(Math.random()*5) ,
          'avg': Math.floor(Math.random()*10),
          'max': Math.floor(Math.random()*50)
        }});             
        this.componentDidMount();          }
      , 200); //Set interval here
            
          }
    
    render() {
    return (
        <div className="main">
    
          <Inject services={[Annotations]}/> 
        
      
       
          <div className='control-pane'>
          <style>
                    {SAMPLE_CSS}
                </style>
                    
                    <div className='control-section'>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <CircularGaugeComponent style={{ height: "250px" }} id='sample1-container'>
                                            <Inject services={[Annotations]} />
                                            <AxesDirective>
                                                <AxisDirective startAngle={230} endAngle={130} minimum={0} maximum={100}
                                                    lineStyle={{
                                                        width: 0
                                                    }}
                                                    majorTicks={{
                                                        width: 0
                                                    }}
                                                    minorTicks={{
                                                        width: 0
                                                    }} labelStyle={{
                                                        font: { size: '0' }
                                                    }}>
                                                    <AnnotationsDirective>
                                                        <AnnotationDirective
                                                            content={this.state.data != null?this.state.values.value:'0'}
                                                            angle={180} zIndex='1'
                                                            radius='30%' />
                                                        <AnnotationDirective
                                                            content='<div class="fontDes1">Germany</div>'
                                                            angle={180} zIndex='1'
                                                            radius='65%' />
                                                    </AnnotationsDirective>
                                                    <RangesDirective>
                                                        <RangeDirective start={0} end={50} startWidth={15} endWidth={15} color='#EC121C' />
                                                        <RangeDirective start={50} end={100} startWidth={15} endWidth={15} color='#45EA0C' />
                                                    </RangesDirective>
                                                    <PointersDirective>
                                                    <PointerDirective value={this.state.data != null?this.state.values.value:0}
                 animation={{
                     enable: false,
                     duration : 10000,
                 }}>
                                                            pointerWidth={5}
                                                            cap={{
                                                                radius: 6,
                                                                border: { width: 0 }
                                                            }}
                                                            needleTail={{
                                                                length: '25%'
                                                            }}
                                                        </PointerDirective>
                                                    </PointersDirective>
                                                </AxisDirective>
                                            </AxesDirective>
                                        </CircularGaugeComponent>
                                    </div>
                                    ,
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                
                < div className = 'button'>
            <ShowForm parentCallback = {this.handleCallback}/>
            </div>
            
                
            
      
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
                <div className='control-pane'>
                <style>
                    {SAMPLE_CSS}
                </style>
                    <div className='control-section'>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="row">
                                <div className="col-sm-4">
                                        <CircularGaugeComponent  style={{ height: "250px" }}  id='sample2-container'>
                                            <Inject services={[Annotations]} />
                                            <AxesDirective>
                                                <AxisDirective startAngle={230} endAngle={130} minimum={0} maximum={100}
                                                    lineStyle={{
                                                        width: 0
                                                    }}
                                                    majorTicks={{
                                                        width: 0
                                                    }}
                                                    minorTicks={{
                                                        width: 0
                                                    }} labelStyle={{
                                                        font: { size: '0' }
                                                    }}>
                                                    <AnnotationsDirective>
                                                        <AnnotationDirective
                                                            content={this.state.data != null?this.state.values.value1:'0'}
                                                            angle={180} zIndex='1'
                                                            radius='30%' />
                                                        <AnnotationDirective
                                                            content='<div class="fontDes1">USA</div>'
                                                            angle={180} zIndex='1'
                                                            radius='65%' />
                                                    </AnnotationsDirective>
                                                    <RangesDirective>
                                                        <RangeDirective start={0} end={50} startWidth={15} endWidth={15} color='#EC121C' />
                                                        <RangeDirective start={50} end={100} startWidth={15} endWidth={15} color='#45EA0C' />
                                                    </RangesDirective>
                                                    <PointersDirective>
                                                    <PointerDirective value={this.state.data != null?this.state.values.value1:0}
                 animation={{
                     enable: false,
                     duration : 10000,

                 }}>
                                                            pointerWidth={5}
                                                            cap={{
                                                                radius: 6,
                                                                border: { width: 0 }
                                                            }}
                                                            needleTail={{
                                                                length: '25%'
                                                            }}
                                                        </PointerDirective>
                                                    </PointersDirective>
                                                </AxisDirective>
                                            </AxesDirective>
                                        </CircularGaugeComponent>
                                    </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                
                < div className = 'button'>
            <ShowForm parentCallback = {this.handleCallback}/>
            </div>
            
                
            
      
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
                <div>{this.state.data != null?(this.state.data.left === 'N.A.'? null : Math.floor(Math.random()*100)):null}</div>
                </div>
                <div  className="e-card-content"  style={{ position: `relative`, fontWeight: 'bold'}}>
                {this.state.data != null?this.state.data.center:null}
                <div>{this.state.data != null?(this.state.data.center === 'N.A.'? null : Math.floor(Math.random()*100)):null}</div>
                </div>
                <div className="e-card-content" style={{ position: `relative`, left: '60px', fontWeight: 'bold'}}>
                {this.state.data != null?this.state.data.right:null}
                <div>{this.state.data != null?(this.state.data.right === 'N.A.'? null : Math.floor(Math.random()*100)):null}</div>
                </div>
                </div>
                </div>
                <div className='control-pane'>
                <style>
                    {SAMPLE_CSS}
                </style>
                    <div className='control-section'>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="row">
                                <div className="col-sm-4">
                                        <CircularGaugeComponent style={{ height: "250px" }}   id='sample3-container'>
                                            <Inject services={[Annotations]} />
                                            <AxesDirective>
                                                <AxisDirective startAngle={230} endAngle={130} minimum={0} maximum={100}
                                                    lineStyle={{
                                                        width: 0
                                                    }}
                                                    majorTicks={{
                                                        width: 0
                                                    }}
                                                    minorTicks={{
                                                        width: 0
                                                    }} labelStyle={{
                                                        font: { size: '0' }
                                                    }}>
                                                    <AnnotationsDirective>
                                                        <AnnotationDirective
                                                            content={this.state.data != null?this.state.values.value2:'0'}
                                                            angle={180} zIndex='1'
                                                            radius='30%' />
                                                        <AnnotationDirective
                                                            content='<div class="fontDes1">UK</div>'
                                                            angle={180} zIndex='1'
                                                            radius='65%' />
                                                    </AnnotationsDirective>
                                                    <RangesDirective>
                                                        <RangeDirective start={0} end={50} startWidth={15} endWidth={15} color='#EC121C' />
                                                        <RangeDirective start={50} end={100} startWidth={15} endWidth={15} color='#45EA0C' />
                                                    </RangesDirective>
                                                    <PointersDirective>
                                                    <PointerDirective value={this.state.data != null?(this.state.values.value2):0}
                 animation={{
                     enable: false,
                     duration : 10000,
                 }}>
                                                            pointerWidth={5}
                                                            cap={{
                                                                radius: 6,
                                                                border: { width: 0 }
                                                            }}
                                                            needleTail={{
                                                                length: '25%'
                                                            }}
                                                        </PointerDirective>
                                                    </PointersDirective>
                                                </AxisDirective>
                                            </AxesDirective>
                                        </CircularGaugeComponent>,
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                
                < div className = 'button'>
            <ShowForm parentCallback = {this.handleCallback}/>
            </div>
            
                
            
      
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
                <div>{this.state.data != null?(this.state.data.left === 'N.A.'? null : Math.floor(Math.random()*75)):null}</div>
                </div>
                <div  className="e-card-content"  style={{ position: `relative`, fontWeight: 'bold'}}>
                {this.state.data != null?this.state.data.center:null}
                <div>{this.state.data != null?(this.state.data.center === 'N.A.'? null : Math.floor(Math.random()*75)):null}</div>
                </div>
                <div className="e-card-content" style={{ position: `relative`, left: '60px', fontWeight: 'bold'}}>
                {this.state.data != null?this.state.data.right:null}
                <div>{this.state.data != null?(this.state.data.right === 'N.A.'? null : Math.floor(Math.random()*75)):null}</div>
                </div>
                </div>
                </div>
    
            </div>

            
            
        
        
    );
  }
  }
  

  export default Gauge;