import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { FiPlus, FiArrowRight } from 'react-icons/fi'

import mapMarkerImg from '../images/map_marker.svg'
import mapIcon from '../utils/mapIcon'
import api from '../services/api'

import 'leaflet/dist/leaflet.css'

import '../styles/pages/orphanages-map.scss'

interface Orphanage {
  id: number
  latitude: number
  longitude: number
  name: string
}

const OrphanagesMap = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data)
    })
  }, [])

  return (
    <div id='page-map'>
      <aside>
        <header>
          <img src={mapMarkerImg} alt='Happy' width='100px' />

          <h2>Escolha a sua cafeteria</h2>
          <p>Seu dia pede uma boa xícara de café</p>
        </header>

        <footer>
          <strong>Sorocaba</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map center={[ -23.5228368,-47.4879205]} zoom={15} style={{ width: '100%', height: '100%' }} >
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
        
        {orphanages.map(orphanage => (
          <Marker icon={mapIcon} position={[ orphanage.latitude, orphanage.longitude]} key={orphanage.id}>
            <Popup closeButton={false} minWidth={200} maxWidth={200} className="map-popup">
              {orphanage.name}
              <Link to={`/orphanages/${orphanage.id}`}><FiArrowRight size={20} color="#FFF" /></Link>
            </Popup>
          </Marker>
        ))}

      </Map>

      <Link to='/orphanages/create' className='create-orphanage'>
        <FiPlus size={32} color='#FFF' />
      </Link>
    </div>
  )
}

export default OrphanagesMap