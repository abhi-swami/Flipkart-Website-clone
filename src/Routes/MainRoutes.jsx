import React from 'react'
import {Routes,Route} from 'react-router-dom'
import LoginModal from '../Components/LoginModal/LoginModal'
import SignUp from '../Components/LoginModal/SignUp'
import Cart from '../Components/cart/Cart'
import ProtectedRoute from '../Components/LoginModal/ProtectedRoute'
const MainRoutes = () => {
  return (<>
    <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<LoginModal/>}/>
        <Route path='/cart' element={<ProtectedRoute><Cart/></ProtectedRoute>}/>
    </Routes>
    </>
  )
}

export default MainRoutes