import React from 'react'

function Display1({post}) {
  return (
    <div style={{border:"1px solid black"}}>
        <b>{post.id}</b>
        <img src={post.image} height="200" width="200" alt="" />
        <div>Title:{post.title}</div>
        <div>Category:{post.category}</div>
    </div>
  )
}

export default Display1