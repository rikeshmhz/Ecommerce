import React, { useEffect, useState } from 'react'
import Demodisplay from './Demodisplay'

const Demo = () => {
    const [count, setCount] = useState(0)
    const [info, setInfo]=useState([])
    const [search,setSearch]=useState('')
    const [filter,setFilter]=useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then (res=> res.json())
        .then (json=>{   
                console.log(json)
                setInfo(json)
                setFilter(json)
        })
    }, [count])

    const increase = () => {
        setCount(count + 1)
    }

    const handleFilter =()=>{
        setFilter(info.filter(items=>{
            return search.toLowerCase() == "" ?
            items : items.category.toLowerCase().includes(search.toLowerCase())
        }))
    }

    return (
        <>
            count: {count}
           {count<10 && <button onClick={increase}>Increase</button>}
           <input type="text" onChange={e=>setSearch(e.target.value)} onKeyUp={handleFilter}/>
           {
                filter && filter.map((v)=>{
                    return <Demodisplay data={v}/>
                }              
                )
           }
        </>
    )
}

export default Demo