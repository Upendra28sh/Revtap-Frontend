import React, {useState} from 'react';
import BarGraph from './BarGraph';

function OrdersPerDay({orderArray}) {

    let countPerDayObj = {};
    for(let order of orderArray) {
        let orderDate = order.created.split("T")[0];
        if(orderDate in countPerDayObj) countPerDayObj[orderDate]++;
        else countPerDayObj[orderDate] = 1;
    }

    let ordersCount = Object.values(countPerDayObj);
    let date = Object.keys(countPerDayObj);

    return (
      <div style={{marginTop: "40px", paddingBottom: "40px"}}>
        <BarGraph ordersCount={ordersCount} date={date} />
      </div>
    );
}

export default OrdersPerDay
