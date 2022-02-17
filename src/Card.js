import React,{useState} from "react";
import "./Card.css";
import CardContent from "./CardContent";


 

function Card(){
    
    const [content, setCount] = useState("overview");
    const [positionContent, setPositionContent] = useState(false);


    function settingContent(e){
       let selectedMenu = e.target.innerText;
       if(selectedMenu !== "positions"){
        setPositionContent(false)
           setCount(selectedMenu);
       }else {

        setCount(selectedMenu);
       }
       
    }

    function turnOffPositionContent(status){
           setPositionContent(status)
    }
    

    return(
         <div className="card-container">
            <div className="card-wrapper">
               <img className="card-img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd1lss44hh2trtw.cloudfront.net%2Fassets%2Farticle%2F2021%2F01%2F28%2Faoc-livestream_feature.jpg&f=1&nofb=1" />
                
                <div className="party-div">
                    <h3>Alexandria Ocasio Cortez</h3>
                </div>

                <div className="political-btns">    
                       <h4 id="overview-btn" onClick={settingContent} >overview</h4> <h4 id="positions-btn" onClick={settingContent} >positions</h4>
                       <h4 id="stats-btn" onClick={settingContent} >stats</h4> <h4 id="news-btn" onClick={settingContent} >news</h4>
                </div>
                
                <CardContent positionContent={positionContent}  selectedContent={content} funcPositonOff={turnOffPositionContent}/>

            </div>
         </div>
    )
}


export default Card;