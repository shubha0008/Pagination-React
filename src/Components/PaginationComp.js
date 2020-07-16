import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import { PaginatePipe } from 'ngx-pagination';

const Pagination = ({ postsPerPage, totalPosts ,paginate }) => {
const PageNumbers = [];

for(let i = 1; i<=Math.ceil(totalPosts/postsPerPage);i++){
    PageNumbers.push(i);
}
     return(
         <nav>
             <ul className='pagination'>
             {PageNumbers.map(number => (
                 <li key={number} className='page-item'>
                     <a onClick={() => paginate(number)} href="!#" className='page-link'>
                         {number}
                     </a>
                 </li>
             ))}
           </ul>
         </nav>
     )
}


export default Pagination