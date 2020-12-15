import React, { useState, useEffect } from 'react'

function Pagination({itemsPerPage, totalItems, paginate}) {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const [currentlyDisplayedPages, setDisplayedPages] = useState([1,2,3]);
    const [currentPage, setPage] = useState(1);

    useEffect(()=>{
        const liItems = document.querySelectorAll('.page-item');
        liItems.forEach((liItem)=>{
            liItem.classList.remove("active");
        })
        document.getElementById("page_"+currentPage).classList.add("active");
    })

    for(let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const setCurrentPage = (Page)=>{
        setPage(Page);
    }

    const setCurrentlyDisplayedPages = (previousPage, currentPage)=>{
        if(currentlyDisplayedPages.indexOf(currentPage) === -1) {
            if(currentPage <= 3) setDisplayedPages([1, 2, 3]);
            else if(totalPages - currentPage < 3) setDisplayedPages([totalPages-2, totalPages-1, totalPages]);
            else if(currentlyDisplayedPages.indexOf(previousPage) === 0) {
                setDisplayedPages([currentPage-2, currentPage-1, currentPage]);
            }else if(currentlyDisplayedPages.indexOf(previousPage) === 2){
                setDisplayedPages([currentPage, currentPage+1, currentPage+2]);
            }
        }
    }

    return (
        <div className = "d-flex justify-content-center " style={{position: "absolute", right: "14%"}}>
            <ul className = "pagination ">
                <li key = {-1} className = 'page-item'>
                    <button onClick = {() => {paginate(1);setCurrentPage(1);setCurrentlyDisplayedPages(null, 1)}} className = 'page-link'>
                    &lt;&lt;
                    </button>
                </li>
                <li key = {0} className = 'page-item'>
                    <button onClick = {() => {if(currentPage > 1) { paginate(currentPage-1);setCurrentPage(currentPage-1);setCurrentlyDisplayedPages(currentPage, currentPage-1)};}} className = 'page-link'>
                    &lt;
                    </button>
                </li>
                {
                    currentlyDisplayedPages.map(number => (
                        <li id={"page_"+number} key = {number} className = 'page-item'>
                            <button onClick = {() => {paginate(number);setCurrentPage(number);setCurrentlyDisplayedPages(currentPage, number)}} className = 'page-link'>
                                {number}
                            </button>
                        </li>
                    ))
                }
                <li key = {totalPages+1} className = 'page-item'>
                    <button onClick = {() => {if(currentPage < totalPages) { paginate(currentPage+1);setCurrentPage(currentPage+1);setCurrentlyDisplayedPages(currentPage, currentPage+1)}}} className = 'page-link'>
                    &gt;
                    </button>
                </li>
                <li key = {totalPages+2} className = 'page-item'>
                    <button onClick = {() => {paginate(totalPages);setCurrentPage(totalPages);setCurrentlyDisplayedPages(null, totalPages)}} className = 'page-link'>
                    &gt;&gt;
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Pagination
