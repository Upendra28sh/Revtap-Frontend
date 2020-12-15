import React from 'react';
import {Bar} from 'react-chartjs-2';

function BarGraph({ordersCount, date}) {

    if(ordersCount && date) {
      var data = {
        labels: date,
        datasets: [
          {
            label: 'Order count',
            backgroundColor: '#1E90FF',
            borderColor: '#1E90FF',
            borderWidth: 1,
            hoverBackgroundColor: '#1E90FF',
            hoverBorderColor: '#1E90FF',
            data: ordersCount
          }
        ]
      };

    }
    return (
        <div className = "container text-center" style={{ margin: "5px", padding: "20px", fontSize: "20px", width: "600px", height: "auto", border: "1px solid grey", borderRadius: "10px"}}>
            <h3> Orders Per Day </h3>
            <Bar data={data} />
        </div>
    )
}

export default BarGraph
