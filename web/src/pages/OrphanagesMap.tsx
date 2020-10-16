import React from 'react'
import { Link } from 'react-router-dom'
import { Map, TileLayer } from 'react-leaflet'
import { FiPlus } from 'react-icons/fi'

import mapMarkerImg from '../images/map_marker.svg'

import 'leaflet/dist/leaflet.css'

import '../styles/pages/orphanages-map.css'

const OrphanagesMap = () =>
  <div id='page-map'>
    <aside>
      <header>
        <img src={mapMarkerImg} alt='Happy' />

        <h2>Escolha o seu orfanato</h2>
        <p>Muitas crianças estão esperando a sua visita :)</p>
      </header>

      <footer>
        <strong>Sorocaba</strong>
        <span>São Paulo</span>
      </footer>
    </aside>

    <Map center={[-23.5179898,-47.4849773]} zoom={15} style={{ width: '100%', height: '100%' }} >
      <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
    </Map>

    <Link to='' className='create-orphanage'>
      <FiPlus size={32} color='#FFF' />
    </Link>
  </div>

export default OrphanagesMap