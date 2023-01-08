import mapboxgl from 'mapbox-gl'
import { useEffect } from 'react'

mapboxgl.accessToken = "pk.eyJ1IjoiZ29zcG9kaW5mcmFuIiwiYSI6ImNsYzFuMTV0cTE1dXUzdHA4cW1lMmQxZmsifQ.WI514R1Wcis_C-G-9WHJzQ"

const defaultOptions = {
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [ 24.953116312742363, 60.198571104384634 ],
    zoom: 16
}

export default function useMapboxMap(options) {
    useEffect(() => {
        const map = new mapboxgl.Map({
            ...defaultOptions,
            ...options
        })
        const mapMarker = new mapboxgl.Marker()
        .setLngLat([ 24.953116312742363, 60.198571104384634 ])
        .addTo(map)
    }, [])
}