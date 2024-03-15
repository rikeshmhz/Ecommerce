import React from 'react'
import Display from './Display'

const Data = () => {
  
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 g-4">
      <Display img={"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"} name={"Rikesh"} address={"balaju"}/>
      <Display img={"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"} name={"Sajal"} address={"patan"}/>
      <Display img={"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"} name={"Ashish"} address={"swayambhu"}/>
      </div>
    </>
  )
}

export default Data