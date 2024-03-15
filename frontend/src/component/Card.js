import React from 'react'

function Card() {
  return (
    <>
      <div className="card-group container mt-5">
        <div className="card">
          <div className="zoom">
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" className="card-img-top custom-card" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">Headphone</h5>
            <h5 className="text-muted">Nrs. 2000</h5>
            <p className="card-text text-truncate">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime obcaecati assumenda animi placeat. Cumque delectus dolorem dolorum quas optio beatae.
            </p>
            <div className="btn btn-primary form-control">See More</div>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
          <div className="zoom">
            <img src="https://petapixel.com/assets/uploads/2017/03/product1.jpeg" className="card-img-top custom-card" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">Shoes</h5>
            <h5 className="text-muted">Nrs. 3000</h5>
            <p className="card-text text-truncate">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, magnam.
            </p>
            <div className="btn btn-primary form-control">See More</div>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
          <div className="zoom">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" className="card-img-top custom-card" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">Watch</h5>
            <h5 className="text-muted">Nrs. 1000</h5>
            <p className="card-text text-truncate">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nisi debitis iusto commodi ipsa accusantium numquam ratione ipsum quaerat quas!
            </p>
            <div className="btn btn-primary form-control">See More</div>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card