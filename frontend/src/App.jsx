import { signInWithPopup } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth,googleProvider } from '../utlis/firebase'
import api from '../utlis/axios'
import Home from './pages/Home'
import getCurrentUser from './features/getCurrentUser'



function App() {
  useEffect(()=>{
    const getUser = async()=>{
      await getCurrentUser()
    }
    getUser()
  }, [])

  return (
    <>
    <Home/>
    </>
  )
}

export default App