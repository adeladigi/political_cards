import React from "react";
import "./DoughnutChart.css"
import {Doughnut} from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);




const data = {
    lables: ["Red", "Blue"],
    datasets: [
        {
          data: [4.4,95.6],
          backgroundColor: ["#FF7777", "#398AB9"],
          borderColor: ["#DD4A48", "#22577E"],
          borderWidth: 1
        },
    ],
    
    };






function DoughnutChart(){
    return(
        <div className="loyaty-div">
               
          <div className="doughnut-div">
            <div className="number-display-div">
              <h4>Votes with party</h4>
              <h1>95.6%</h1>
            </div>
          
            <div style={{width: "150px",margin: "0 auto"}}>
             <Doughnut data={data} />
            </div>  
          </div>

        </div>
    )
}


export default DoughnutChart;






