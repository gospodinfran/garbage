import mapboxgl from 'mapbox-gl'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [marker, setMarker] = useState()

  mapboxgl.accessToken = 'pk.eyJ1IjoiZ29zcG9kaW5mcmFuIiwiYSI6ImNsYzFuMTV0cTE1dXUzdHA4cW1lMmQxZmsifQ.WI514R1Wcis_C-G-9WHJzQ'

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      center: [ 15.972250920113112, 45.80635446178686 ],
      style: 'mapbox://styles/mapbox/streets-v12',
      zoom: 11
    })
    const mapMarker = new mapboxgl.Marker({
      pitchAlignment: 'viewport',
    })
    .setLngLat([ 15.96901687684651, 45.79548917301627 ])
    .addTo(map)
    setMarker(mapMarker)
  }, [])

  function handleSelectChange(e) {
    const location = locations[e.target.value]
    marker.setLngLat(location)
  }

  const locations = {
    vrbik: [ 15.96901687684651, 45.79548917301627 ],
    mekpers: [ 15.914367639669258, 45.800855536618656 ],
    center: [ 15.977002388800772, 45.8131677209045 ],
    gym: [ 16.002357365, 45.801998985 ]
  }

  return (<>
  <p>Fran's notable locations in Zagreb</p>
  <br />
  <select onChange={handleSelectChange}>
    <option value='vrbik'>Vrbik</option>
    <option value='mekpers'>mekPer's</option>
    <option value='center'>Center</option>
    <option value='gym'>Gym</option>
  </select>
  <div id='map'></div>
  </>)
}

export default App
