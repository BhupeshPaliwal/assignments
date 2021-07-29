import React, { Component } from 'react';
import { CSSTransition } from "react-transition-group";
import "./FlipCard.css";
import ShowForm from './button';
import {Category, ChartComponent, Inject, SplineSeries, SeriesDirective, SeriesCollectionDirective, Legend, DataLabel, Tooltip, ColumnSeries, LineSeries, AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,
  AccumulationDataLabel, AccumulationLegend, AccumulationTooltip, PieSeries } from "@syncfusion/ej2-react-charts";
import {currentData, data6, resistanceData, salesData, TemperatureData, voltageData, volumeData} from './data';

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
          
          this.len = this.state.data.devices.device.length;
        
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
      , 20000); //Set interval here
    }
  maincContent()
  
  { 
    if (this.state.data.devices.device.length==1)
    {
    return(
      <div className="e-card " style={{ width: `100%px`, height: '4000px', backgroundColor: 'Skyblue'}}>
    <div class="e-card-header" > 
    
    <div className="e-card-header-caption">
    {/* {this.state.data != null?this.state.data.devices.parent[0]:null} */}
   
   
    <AccumulationChartComponent title={this.state.data.main_title} 
 legendSettings={{visible:true}} tooltip={{enable:true}}>
  
  <Inject services={[AccumulationDataLabel, AccumulationLegend, AccumulationTooltip, PieSeries]}></Inject>
  <AccumulationSeriesCollectionDirective>
    
    <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="value"
  name={this.state.data.devices.parent + " " + this.state.data.devices.device[0]}
    marker={{dataLabel:{visible: true}, visible:true}}
    ></AccumulationSeriesDirective>
    
   </AccumulationSeriesCollectionDirective>
</AccumulationChartComponent>
<br/>


    </div>
    </div>
    </div>
      );
    }
    
    else if(this.state.data.devices.device.length==2 ){
      return(
              <div className="e-card " style={{ width: `100%px`, height: '4000px', backgroundColor: 'Skyblue'}}>
            <div class="e-card-header" > 
            <div className="e-card-header-caption">
            <AccumulationChartComponent title={this.state.data.main_title} 
 legendSettings={{visible:true}} tooltip={{enable:true}}>
  
  <Inject services={[AccumulationDataLabel, AccumulationLegend, AccumulationTooltip, PieSeries]}></Inject>
  <AccumulationSeriesCollectionDirective>
    
    <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="value"
  name={this.state.data.devices.parent + " " + this.state.data.devices.device[0]}
    marker={{dataLabel:{visible: true}, visible:true}}
    ></AccumulationSeriesDirective>
     <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[1] + " " + this.state.data.devices.device[1]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
    </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
    <br/>
    <AccumulationChartComponent title={this.state.data.main_title} 
 legendSettings={{visible:true}} tooltip={{enable:true}}>
  
  <Inject services={[AccumulationDataLabel, AccumulationLegend, AccumulationTooltip, PieSeries]}></Inject>
  <AccumulationSeriesCollectionDirective>
    
    <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="value"
  name={this.state.data.devices.parent + " " + this.state.data.devices.device[0]}
    marker={{dataLabel:{visible: true}, visible:true}}
    ></AccumulationSeriesDirective>
     <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[1] + " " + this.state.data.devices.device[1]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
    </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>   
            </div>
            </div>
            </div>
      );
    }
    
    else if (this.state.data.devices.device.length==3)
    {
      return(
        <div className="e-card " style={{ width: `100%px`, height: '4000px', backgroundColor: 'Skyblue'}}>
      <div class="e-card-header" > 
      
      <div className="e-card-header-caption">
      {/* {this.state.data != null?this.state.data.devices.parent[0]:null} */}
     
     
      <AccumulationChartComponent title={this.state.data.main_title} 
   legendSettings={{visible:true}} tooltip={{enable:true}}>
    
    <Inject services={[AccumulationDataLabel, AccumulationLegend, AccumulationTooltip, PieSeries]}></Inject>
    <AccumulationSeriesCollectionDirective>
      
      <AccumulationSeriesDirective 
      type="Pie" 
      dataSource={TemperatureData}
      xName="Temperature"
      yName="value"
    name={this.state.data.devices.parent + " " + this.state.data.devices.device[0]}
      marker={{dataLabel:{visible: true}, visible:true}}
      ></AccumulationSeriesDirective>
      <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[1] + " " + this.state.data.devices.device[1]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
     <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[2] + " " +this.state.data.devices.device[2]}
    marker={{ visible:true}}
    ></AccumulationSeriesDirective>
      
   </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>
  <br/>
  <AccumulationChartComponent title={this.state.data.main_title} 
   legendSettings={{visible:true}} tooltip={{enable:true}}>
    
    <Inject services={[AccumulationDataLabel, AccumulationLegend, AccumulationTooltip, PieSeries]}></Inject>
    <AccumulationSeriesCollectionDirective>
      
      <AccumulationSeriesDirective 
      type="Pie" 
      dataSource={TemperatureData}
      xName="Temperature"
      yName="value"
    name={this.state.data.devices.parent + " " + this.state.data.devices.device[0]}
      marker={{dataLabel:{visible: true}, visible:true}}
      ></AccumulationSeriesDirective>
      <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[1] + " " + this.state.data.devices.device[1]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
     <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[2] + " " +this.state.data.devices.device[2]}
    marker={{ visible:true}}
    ></AccumulationSeriesDirective>
      
    </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>
 <br/>

 <AccumulationChartComponent title={this.state.data.main_title} 
   legendSettings={{visible:true}} tooltip={{enable:true}}>
    
    <Inject services={[AccumulationDataLabel, AccumulationLegend, AccumulationTooltip, PieSeries]}></Inject>
    <AccumulationSeriesCollectionDirective>
      
      <AccumulationSeriesDirective 
      type="Pie" 
      dataSource={TemperatureData}
      xName="Temperature"
      yName="value"
    name={this.state.data.devices.parent + " " + this.state.data.devices.device[0]}
      marker={{dataLabel:{visible: true}, visible:true}}
      ></AccumulationSeriesDirective>
      <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[1] + " " + this.state.data.devices.device[1]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
     <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[2] + " " +this.state.data.devices.device[2]}
    marker={{ visible:true}}
    ></AccumulationSeriesDirective>
      
     </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>
 
  
      </div>
      </div>
      </div>
        );
      }
      
   
    else if (this.state.data.devices.device.length==4)
    {
      return(
        <div className="e-card " style={{ width: `100%px`, height: '4000px', backgroundColor: 'Skyblue'}}>
      <div class="e-card-header" > 
      
      <div className="e-card-header-caption">
      {/* {this.state.data != null?this.state.data.devices.parent[0]:null} */}
     
     
      <AccumulationChartComponent title={this.state.data.main_title} 
   legendSettings={{visible:true}} tooltip={{enable:true}}>
    
    <Inject services={[AccumulationDataLabel, AccumulationLegend, AccumulationTooltip, PieSeries]}></Inject>
    <AccumulationSeriesCollectionDirective>
      
      <AccumulationSeriesDirective 
      type="Pie" 
      dataSource={TemperatureData}
      xName="Temperature"
      yName="value"
    name={this.state.data.devices.parent + " " + this.state.data.devices.device[0]}
      marker={{dataLabel:{visible: true}, visible:true}}
      ></AccumulationSeriesDirective>
      
      <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[1] + " " +this.state.data.devices.device[1]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
     <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[2] + " " +this.state.data.devices.device[2]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
    <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[3] + " " +this.state.data.devices.device[3]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
      
      
    </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>
  <br/>

  <AccumulationChartComponent title={this.state.data.main_title} 
   legendSettings={{visible:true}} tooltip={{enable:true}}>
    
    <Inject services={[AccumulationDataLabel, AccumulationLegend, AccumulationTooltip, PieSeries]}></Inject>
    <AccumulationSeriesCollectionDirective>
      
      <AccumulationSeriesDirective 
      type="Pie" 
      dataSource={TemperatureData}
      xName="Temperature"
      yName="value"
    name={this.state.data.devices.parent + " " + this.state.data.devices.device[0]}
      marker={{dataLabel:{visible: true}, visible:true}}
      ></AccumulationSeriesDirective>
      
      <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[1] + " " +this.state.data.devices.device[1]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
     <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[2] + " " +this.state.data.devices.device[2]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
    <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[3] + " " +this.state.data.devices.device[3]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
      
      
    </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>
  <br/>

   <AccumulationChartComponent title={this.state.data.main_title} 
   legendSettings={{visible:true}} tooltip={{enable:true}}>
    
    <Inject services={[AccumulationDataLabel, AccumulationLegend, AccumulationTooltip, PieSeries]}></Inject>
    <AccumulationSeriesCollectionDirective>
      
      <AccumulationSeriesDirective 
      type="Pie" 
      dataSource={TemperatureData}
      xName="Temperature"
      yName="value"
    name={this.state.data.devices.parent + " " + this.state.data.devices.device[0]}
      marker={{dataLabel:{visible: true}, visible:true}}
      ></AccumulationSeriesDirective>
      
      <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[1] + " " +this.state.data.devices.device[1]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
     <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[2] + " " +this.state.data.devices.device[2]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
    <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[3] + " " +this.state.data.devices.device[3]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
      
      
    </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>
  
  
  
      </div>
      </div>
      </div>
        );
      }
    
  

    else if (this.state.data.devices.device.length==5) 
    {
      return(
        <div className="e-card " style={{ width: `100%px`, height: '4000px', backgroundColor: 'Skyblue'}}>
      <div class="e-card-header" > 
      
      <div className="e-card-header-caption">
      {/* {this.state.data != null?this.state.data.devices.parent[0]:null} */}
     
     
      <AccumulationChartComponent title={this.state.data.main_title} 
   legendSettings={{visible:true}} tooltip={{enable:true}}>
    
    <Inject services={[AccumulationDataLabel, AccumulationLegend, AccumulationTooltip, PieSeries]}></Inject>
    <AccumulationSeriesCollectionDirective>
      
      <AccumulationSeriesDirective 
      type="Pie" 
      dataSource={TemperatureData}
      xName="Temperature"
      yName="value"
    name={this.state.data.devices.parent + " " + this.state.data.devices.device[0]}
      marker={{dataLabel:{visible: true}, visible:true}}
      ></AccumulationSeriesDirective>
      
      <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[1] + " " + this.state.data.devices.device[1]}
    marker={{ visible:true}}
    ></AccumulationSeriesDirective>
     <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[2] + " " + this.state.data.devices.device[2]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
    <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[3] + " " + this.state.data.devices.device[3]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
        <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[4] + " " + this.state.data.devices.device[4]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
      
      
    </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>
  <br/>

  <AccumulationChartComponent title={this.state.data.main_title} 
   legendSettings={{visible:true}} tooltip={{enable:true}}>
    
    <Inject services={[AccumulationDataLabel, AccumulationLegend, AccumulationTooltip, PieSeries]}></Inject>
    <AccumulationSeriesCollectionDirective>
      
      <AccumulationSeriesDirective 
      type="Pie" 
      dataSource={TemperatureData}
      xName="Temperature"
      yName="value"
    name={this.state.data.devices.parent + " " + this.state.data.devices.device[0]}
      marker={{dataLabel:{visible: true}, visible:true}}
      ></AccumulationSeriesDirective>
      
      <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[1] + " " + this.state.data.devices.device[1]}
    marker={{ visible:true}}
    ></AccumulationSeriesDirective>
     <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[2] + " " + this.state.data.devices.device[2]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
    <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[3] + " " + this.state.data.devices.device[3]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
        <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[4] + " " + this.state.data.devices.device[4]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
      
      
    </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>
  <br/>
  
  <AccumulationChartComponent title={this.state.data.main_title} 
   legendSettings={{visible:true}} tooltip={{enable:true}}>
    
    <Inject services={[AccumulationDataLabel, AccumulationLegend, AccumulationTooltip, PieSeries]}></Inject>
    <AccumulationSeriesCollectionDirective>
      
      <AccumulationSeriesDirective 
      type="Pie" 
      dataSource={TemperatureData}
      xName="Temperature"
      yName="value"
    name={this.state.data.devices.parent + " " + this.state.data.devices.device[0]}
      marker={{dataLabel:{visible: true}, visible:true}}
      ></AccumulationSeriesDirective>
      
      <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[1] + " " + this.state.data.devices.device[1]}
    marker={{ visible:true}}
    ></AccumulationSeriesDirective>
     <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[2] + " " + this.state.data.devices.device[2]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
    <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[3] + " " + this.state.data.devices.device[3]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
        <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[4] + " " + this.state.data.devices.device[4]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
      
      
    </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>
  <br/>
  
  <AccumulationChartComponent title={this.state.data.main_title} 
   legendSettings={{visible:true}} tooltip={{enable:true}}>
    
    <Inject services={[AccumulationDataLabel, AccumulationLegend, AccumulationTooltip, PieSeries]}></Inject>
    <AccumulationSeriesCollectionDirective>
      
      <AccumulationSeriesDirective 
      type="Pie" 
      dataSource={TemperatureData}
      xName="Temperature"
      yName="value"
    name={this.state.data.devices.parent + " " + this.state.data.devices.device[0]}
      marker={{dataLabel:{visible: true}, visible:true}}
      ></AccumulationSeriesDirective>
      
      <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[1] + " " + this.state.data.devices.device[1]}
    marker={{ visible:true}}
    ></AccumulationSeriesDirective>
     <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[2] + " " + this.state.data.devices.device[2]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
    <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[3] + " " + this.state.data.devices.device[3]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
        <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[4] + " " + this.state.data.devices.device[4]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
      
      
    </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>
  <br/>
  
  <AccumulationChartComponent title={this.state.data.main_title} 
   legendSettings={{visible:true}} tooltip={{enable:true}}>
    
    <Inject services={[AccumulationDataLabel, AccumulationLegend, AccumulationTooltip, PieSeries]}></Inject>
    <AccumulationSeriesCollectionDirective>
      
      <AccumulationSeriesDirective 
      type="Pie" 
      dataSource={TemperatureData}
      xName="Temperature"
      yName="value"
    name={this.state.data.devices.parent + " " + this.state.data.devices.device[0]}
      marker={{dataLabel:{visible: true}, visible:true}}
      ></AccumulationSeriesDirective>
      
      <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[1] + " " + this.state.data.devices.device[1]}
    marker={{ visible:true}}
    ></AccumulationSeriesDirective>
     <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[2] + " " + this.state.data.devices.device[2]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
    <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[3] + " " + this.state.data.devices.device[3]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
        <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[4] + " " + this.state.data.devices.device[4]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
      
      
    </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>
  
  
  
      </div>
      </div>
      </div>
        );
      }
    
    
    else if (this.state.data.devices.device.length==6 || this.state.data.devices.device.length==7 ||this.state.data.devices.device.length==8 )
    {
      return(
        <div className="e-card " style={{ width: `100%px`, height: '4000px', backgroundColor: 'Skyblue'}}>
      <div class="e-card-header" > 
      
      <div className="e-card-header-caption">
      {/* {this.state.data != null?this.state.data.devices.parent[0]:null} */}
     
     
      <AccumulationChartComponent title={this.state.data.main_title} 
   legendSettings={{visible:true}} tooltip={{enable:true}}>
    
    <Inject services={[AccumulationDataLabel, AccumulationLegend, AccumulationTooltip, PieSeries]}></Inject>
    <AccumulationSeriesCollectionDirective>
      
      <AccumulationSeriesDirective 
      type="Pie" 
      dataSource={TemperatureData}
      xName="Temperature"
      yName="value"
    name={this.state.data.devices.parent + " " + this.state.data.devices.device[0]}
      marker={{dataLabel:{visible: true}, visible:true}}
      ></AccumulationSeriesDirective>
      
      <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[1] + " " + this.state.data.devices.device[1]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
     <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[2] + " " + this.state.data.devices.device[2]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
    <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[3] + " " + this.state.data.devices.device[3]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
        <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[4] + " " + this.state.data.devices.device[4]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
    <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[5] + " " + this.state.data.devices.device[5]}
    marker={{ visible:true}}
    ></AccumulationSeriesDirective>
      
      
    </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>
  <br/>
  
  <AccumulationChartComponent title={this.state.data.main_title} 
   legendSettings={{visible:true}} tooltip={{enable:true}}>
    
    <Inject services={[AccumulationDataLabel, AccumulationLegend, AccumulationTooltip, PieSeries]}></Inject>
    <AccumulationSeriesCollectionDirective>
      
      <AccumulationSeriesDirective 
      type="Pie" 
      dataSource={TemperatureData}
      xName="Temperature"
      yName="value"
    name={this.state.data.devices.parent + " " + this.state.data.devices.device[0]}
      marker={{dataLabel:{visible: true}, visible:true}}
      ></AccumulationSeriesDirective>
      
      <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[1] + " " + this.state.data.devices.device[1]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
     <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[2] + " " + this.state.data.devices.device[2]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
    <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[3] + " " + this.state.data.devices.device[3]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
        <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[4] + " " + this.state.data.devices.device[4]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
    <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[5] + " " + this.state.data.devices.device[5]}
    marker={{ visible:true}}
    ></AccumulationSeriesDirective>
      
      
    </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>
  <br/>

  <AccumulationChartComponent title={this.state.data.main_title} 
   legendSettings={{visible:true}} tooltip={{enable:true}}>
    
    <Inject services={[AccumulationDataLabel, AccumulationLegend, AccumulationTooltip, PieSeries]}></Inject>
    <AccumulationSeriesCollectionDirective>
      
      <AccumulationSeriesDirective 
      type="Pie" 
      dataSource={TemperatureData}
      xName="Temperature"
      yName="value"
    name={this.state.data.devices.parent + " " + this.state.data.devices.device[0]}
      marker={{dataLabel:{visible: true}, visible:true}}
      ></AccumulationSeriesDirective>
      
      <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[1] + " " + this.state.data.devices.device[1]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
     <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[2] + " " + this.state.data.devices.device[2]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
    <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[3] + " " + this.state.data.devices.device[3]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
        <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[4] + " " + this.state.data.devices.device[4]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
    <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[5] + " " + this.state.data.devices.device[5]}
    marker={{ visible:true}}
    ></AccumulationSeriesDirective>
      
      
    </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>
  <br/>

  <AccumulationChartComponent title={this.state.data.main_title} 
   legendSettings={{visible:true}} tooltip={{enable:true}}>
    
    <Inject services={[AccumulationDataLabel, AccumulationLegend, AccumulationTooltip, PieSeries]}></Inject>
    <AccumulationSeriesCollectionDirective>
      
      <AccumulationSeriesDirective 
      type="Pie" 
      dataSource={TemperatureData}
      xName="Temperature"
      yName="value"
    name={this.state.data.devices.parent + " " + this.state.data.devices.device[0]}
      marker={{dataLabel:{visible: true}, visible:true}}
      ></AccumulationSeriesDirective>
      
      <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[1] + " " + this.state.data.devices.device[1]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
     <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[2] + " " + this.state.data.devices.device[2]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
    <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[3] + " " + this.state.data.devices.device[3]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
        <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[4] + " " + this.state.data.devices.device[4]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
    <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[5] + " " + this.state.data.devices.device[5]}
    marker={{ visible:true}}
    ></AccumulationSeriesDirective>
      
      
    </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>
  <br/>
  <AccumulationChartComponent title={this.state.data.main_title} 
   legendSettings={{visible:true}} tooltip={{enable:true}}>
    
    <Inject services={[AccumulationDataLabel, AccumulationLegend, AccumulationTooltip, PieSeries]}></Inject>
    <AccumulationSeriesCollectionDirective>
      
      <AccumulationSeriesDirective 
      type="Pie" 
      dataSource={TemperatureData}
      xName="Temperature"
      yName="value"
    name={this.state.data.devices.parent + " " + this.state.data.devices.device[0]}
      marker={{dataLabel:{visible: true}, visible:true}}
      ></AccumulationSeriesDirective>
      
      <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[1] + " " + this.state.data.devices.device[1]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
     <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[2] + " " + this.state.data.devices.device[2]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
    <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[3] + " " + this.state.data.devices.device[3]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
        <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[4] + " " + this.state.data.devices.device[4]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
    <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[5] + " " + this.state.data.devices.device[5]}
    marker={{ visible:true}}
    ></AccumulationSeriesDirective>
      
      
    </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>
  <br/>

  <AccumulationChartComponent title={this.state.data.main_title} 
   legendSettings={{visible:true}} tooltip={{enable:true}}>
    
    <Inject services={[AccumulationDataLabel, AccumulationLegend, AccumulationTooltip, PieSeries]}></Inject>
    <AccumulationSeriesCollectionDirective>
      
      <AccumulationSeriesDirective 
      type="Pie" 
      dataSource={TemperatureData}
      xName="Temperature"
      yName="value"
    name={this.state.data.devices.parent + " " + this.state.data.devices.device[0]}
      marker={{dataLabel:{visible: true}, visible:true}}
      ></AccumulationSeriesDirective>
      
      <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[1] + " " + this.state.data.devices.device[1]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
     <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[2] + " " + this.state.data.devices.device[2]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
    <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[3] + " " + this.state.data.devices.device[3]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
        <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[4] + " " + this.state.data.devices.device[4]}
    marker={{visible:true}}
    ></AccumulationSeriesDirective>
    <AccumulationSeriesDirective 
    type="Pie" 
    dataSource={TemperatureData}
    xName="Temperature"
    yName="Value"
    name={this.state.data.devices.parent[5] + " " + this.state.data.devices.device[5]}
    marker={{ visible:true}}
    ></AccumulationSeriesDirective>
      
      
    </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>
  
  
      </div>
      </div>
      </div>
        );
      }
    
    
    else
    {
      return(
    <div className="e-card " style={{ width: `100%px`, height: '4000px', backgroundColor: 'Skyblue'}}/>
      );
    }
  }

 


  render() {
  return (
      
      <div className="main">
        <CSSTransition
      // key={this.state.count}
      // addEndListener={(node, done) => {
      //   node.addEventListener("transitionend", done, false);
      // }}
      // classNames="fade"
    >
          
            
            {!this.state.data?
            <div className="e-card " style={{ width: `100%px`, height: '4000px', backgroundColor: 'Skyblue'}}/>:this.maincContent.bind(this)}
            </CSSTransition>
          <div className = 'button'>
            < ShowForm parentCallback = {this.handleCallback}/>
          </div>
      </div>
  );
}
}

export default FlipCard;


