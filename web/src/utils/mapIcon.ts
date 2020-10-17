import Leaflet from 'leaflet'

import mapMarkerImg from '../images/map_marker.svg'

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [38, 48],
    iconAnchor: [19, 48],
    popupAnchor: [140, 4]
  })

  export default mapIcon