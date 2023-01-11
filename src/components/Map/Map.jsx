import {ReactLeafletWaypoints} from 'react-leaflet-waypoints';

const Map = ({coordinatesRequest}) => {
  return (
    <ReactLeafletWaypoints
      center={[50, 50]}
      zoom={11}
      lineOptions={[{
        color:255,
        opacity: 1,
        weight: 5
      }]}
      layerUrl="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      waypoints={[{lat: `${coordinatesRequest.coordinatesFromLat}`, lng: `${coordinatesRequest.coordinatesFromLng}`},
       {lat: `${coordinatesRequest.coordinatesToLat}`, lng: `${coordinatesRequest.coordinatesToLng}`}]}
    />
  );
}
export default Map;