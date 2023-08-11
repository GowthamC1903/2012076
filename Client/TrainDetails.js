import React from 'react'

function TrainDetails(props) {
    return(
        <div>
            <h3>{props.trainName}</h3>
            <h4>{props.trainNum}</h4>
            <h5>{props.acSeat}</h5>
            <h5>{props.normalSeat}</h5>
        </div>
    )
    
}

export default TrainDetails;