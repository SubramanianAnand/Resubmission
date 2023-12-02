import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
     
    <BrowserRouter>
   
    <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>       
      <Route path='/home' element={<Home/>}/>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
