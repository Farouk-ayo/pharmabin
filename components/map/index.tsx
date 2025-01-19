"use client";
import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  ZoomControl,
  useMap,
} from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import Button from "../buttons";
import { MapPinIcon } from "lucide-react";

// Define the location type
type Location = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
};

// Sample data - replace with your actual data
const sampleLocations: Location[] = [
  {
    id: 1,
    name: "PharmaBin Central",
    lat: 7.3775,
    lng: 3.947,
    address: "123 Medical Way, Osogbo",
  },
  {
    id: 2,
    name: "PharmaBin East",
    lat: 7.3875,
    lng: 3.957,
    address: "456 Health Street, Osogbo",
  },
];

// Custom hook for handling map events
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

// Create custom icon
const customIcon = new Icon({
  iconUrl: "/api/placeholder/32/32",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const MapComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [center, setCenter] = useState<[number, number]>([7.3775, 3.947]); // Osogbo coordinates
  const [locations, setLocations] = useState<Location[]>(sampleLocations);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);

    try {
      // Nominatim is a free geocoding service
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          searchQuery
        )}&country=nigeria`
      );
      const data = await response.json();

      if (data && data[0]) {
        setCenter([parseFloat(data[0].lat), parseFloat(data[0].lon)]);

        // Simulate finding nearby locations
        // In a real app, you'd query your backend for actual locations
        const newLocations = sampleLocations.map((loc) => ({
          ...loc,
          lat: parseFloat(data[0].lat) + (Math.random() - 0.5) * 0.01,
          lng: parseFloat(data[0].lon) + (Math.random() - 0.5) * 0.01,
        }));
        setLocations(newLocations);
      }
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleUseMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 h-[500px] relative">
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
          <MapEvents onMoveEnd={setCenter} />

          {locations.map((location) => (
            <Marker
              key={location.id}
              position={[location.lat, location.lng]}
              icon={customIcon}
              eventHandlers={{
                click: () => setSelectedLocation(location),
              }}
            />
          ))}
        </MapContainer>
      </div>

      <div className="bg-green-600 p-6 rounded-lg h-min">
        <form onSubmit={handleSearch} className="space-y-4">
          <h2 className=" text-white text-base md:text-lg">
            Enter your zip code or city, state abbreviation (e.g. Ife Central,
            Osun State) to find PharmaBin service locations near you.
          </h2>
          <div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter ZIP Code, City, State..."
              className="w-full p-3 rounded-md bg-transparent border border-gray-50 text-white focus:outline-none"
            />
          </div>

          <Button
            type="submit"
            // disabled={isSearching}
            className="w-full"
            variant="secondary"
          >
            {isSearching ? "Searching..." : "Search"}
          </Button>

          <button
            type="button"
            onClick={handleUseMyLocation}
            className="w-full flex items-center  justify-center bg-transparent text-secondary font-semibold"
          >
            <MapPinIcon />
            Use My Location
          </button>
        </form>

        {selectedLocation && (
          <div className="mt-6 p-4 bg-white rounded-lg">
            <h3 className="font-semibold text-gray-900">
              {selectedLocation.name}
            </h3>
            <p className="text-gray-600 text-sm">{selectedLocation.address}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapComponent;
