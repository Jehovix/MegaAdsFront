import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import '../../utils/fix-map-icon'

import 'leaflet/dist/leaflet.css'
import './Map.css'

export const Map =() => {
    return (
        <div className="map">
            <MapContainer center={[53.2159863,21.4691204]} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[53.2159863,21.4691204]}>
                    <Popup>
                        <h2>Mjr.Soft.House</h2>
                        <p>kodowanie i wysokie raty w Wowie</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}