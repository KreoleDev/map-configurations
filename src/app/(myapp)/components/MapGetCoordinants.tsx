'use client';

import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { GisBaseMapsTypeArgs, GisMapProps, SimpleGisMap } from '@simple/maps-ui';

// Fix for default markers in react-leaflet
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Cape Verde coordinates (center of the country)
const CAPE_VERDE_CENTER = [ 16.024695711685315, -24.301757812500004]; // [lat, lng]

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
function MapClickHandler({
  onCoordinatesChange,
}: {
  onCoordinatesChange: (coords: Coordinates) => void;
}) {
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
  initialZoom = 8,
}: MapGetCoordinantsProps) => {
 
  const handleMapClick = (coords: any) => {

    console.log(coords);

    // Call the callback function to pass coordinates to parent component
    if (onCoordinatesChange) {
      onCoordinatesChange({...coords, zoom: initialZoom});
    }
  };

  const config: GisMapProps = {
    name: 'Get Enquandramento',
    center: { lat: initialLat, lng: initialLng  },
    zoom: initialZoom,
    showHeader: false,
    showLayers: false,
    showZoom: false,
    showLocation: false,
    showHome: false,
    showFullscreen: false,
    showWidgets: false,
    showScale: false,
    groupLayers: [],
    baseMaps: [],
  };


  return (
    <div
      className="w-full relative border rounded-lg overflow-hidden mt-3"
      style={{ height: '400px', width: '100%' }}
    >
      {config && <SimpleGisMap  config={config} onCoordinatesChange={handleMapClick}/>}
    </div>
  );
};


