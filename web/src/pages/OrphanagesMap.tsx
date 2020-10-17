import React from 'react'
import { Link } from 'react-router-dom'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { FiPlus, FiArrowRight } from 'react-icons/fi'

import mapMarkerImg from '../images/map_marker.svg'
import mapIcon from '../utils/mapIcon'

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

    <Map center={[ -23.5228368,-47.4879205]} zoom={15} style={{ width: '100%', height: '100%' }} >
      <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      <Marker icon={mapIcon} position={[ -23.5228368,-47.4879205]}>
        <Popup closeButton={false} minWidth={200} maxWidth={200} className="map-popup">
          Lar das Meninas <Link to='/orphanages/1'><FiArrowRight size={20} color="#FFF" /></Link>
        </Popup>
      </Marker>
    </Map>

    <Link to='/orphanages/create' className='create-orphanage'>
      <FiPlus size={32} color='#FFF' />
    </Link>
  </div>

export default OrphanagesMap