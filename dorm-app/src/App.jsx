import { useEffect, useState } from 'react'
import './App.css'
import Container from './Container'
import Dropdown from './Dropdown'
import Navbar from './Navbar'
import Reservations from './Reservations'
import ReservationsMap from './ReservationsMap'

function App() {
  const [ menuOpen, setMenuOpen ] = useState(false)
  const [ reservations, setReservations ] = useState([])

  function handleDropdownClick() {
    setMenuOpen(!menuOpen)
}

  return (
    <Container>
      <Navbar onMenuOpen={handleDropdownClick}/>
      <Dropdown open={menuOpen} />
      <Reservations>
        { reservations.length == 0 ? 
        <div className='no-reservation'><p>You have no current reservations.</p>
        <p>Make a reservation by going into available times and scheduling a reservation.</p>
        </div>

       : <ReservationsMap />}
      </Reservations>

    </Container>
  )
}

export default App
