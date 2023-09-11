import { useEffect, useState } from "react"

export default function Posts () {

const [posts,setPosts] = useState([])

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
},[])

    return (
        <div className="">
            <h2>Posts: </h2>
        </div>
    )
}