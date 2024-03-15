import React from 'react'
import { Link } from 'react-router-dom'

function Display3({item}) {
    return (
        <div>
            <div class="col">
                <div class="card">
                    <img src={item.thumbnail} class="card-img-top" height="200px" width="200px" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{item.title}</h5>
                        <p class="card-text text-truncate">{item.description}</p>
                        <Link to={`/product/${item.id}`}><button className='btn btn-primary'>See More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Display3