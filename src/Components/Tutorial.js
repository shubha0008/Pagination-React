import React from 'react'

const Posts = ({posts, loading }) => {
    if(loading) {
        return <h2>Loading...</h2>;
    }
    return(
    //      <ul>
    //     {posts.map(post => (
    //         <li key = {post.name}>
    //             {post.name}
    //         </li>
    //     ))}
    // </ul>
    <div className="card">
        {posts.map(post => (
            
            <div className="card-body">
            <h5 className="card-title">Country Name : {post.name}</h5>
            <p className="card-text">Capital : {post.capital}</p> 
            <p className="card-text">{post.language}</p> 
            </div>
         ))}
        
    </div>
    );   
};

export default Posts