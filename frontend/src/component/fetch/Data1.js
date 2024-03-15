import React, { useEffect, useState } from 'react'
import Display1 from './Display1'

const Data1 = () => {
    const [post, setPosts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json =>
            {
                console.log(json)
                setPosts(json)
            } 
            
            )
    }, [])
    return (
        <div>
          {post.map((v)=>{
            return <Display1 post={v}/>
          })}
        </div>
    )
}

export default Data1