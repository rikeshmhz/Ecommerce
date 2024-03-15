import React, { useEffect, useState } from 'react'
import Card1 from '../component/Card1'
import Carousel from '../component/Carousel'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import "../App.css"

const Home = () => {
    const [post, setPosts] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setPosts(json)
            }

            )
    }, [])
    return (
        <div>
            <Navbar />
            <Carousel />
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {post.map((v) => {
                    return <Card1 post={v} />
                })}
            </div>
            <Footer />
        </div>
    )
}

export default Home