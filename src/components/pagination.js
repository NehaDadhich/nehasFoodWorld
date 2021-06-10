import React from "react";
import { Link} from "gatsby";

export default function Pagination ({currentPage, numberOfPages, prefixUrl}) {
    const prevPagePath = currentPage - 1 === 1 ? '/'+ prefixUrl +'/' : '/'+ prefixUrl +'/' + (currentPage - 1).toString();
    const nextPagePath = '/' + prefixUrl + '/' + (currentPage + 1).toString();
    console.log("In pagination");
    return  (<div>
       {currentPage > 1 && (
                    <Link className="button-link margin-3-l" to={prevPagePath} >  
                      <button className="pagination-button"> Previous </button>
                      </Link>
                  )}
                  {currentPage === numberOfPages && currentPage - 3 >= 1 && (
                      <Link className="button-link margin-3-l" to={ currentPage - 3 === 1 ? "/" + prefixUrl : "/" + prefixUrl + "/" + (currentPage - 3)}>
                        <button className="pagination-button"> {currentPage - 3} </button>
                      </Link>
                  )}
                  {currentPage - 2 >= 1 && (
                      <Link className="button-link margin-3-l" to={ currentPage - 2 === 1 ? "/" + prefixUrl : "/" + prefixUrl + "/" + (currentPage - 2)}>
                        <button className="pagination-button">  {currentPage - 2} </button>
                      </Link>
                  )}
                  {currentPage > 1 && (
                      <Link className="button-link margin-3-l" to={prevPagePath}>
                       <button className="pagination-button"> {currentPage - 1} </button>
                      </Link>
                  )}
                    <Link className="button-link margin-3-l" href="#">
                    <button className="pagination-button"> {currentPage} </button>
                    </Link>
                  {currentPage !== numberOfPages && (
                      <Link className="button-link margin-3-l" to={nextPagePath}>
                        <button className="pagination-button"> {currentPage + 1} </button>
                      </Link>
                  )}
                  {currentPage + 2 <= numberOfPages && (
                      <Link className="button-link margin-3-l" to={"/" + prefixUrl + "/" + (currentPage + 2)}>
                         <button className="pagination-button"> {currentPage + 2} </button>
                      </Link>
                  )}
                  {currentPage === 1 && currentPage + 3 <= numberOfPages && (
                      <Link className="button-link margin-3-l" to={"/" + prefixUrl + "/" + (currentPage + 3)}>
                       <button className="pagination-button">  {currentPage + 3} </button>
                      </Link>
                  )}
                  {currentPage !== numberOfPages && (
                      <Link className="button-link margin-3-l" to={nextPagePath}>
                        <button className="pagination-button"> Next</button>
                      </Link>
                  )}
    </div>)
}