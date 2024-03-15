import React, { useEffect, useState } from 'react'
import Display2 from './Display2'

function Data2() {
    const [post, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setPosts(json)
            }
            )
    }, [])
    return (
        <div>
            {post.map((v) => {
                return <Display2 post={v}/>
            })}
        </div>
    )
}

export default Data2
