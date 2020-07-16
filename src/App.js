import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css'
import Posts from './Components/Tutorial.js';
import PaginationComp from './Components/PaginationComp.js';
import Pagination from "react-js-pagination";

const App = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [posts1, setPosts1] = useState([]);
    const [name,setname]=useState();


    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const url='https://restcountries.eu/rest/v2/name/';
            var key =name;
            const res = await axios.get(url+key);
            setPosts(res.data);
            setPosts1(JSON.stringify(res.data));
            setLoading(false);

        }
        fetchPosts();
    }, [name]);

    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost , indexOfLastPost)
    
    //change page
   const paginate = PageNumbers => setCurrentPage(PageNumbers);
    return(
        <div>
        <div className="container mt-5">
            <input type="text" value={name} onChange={((event)=>setname(event.target.value))} />
            <div>{posts1}</div>
        </div>

         <div className="container mt-5">
            <h1 > My App</h1> 
            <Posts posts={currentPosts} loading={loading}/>
            <PaginationComp postsPerPage={postsPerPage} 
            totalPosts={posts.length}
             paginate={paginate}/>
        </div> 
        </div>
    )
}

export default App;
