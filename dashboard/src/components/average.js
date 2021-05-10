import React from 'react'
const Average = (props) =>{
    return (
        <div className="small-box-2">
            <p className="small-box-title">Average Rating</p>
            <p className="big-nums">{props.ratingNum}</p>
        </div>
    )
}
//return statement of line 5 returns jsx and jsx combines js

export default Average;