// MapInner.tsx
"use client";
import React, { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  ZoomControl,
  useMap,
} from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

type Location = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
};

type MapProps = {
  center: [number, number];
  locations: Location[];
  onLocationSelect: (location: Location) => void;
};

const MapEvents = ({
  onMoveEnd,
}: {
  onMoveEnd: (center: [number, number]) => void;
}) => {
  const map = useMap();

  useEffect(() => {
    map.on("moveend", () => {
      const center = map.getCenter();
      onMoveEnd([center.lat, center.lng]);
    });
  }, [map, onMoveEnd]);

  return null;
};

const customIcon = new Icon({
  iconUrl: "/api/placeholder/32/32",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const MapInner = ({ center, locations, onLocationSelect }: MapProps) => {
  return (
    <MapContainer
      center={center}
      zoom={13}
      className="h-full w-full"
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomright" />
      <MapEvents onMoveEnd={() => {}} />

      {locations.map((location) => (
        <Marker
          key={location.id}
          position={[location.lat, location.lng]}
          icon={customIcon}
          eventHandlers={{
            click: () => onLocationSelect(location),
          }}
        />
      ))}
    </MapContainer>
  );
};

export default MapInner;