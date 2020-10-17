import React from "react";
import { FiClock, FiInfo, FiArrowLeft } from "react-icons/fi";
import { useHistory } from 'react-router-dom';

import mapMarkerImg from '../images/map_marker.svg';

import '../styles/components/sidebar.css'

const Sidebar = () => {
    const { goBack } = useHistory();

    return (
        <aside className="app-sidebar">
            <img src={mapMarkerImg} alt="Happy" />
            
            <footer>
            <button type="button" onClick={goBack}>
                <FiArrowLeft size={24} color="#FFF" />
            </button>
            </footer>
        </aside>
    )
}

export default Sidebar