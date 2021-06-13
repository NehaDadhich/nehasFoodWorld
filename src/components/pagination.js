import React from "react";
import { Link} from "gatsby";

export default function Pagination ({currentPage, numberOfPages, prefixUrl}) {
    const prevPagePath = currentPage - 1 === 1 ? '/'+ prefixUrl +'/' : '/'+ prefixUrl +'/' + (currentPage - 1).toString();
    const nextPagePath = '/' + prefixUrl + '/' + (currentPage + 1).toString();
    var pageNumberList = [];
    if(currentPage === numberOfPages && currentPage - 3 >= 1){
        pageNumberList.push(currentPage - 3);
    }
    if(currentPage - 2 >= 1) {
        pageNumberList.push(currentPage - 2);
    }
    if(currentPage > 1){
        pageNumberList.push(currentPage - 1);
    }
    pageNumberList.push(currentPage);
    if(currentPage !== numberOfPages){
        pageNumberList.push(currentPage + 1);
    }
    if(currentPage + 2 <= numberOfPages){
        pageNumberList.push(currentPage + 2);
    }
    if(currentPage === 1 && currentPage + 3 <= numberOfPages){
        pageNumberList.push(currentPage + 3);
    }
    return  (<div>
       {currentPage > 1 && (
                    <Link className="button-link margin-3-l" to={prevPagePath} >  
                      <button className="pagination-button"> Previous </button>
                      </Link>
                  )}
                  { Array.from({ length: 4}, (_, i) => {
                    return (<Link className="button-link margin-3-l" to={pageNumberList[i] === 1 ? "/" + prefixUrl  : "/" + prefixUrl  + "/" + pageNumberList[i]}>
                  <button className="pagination-button"> {pageNumberList[i]} </button>
                </Link>)
        })
      }
       {currentPage !== numberOfPages && (
                      <Link className="button-link margin-3-l" to={nextPagePath}>
                        <button className="pagination-button"> Next</button>
                      </Link>
        )}
    </div>)
}