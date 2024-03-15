// Types of hooks
// useState=> It is used to manage or change the state of the variable
// useEffect=> It is used for showing effect when the state changes its value
// useContext=> 
// useMemo
// useRef
import React, { useEffect, useState } from 'react'

const Usestate = () => {
    const [count, setCount] = useState(0)
    const [post, setPost]= useState(10)
    // post,setPost=10 +10 100 0

    //const [anyname, anyName] = useState(0)
    // const[variable,function]=useState(initial value)
    // initial value
    // 0-9 =>Number
    // "A-Z"=>String
    // {}=>object
    // []=>array
    useEffect(()=>{
        alert("value change")
    },[count,post])
    const increase = () => {
        setCount(count + 1)
    }
    const postIncrease=()=>{
        setPost(post + 10)
    }
    const postDecrease=()=>{
        setPost(post - 10)
    }
    return (
        <>
            <div>Count: {count}</div>

            {
                count<10 && <button onClick={increase}>Increase</button>
            }

            {
                count>0 &&  <button onClick={() => {
                    setCount(count - 1)
                }}>Decrease</button>
            }

            <div>Post Count: {post}</div>

            {
                post<100 && <button onClick={postIncrease}>Increase</button>
            }

            {
                post>0 && <button onClick={postDecrease}>Decrease</button>
            }
            
        </>
    )
}

export default Usestate