import React, { useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
  VictoryGroup,
  VictoryArea,
  VictoryPortal,
  VictoryScatter,
} from "victory";
//import { ResponsivePie } from '@nivo/pie'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProductId, setProducts } from "../../redux/reducer/product";

const data = [
  { x: new Date(11, 1), y: 1 },
  { x: new Date(11, 2), y: 10 },
  { x: new Date(11, 3), y: 13 },
  { x: new Date(11, 4), y: 13 },
  { x: new Date(11, 7), y: 100 },
  { x: new Date(11, 8), y: 50 },
  { x: new Date(11, 9), y: 190 },
  { x: new Date(11, 10), y: 90 },
  { x: new Date(11, 11), y: 50 },
];
const data2022 = [
  { Sales: 77 },
  { Sales: 44 },
  { Sales: 24 },
  { Sales: 150 },
  { Sales: 200 },
];
const myDataset = [
  [
    { x: "meat", y: 1 },
    { x: "bread", y: 10 },
    { x: "Yougart", y: 7 },
    { x: "Fruits", y: 6 },
    { x: "Vigtables", y: 6 },
    { x: "Juice", y: 4 },
  ],
  [
    { x: "meat", y: 10 },
    { x: "bread", y: 35 },
    { x: "Yougart", y: 20 },
    { x: "Fruits", y: 10 },
    { x: "Vigtables", y: 10 },
    { x: "Juice", y: 80 },
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
    const dataset = this.transformData(myDataset);
    return (
      <div className="chartMain">
        <div>
          <VictoryChart
            className="main"
            domainPadding={50}
            padding={{ top: 30, bottom: 20, left: 40, right: 40 }}
         

            theme={VictoryTheme}
          >
            <VictoryAxis
              tickValues={["August", "September", "October ", "November"]}
            />

            <VictoryAxis dependentAxis tickFormat={(x) => `JD${x / 1}`} />
            <VictoryStack colorScale={"green"}>
              <VictoryBar data={data2022} x={"quarter"} y={"Sales"} />
            </VictoryStack>
          </VictoryChart>
        </div>


        <div>
          <VictoryChart
            width={800}
            height={400}
            scale={{ x: data }}
            tickValues={["August", "September", "October ", "November"]}
            // animate={{ duration: 5000 }}
            theme={VictoryTheme.material}
          >
            <VictoryArea
              data={data}
              style={{ data: { fill: "lightblue", stroke: "teal" } }}
            />
          </VictoryChart>
        </div>
      </div>
    );
  }
}

export default Main;
