
import { useEffect } from "react"
import { useState } from "react"
import Post from "./Post"
import './Post.css'

export default   function Posts(){

const[posts, setPosts]= useState([])

useEffect(()=>{

 fetch('https://jsonplaceholder.typicode.com/posts')
 .then(res=> res.json())
 .then(data=> setPosts(data))


}, [])

    return (
        <div className="box">
            <h3>Posts:{posts.length}</h3>
            {
            posts.map(posts=><Post post={posts} ></Post>)    
            }
        </div>
)
   }

//    1:- create a state to store data
// 2:- create useEffact with no dependancies
// 3:- fetch to load data url fetch('URL')