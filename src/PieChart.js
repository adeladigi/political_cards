import React from "react";
import "./PieChart.css";
import {Pie} from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);




    const data = {
        lables: ["Very favorable", "Somewhat favorable", "Somewhat unfavrable", "Very unfavorable", "Don't know"],
        datasets: [
            {
              data: [ 14, 18, 9, 33, 27],
              backgroundColor: ["#50CB93", "#71EFA3", "#ED8E7C", "#D54C4C", "#DDDDDD"],
            },
        ],
        
        };


function PieChart(){
    return(
        <div className="pie-chart-div">
         <Pie data={data} />
        </div>
    )
}



export default PieChart;