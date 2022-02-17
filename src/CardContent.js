import React from "react";
import "./CardContent.css";
import {Doughnut} from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);
import PieChart from "./PieChart";
import PieChartText from "./PieChartText";
import DoughnutChart from "./DoughnutChart";
import PositionsDiv from "./PositionsDiv";
import positionData from "./positionData";



function CardContent(props){


    function turnOffPositionContent(status){
        props.funcPositonOff(status)
        
    }

    let content = props.selectedContent;
    console.log(props.positionContent)
    if(content === "overview"){

        return(
            <div className="content-container">
                        <DoughnutChart />
                <div className="approve-container" >
                        <PieChart />
                        <PieChartText />
                </div>
                  
            </div>
        )

    }else if(content === "positions"){

        return(
            <div className="content-container">
               <PositionsDiv positionContent={props.positionContent} positionData={positionData} funcOff={turnOffPositionContent} />
            </div>
        )

    }else{

        return(
            <div className="content-container">
               
            </div>
        )

    }

}

export default CardContent;