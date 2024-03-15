import React from 'react'

function Display2({ post }) {
  return (
    <div style={{ border: "1px solid black" }}>
      <div>Name: {post.name}</div>
      <div>Email: {post.email}</div>
      <div>Street: {post.address.street}</div>
      <div>Company: {post.company.name}</div>
    </div>
  )
}

export default Display2