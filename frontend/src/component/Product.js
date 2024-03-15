import React, { useEffect, useState } from 'react'
import { getallproduct } from '../api/adminApi'
import { API } from "../config"
import { Link } from 'react-router-dom'

function Product() {
  const [product,setProduct]=useState([])
  const [error,setError]=useState('')
  const [success,setSuccess]=useState('')
  const [search,setSearch]=useState('')
  const [filterproduct,setFilterproduct]=useState([])

  useEffect(()=>{
    getallproduct()
    .then(data=>{
      if(data.error){
        setError(data.error)
      }else{
        setProduct(data)
        setFilterproduct(data)
      }
    })
  },[])
  const handleFilter=()=>{
    setFilterproduct( product.filter(item=>{
      return search.toLowerCase()==""?
      item : item.product_name.toLowerCase().includes(search.toLowerCase())
    }))
  }
  return (
    <>
    <div className="container-fluid mt-4">
      <div className="d-flex justify-content-end mb-4">
        <input type="search" className='form-control w-25' placeholder='Search' onChange={e=>setSearch(e.target.value)} onKeyUp={handleFilter}/>
      </div>
        <div className="row">
            <div className="col-md-2">
                <h4 className="text-primary">Flash Sale</h4>
                <h4 className="text-warning">Deals of the day</h4>
                <h4 className="text-success">New Products</h4>
                <h4 className="text-primary text-decoration-underline mt-3">Categories</h4>
                <div className="form-check mt-3">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                        Mobiles
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                        Laptops
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                        Dress
                    </label>
                </div> 
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                        Electronics
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                        Fitness and Gym
                    </label>
                </div>
                <h4 className="text-primary text-decoration-underline mt-3">Prices</h4>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                        All
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                        Above Nrs.1,00,000 
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Nrs.70,00-Nrs.1,00,000
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Nrs.30,000-Nrs.70,000
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Nrs.10,000-30,000
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Below Nrs.10,000
                    </label>
                </div>
            </div>
            <div className="col-md-10">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                  {
                    filterproduct.length>0?
                    <>
                    {
                        filterproduct && filterproduct.map((v,i)=>{
                          return <div className="col-lg-3">
                            <div className="card">
                            <div className="zoom">
                            <img src={`${API}/${v.product_image}`} alt="..." height={120}/>
                            </div>
                            <div className="card-body">
                              <h5 className="card-title">{v.product_name}</h5>
                              <p className="card-text text-truncate">{v.product_description}</p>
                              <Link to={`/product1/${v._id}`}><div className="btn btn-primary form-control">See More</div></Link>
                            </div>
                          </div>
                        </div>
                        })
                    }
                    </>:
                    <div className="alert alert-danger">No items Match</div>
                  }
                    
                      
                  </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Product