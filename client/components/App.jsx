import React, { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import FoundPets from './foundPets'
import LostPets from './lostPets'
import LostForm from './lostForm'
import FoundForm from './foundForm'
import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import Home from './Home'


import { checkAuth } from '../Redux/authActions'

function App() {
  const dispatch = useDispatch()
  const auth = useSelector((redux) => redux.auth)

  useEffect(() => {
    const confirmSuccess = () => {}
    dispatch(checkAuth(confirmSuccess))
  }, [])

  return (
    <div className="container has-text-centered">
      <div className="hero is-small is-primary">
        <div className="hero-body has-text-centered">
          <Link to="/" className="">
            <h1 className="title is-1">Lost and Found</h1>
          </Link>
          <Nav />
        </div>
      </div>

      <div className="">
        <Routes>
          <Route
            path="/"
            element={auth.isAuthenticated ? <Home /> : <Login />}
          />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path='/LostForm' element={<LostForm />} />
          <Route path='/FoundForm' element={<FoundForm />} />
          <Route path='/LostPets' element={<LostPets />} />
          <Route path='/FoundPets' element={<FoundPets />} />
        </Routes>
       
      </div>
    </div>
  )
}

export default App
