import React from "react";
import "./PieChartText.css";




function PieChartText(){
    return(
        <div>
           <h3>Aprroval rating by group</h3>

           <div className="arrove-group-list">
             <p id="v-f" >Very favorable</p>
             <p id="s-f" >Somewhat favorable</p>
             <p id="s-u" >Somewhat unfavrable</p>
             <p id="v-u" >Very unfavorable</p>
             <p id="d-k" >Don't know</p>

           </div>

        </div>
    )
}


export default PieChartText;