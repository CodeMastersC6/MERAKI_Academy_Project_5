
import React, { useContext, useState, useEffect } from "react";

import ReactDOM from 'react-dom';
import "./style.css";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack ,VictoryGroup,VictoryArea,VictoryPortal,VictoryScatter} from 'victory';

import axios from "axios";

const data = [
    { x: new Date( 11, 1), y: 1 },
    { x: new Date( 11, 2), y: 10 },
    { x: new Date( 11, 3), y: 13 },
    { x: new Date( 11, 4), y: 13 },
    { x: new Date( 11, 7), y: 100 },
    { x: new Date( 11, 8), y: 50 },
    { x: new Date( 11, 9), y: 190 },
    { x: new Date( 11, 10), y: 90 },
    { x: new Date(11, 11), y: 50 }
  ];
const data2022 = [
    { Sales: 77},
    { Sales: 44},
  { Sales: 24},
  { Sales: 150},
  { Sales: 200}
];
const myDataset = [
    [
        { x: "meat", y: 1 },
        { x: "bread", y: 10 },
        { x: "Yougart", y: 7 },
        { x: "Fruits", y: 6 },
        { x: "Vigtables", y: 6 },
         { x: "Juice", y: 4 }

        
    ],
    [
        { x: "meat", y: 10 },
        { x: "bread", y: 35 },
        { x: "Yougart", y: 20 },
        { x: "Fruits", y: 10 },
        { x: "Vigtables", y: 10 },
        { x: "Juice", y: 80 }
    ],
   
  ];
  
class Main extends React.Component {
    
    transformData(dataset) {
        const totals = dataset[0].map((data, i) => {
          return dataset.reduce((memo, curr) => {
            return memo + curr[i].y;
          }, 0);
        });
        return dataset.map((data) => {
          return data.map((datum, i) => {
            return { x: datum.x, y: (datum.y / totals[i]) * 100 };
          });
        });
      }
  render() {
    
       
    const dataset = this.transformData(myDataset)
    return (
      <div className='chartMain'>
        
       
        
        <VictoryChart className="main"
           domainPadding={50}
           padding={{ top: 30, bottom: 20, left: 40, right: 40 }}
        //    height={500}
        //     width={500}
       
           
        animate={{ duration: 4000 }}
          theme={VictoryTheme}
        > 
        
          <VictoryAxis
            tickValues={["August", "September", "October ", "November"]}
           
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`JD${x / 1}`)}
            
          />
          <VictoryStack
            colorScale={"green"}
            
          >
           
           
            <VictoryBar
              data={data2022}
              x={"quarter"}
              y={"Sales"}
             

            //    labels={["Aug", "Sep", "Oct", "Nov",]}
            />
          </VictoryStack>
        </VictoryChart>
       
        <h1  className='h1'>(Total sales in the first months.) ®</h1>
        <div className='charts'>
       

        <VictoryChart height={400} width={400}
          domainPadding={{ x: 30, y: 20 }}
         
          padding={{ top: 0, bottom: 20, left: 40, right: 40 }}
          
        />
            <VictoryStack
              colorScale={["green", "blue", "tomato"]}
            >
              {dataset.map((data, i) => {
                return <VictoryBar data={data} key={i}/>;
              })}
            </VictoryStack>
            <VictoryAxis dependentAxis
              tickFormat={(tick) => `${tick}%`}
            />
            <VictoryAxis
              tickFormat={["meat", "bread", "Yougart", "Fruits", "Vigtables","Juice",]}
            />
        </VictoryChart>
        <h1  className='h1'>(The rate of production in each category.) ®</h1>
      </div>
      <VictoryChart 
      width={400} 
      height={400} 
      scale={{ x: data }}
      tickValues={["August", "September", "October ", "November"]}
      animate={{ duration: 5000 }}
          theme={VictoryTheme.material}
    >
      <VictoryArea 
        data={data} 
        style={{data: { fill: 'lightblue', stroke: 'teal' }}} 

       
      
       
      
      />
      
    </VictoryChart>
    <h1  className='h1'>(Monthly enrollment rate.) ®</h1>

      </div>
    );
  }
}


export default Main;

