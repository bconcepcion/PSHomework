//props is an object that is passed down to components
import React from 'react'
const Visitors = (props) =>{
    return (
        <div className="big-box">
            <p className="small-box-title">Website Visitors</p>
            <p className="big-nums">{props.visitorNum}</p>
        </div>
    )
}
//return statement of line 5 returns jsx and jsx combines js

export default Visitors;