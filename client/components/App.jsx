import React, { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

//import FoundPets from './foundPets'
import LostPets from './LostPet'
import LostForm from './LostForm'
import FoundForm from './FoundForm'
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
            <img src= "/images/LostAFoundLogo.png"/>
          </Link>
          <Nav />
        </div>
      </div>

      <div className="">
        <Routes>
          <Route
            path="/"
            element={<Home /> }
          />
          <Route path="./Login" element={<Login />} />
          <Route path="./Register" element={<Register />} />
          <Route path='./LostForm' element={<LostForm />} />
          <Route path='./FoundForm' element={<FoundForm />} />
          <Route path='./LostPets' element={<LostPets />} /> 
          {/* <Route path='./FoundPets' element={<FoundPets />} /> */}
        </Routes> 
      </div>
    </div>
  )
}

export default App
