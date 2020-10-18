import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

import '../styles/pages/landing.scss'

import logoImg from '../images/logo.png'
import mapMarkerImg from '../images/map_marker.svg'

const Landing = () => 
    <div id="page-landing">
      <div className="content-wrapper">
        <div style={{ display: 'flex' }}>
          <img src={mapMarkerImg} alt="Happy" width='70px' />
          <img src={logoImg} alt="Happy" width='210px' />
        </div>

        <main>
          <h1>Uma xícara de felicidade</h1>
          <p>Visite cafeterias e torne seu dia mais feliz.</p>
        </main>

        <div className="location">
          <strong>Sorocaba</strong>
          <span>São Paulo</span>
        </div>

        <Link to="/map" className="enter-app"><FiArrowRight size={26} color="#fff" /></Link>
      </div>
    </div>
  
export default Landing;
