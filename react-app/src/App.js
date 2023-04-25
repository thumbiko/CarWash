import {Route, Routes} from 'react-router-dom'
import Bookings from './pages/Bookings'
import CreateBooking from './pages/CreateBooking'
import Homepage from './pages/Hompage'
//import BeforeAfter from './pages/BeforeAfter'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Register from './pages/Register'
import Locations from './pages/Locations'
import Services from './pages/Services'
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Homepage />}/>
        <Route exact path='/LandingPage' element={<LandingPage />}/>
        <Route exact path='/home' element={<Homepage />}/>
        <Route path='/bookings' element={<Bookings />}/>
        <Route path='/bookings/add' element={<CreateBooking />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/locations' element={<Locations />}/>
        <Route path='/services' element={<Services />}/>
      </Routes>
    </div>
  );
}

export default App;
