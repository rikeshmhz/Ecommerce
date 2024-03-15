import React from 'react'

const Display = ({ name, address, img }) => {
  // destructure
  // let {name,address}=props
  return (
    <>
        <div className="col" style={{height:"400px",width:"400px"}}>
          <div className="card">
            <img src={img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{address}</p>
              </div>
          </div>
        </div>
    </>
  )
}

export default Display
// save in props like this
// props={
//   "name":"rikesh"
//   "address":"balaju"
// }