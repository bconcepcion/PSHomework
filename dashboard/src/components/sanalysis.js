import React from 'react'
const Analysis = (props) =>{
    return (
        <div className="small-box-3">
            <p className="small-box-title">Sentiment Analysis</p>
            <p className="small-nums">{props.sentimentNum}</p>
            <p className="small-nums">{props.sentimentNum1}</p>
            <p className="small-nums">{props.sentimentNum2}</p>
            
            

        </div>
    )
}
//return statement of line 5 returns jsx and jsx combines js

export default Analysis;