import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Display3 from './Display3'

function Data3() {
    const [post, setPost] = useState([])
    const [index, setIndex] = useState(4)
    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(res => res.data.products.slice(0, index))
            .then(data => {
                console.log(data)
                setPost(data)
            })
    }, [index])
    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {
                    post.map((v) => {
                        return <Display3 item={v} />
                    })
                }

            </div>
            {
                index>5&&
                <button className='btn btn-primary'onClick={() => {
                    setIndex(index - 4)
                }}>Load Less</button>
            }
            {
                index<30&&
                <button className='btn btn-primary' onClick={() => {
                    setIndex(index + 4)
                }}>Load More</button>
            }
        </>
    )
}

export default Data3