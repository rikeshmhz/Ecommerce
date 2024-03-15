import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <>
     <div className="text-center container mt-5">
        <main className="form-signin w-25 m-auto border p-1 rounded-5 shadow-lg">
          <form>
            <img className="mb-4 rounded-circle" src="https://cdn.pixabay.com/photo/2016/12/26/18/33/logo-1932539__340.png" alt="" width="72" height="57" />
            <h1 className="h3 mb-3 fw-normal">Create Account</h1>
            <div className="form-floating">
                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">First Name</label>
              </div>
            <div className="form-floating">
              <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label for="floatingInput">Last Name</label>
            </div>
            <div className="form-floating">
                <input type="date" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Date of Birth</label>
            </div>
            <div className="row g-2">
                <div className="col-md-4">
                  <div className="form-floating">
                    <select className="form-select" id="floatingSelectGrid">
                      <option selected>Code</option>
                      <option value="1">+977</option>
                      <option value="2">+91</option>
                      <option value="3">+81</option>
                    </select>
                    <label for="floatingSelectGrid">Code1</label>
                  </div>
                </div>
                <div className="col-md-8">
                    <div className="form-floating">
                      <input type="number" className="form-control" id="floatingInputGrid" placeholder="name@example.com" value="mdo@example.com" />
                      <label for="floatingInputGrid">Contact Number</label>
                    </div>
                  </div>
              </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label for="floatingPassword">Password</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Confirm Password</label>
              </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
            Have an account <Link to="./signin.html">Signin</Link>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
          </form>
        </main>
          </div>
    </>
  )
}

export default Register