import React from 'react'

function Card({post}) {
    return (
        <>
            <div className="card-group container mt-5">
                <div className="card">
                    <div className="zoom">
                        <img src={post.url} height="200px" width="450px" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        {/* <h5 className="text-muted">Nrs. 2000</h5>
                        <p className="card-text text-truncate"> */}
                            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime obcaecati assumenda animi placeat. Cumque delectus dolorem dolorum quas optio beatae. */}
                        {/* </p> */}
                        {/* <div className="btn btn-primary form-control">See More</div> */}
                        {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card