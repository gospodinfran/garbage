import { useEffect, useState } from 'react'
import './App.css'
import Container from './Container'
import Dropdown from './Dropdown'
import Navbar from './Navbar'
import Reservations from './Reservations'
import useMapboxMap from './useMapboxMap'


function App() {
  const [ menuOpen, setMenuOpen ] = useState(false)
  const [ reservations, setReservations ] = useState([])

  useEffect(() => {
    let title = ''
    reservations.length > 0 
    ? title = `${reservations.length} reservations`
    : title = `Make a reservation`
    document.title = title
  }, [reservations])

  useMapboxMap({
    container: 'map'
  })

  function handleDropdownClick() {
    setMenuOpen(!menuOpen)
}

  return (<>
    <Navbar onMenuOpen={handleDropdownClick}/>
    <Container>
      <Dropdown open={menuOpen} />
      <Reservations reservations={reservations} />
      <div id="map"></div>
    </Container>
    
    </>)
}

export default App
