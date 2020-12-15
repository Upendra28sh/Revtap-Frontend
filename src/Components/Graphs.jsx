import React, {useState} from 'react';
import db from '../db.json'
import CostPerDay from './CostPerDay'
import OrdersPerDay from './OrdersPerDay'

function Graphs(){
    let [orders] = useState(db.orders)
    let orderArray = [...orders];

    orderArray.sort((a, b) => {
        return new Date(a.created) - new Date(b.created);
    })

    return (
        <React.Fragment>
            <OrdersPerDay orderArray={orderArray} />
            <CostPerDay orderArray={orderArray} />
        </React.Fragment>
    )

}

export default Graphs;