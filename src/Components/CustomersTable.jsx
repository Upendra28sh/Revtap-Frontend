import React from 'react'

function CustomersTable({customers, indexOfFirstItem}) {
    indexOfFirstItem++;
    return (
        <div style={{margin: "10%",marginTop: "0%", textAlign: "center"}}>
            <h3 className = "text-center">Customer Data</h3>
            <table className="table table-striped  table-responsive" style={{width: "100%"}}>
                <thead className = "thead-dark">
                    <tr>
                        <th scope="col">Sr. No.</th>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Created_at</th>
                        <th scope="col">Orders</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       customers && customers.map((customer) => {
                            return (
                                <tr key = {customer.id}>
                                    <td>{indexOfFirstItem++} </td>
                                    <td>{customer.id} </td>
                                    <td>{customer.firstName} </td>
                                    <td>{customer.lastName} </td>
                                    <td>{customer.email} </td>
                                    <td>{(new Date(customer.created).toString().slice(0, 16))} </td>
                                    <td>{customer.orders} </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
    
}

export default CustomersTable
