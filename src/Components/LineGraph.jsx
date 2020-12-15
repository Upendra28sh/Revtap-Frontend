import React from 'react';
import {Line} from 'react-chartjs-2';

function LineGraph({CostSum, date}) {

    if(CostSum && date) {
      var data = {
        labels: date,
        datasets: [
          {
            label: `Total Cost`,
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'red',
            borderColor: '#1E90FF',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#1E90FF',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#1E90FF',
            pointHoverBorderColor: '#1E90FF',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: CostSum
          }
        ]
      };
    }
    
    return (
        <div className = "container text-center" style={{ margin: "5px", padding: "20px", fontSize: "20px", width: "600px", height: "auto", border: "1px solid grey", borderRadius: "10px"}} >
            <h3>Cost Per Day</h3>
            <Line data={data} />
        </div>
    )
}

export default LineGraph
