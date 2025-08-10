'use client';

import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Cape Verde coordinates (center of the country)
const CAPE_VERDE_CENTER = [16.5388, -23.0418]; // [lat, lng]

interface Coordinates {
  lat: number;
  lng: number;
  zoom: number;
}

interface MapGetCoordinantsProps {
  onCoordinatesChange?: (coords: Coordinates) => void;
  initialLat?: number;
  initialLng?: number;
  initialZoom?: number;
}

// Component to handle map click events
function MapClickHandler({ onCoordinatesChange }: { onCoordinatesChange: (coords: Coordinates) => void }) {
  const map = useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      const zoom = map.getZoom();
      onCoordinatesChange({ lat, lng, zoom });
    },
  });
  return null;
}

export const MapGetCoordinants = ({ 
  onCoordinatesChange, 
  initialLat = CAPE_VERDE_CENTER[0], 
  initialLng = CAPE_VERDE_CENTER[1], 
  initialZoom = 8 
}: MapGetCoordinantsProps) => {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [clickedMarkers, setClickedMarkers] = useState<Coordinates[]>([]);

  const handleMapClick = (coords: Coordinates) => {
    setCoordinates(coords);
    setClickedMarkers(prev => [...prev, coords]);
    
    // Call the callback function to pass coordinates to parent component
    if (onCoordinatesChange) {
      onCoordinatesChange(coords);
    }
  };

  return (
    <div className="w-full h-[300px] relative border rounded-lg overflow-hidden mt-3">
      <div style={{ height: '300px', width: '100%' }}>
        <MapContainer
          center={[initialLat, initialLng] as [number, number]}
          zoom={initialZoom}
          style={{ height: '100%', width: '100%' }}
        >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MapClickHandler onCoordinatesChange={handleMapClick} />
        
        {/* Display all clicked markers */}
        {clickedMarkers.map((marker, index) => (
          <Marker key={index} position={[marker.lat, marker.lng]}>
            <Popup>
              <div>
                <h3 className="font-bold">Coordinates {index + 1}</h3>
                <p>Latitude: {marker.lat.toFixed(6)}</p>
                <p>Longitude: {marker.lng.toFixed(6)}</p>
                <p>Zoom: {marker.zoom}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* Coordinates display panel */}
      <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg border max-w-sm hidden">
        <h3 className="font-bold text-lg mb-2">Map Coordinates</h3>
        {coordinates ? (
          <div className="space-y-1">
            <p><span className="font-semibold">Latitude:</span> {coordinates.lat.toFixed(6)}</p>
            <p><span className="font-semibold">Longitude:</span> {coordinates.lng.toFixed(6)}</p>
            <p><span className="font-semibold">Zoom:</span> {coordinates.zoom}</p>
            <p className="text-sm text-gray-600 mt-2">
              Click anywhere on the map to get coordinates
            </p>
          </div>
        ) : (
          <p className="text-gray-600">Click on the map to get coordinates</p>
        )}
        
        {clickedMarkers.length > 0 && (
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Clicked Points ({clickedMarkers.length})</h4>
            <button
              onClick={() => setClickedMarkers([])}
              className="text-sm bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Clear All
            </button>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};