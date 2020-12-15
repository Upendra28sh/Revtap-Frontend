import React, {useState} from 'react'
import db from '../db.json'
import CustomersTable from './CustomersTable'
import Pagination from './Pagination';

function Customers() {
    let [customers] = useState(db.customers)
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const LastItemIndex = currentPage * itemsPerPage;
    const FirstItemIndex = LastItemIndex - itemsPerPage;
    const currentItems = customers.slice(FirstItemIndex, LastItemIndex);

    return (
      <div id = "customerTable">
        <select name="itemsPerPageDropdown" id="itemsPerPageDropdown" defaultValue={"5"} onChange={(e)=>{setItemsPerPage(e.target.value)}} style={{position: "absolute", left: "10%", padding: "5px", color: "#007bff", border: "1px solid #007bff", borderRadius: "5px"}}>
          <option value="5">5 items Per Page</option>
          <option value="10">10 items Per Page</option>
          <option value="20">20 items Per Page</option>
        </select>
        <Pagination itemsPerPage={itemsPerPage} totalItems={customers.length} paginate={(pageNumber)=>{setCurrentPage(pageNumber);}} />
        <CustomersTable customers={currentItems} indexOfFirstItem={FirstItemIndex} /> 
      </div>
    );
}

export default Customers
