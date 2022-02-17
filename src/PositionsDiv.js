import React, {useState} from "react";
import "./PositionsDiv.css";


// must create a function that send boolan up one level



function PositionsDiv(props){

    let moreInfo = props.positionContent;

    let positionName = props.positionData[0].position;
    let positionContent = props.positionData[0].content;
    let dataList = props.positionData;

    const [title, setTitle] = useState("");
    const [textContent, setTextContent] = useState("");
    

function SetTextContent(e){
  let selectedPosition = e.target.innerText;
  
  setTitle(selectedPosition);
  moreInfo = true;

  props.funcOff(moreInfo);
  
  for(let i = 0; i <dataList.length; i++){
      if(selectedPosition === dataList[i].position){
          console.log(dataList[i].position);
          console.log(dataList[i].content);
          setTextContent(dataList[i].content)
      }
  }

}

//console.log(props.positionData);

if(moreInfo === false){

    return(
        <div className="position-div-wrapper">
            <div className="position-div-title">
               <h3>Political positions</h3>
            </div>

            <div className="position-div-list">

                <div className="position-inner-div">

                <h5 onClick={SetTextContent} >Environment</h5>
                <h5 onClick={SetTextContent}  >Tax policy</h5>
                <h5 onClick={SetTextContent} >Immigration</h5>
                <h5 onClick={SetTextContent} >Healthcare</h5>
                <h5 onClick={SetTextContent} >Anti-poverty</h5>
                <h5 onClick={SetTextContent} >LGBTQ equality</h5>
                <h5 onClick={SetTextContent} >Puerto Rico</h5>
                </div>

                <div className="position-inner-div">

                <h5 onClick={SetTextContent} >Education</h5>
                <h5 onClick={SetTextContent} >Police funding</h5>
                <h5 onClick={SetTextContent} >Banking</h5>
                <h5 onClick={SetTextContent} >Labor rights</h5>
                <h5 onClick={SetTextContent} >Pay raises for Congress</h5>
                <h5 onClick={SetTextContent} >Amazon HQ2 plan</h5>
                <h5 onClick={SetTextContent} >Foreign policy</h5>
               </div>

            </div>
           
        </div>
    )

}else if(moreInfo === true){

    return(
        <div className="position-div-wrapper">

           <div className="position-content-title" >
              <h2>{title}</h2>
           </div>

           <div className="position-content-text" >
               <p>{textContent}</p>
           </div>
            

        </div>
    )

}

}




export default PositionsDiv;