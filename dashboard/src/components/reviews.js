import React from 'react'
const Reviews = (props) =>{
    return (
        <div className="small-box-1">
            <p className="small-box-title">Reviews</p>
            <p>{props.reviewNum}</p>
        </div>
    )
}
//return statement of line 5 returns jsx and jsx combines js

export default Reviews;