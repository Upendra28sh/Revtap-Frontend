import React, {useState} from 'react'
import LineGraph from './LineGraph'

function CostPerDay({orderArray}) {

    let costPerDay = {};
    for(let order of orderArray) {
        let orderDate = order.created.split("T")[0];
        if(orderDate in costPerDay) costPerDay[orderDate] += parseFloat(order.price);
        else costPerDay[orderDate] = parseFloat(order.price);
    }

    let CostSum = Object.values(costPerDay);
    let date = Object.keys(costPerDay);

    return (
        <div style={{marginTop: "40px", paddingBottom: "40px"}}>
            <LineGraph CostSum = {CostSum} date = {date} />
        </div>
    )
}

export default CostPerDay
