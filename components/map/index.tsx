"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { MapPinIcon } from "lucide-react";
import Button from "../buttons";

// Types
type Location = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
};

// Sample data
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

// Dynamically import the Map component with SSR disabled
const Map = dynamic(() => import("./mapInner").then((mod) => mod.default), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] w-full bg-gray-100 animate-pulse flex items-center justify-center">
      Loading Map...
    </div>
  ),
});

const MapComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [center, setCenter] = useState<[number, number]>([7.3775, 3.947]);
  const [locations, setLocations] = useState<Location[]>(sampleLocations);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          searchQuery
        )}&country=nigeria`
      );
      const data = await response.json();

      if (data && data[0]) {
        setCenter([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
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
    if (typeof window !== "undefined" && navigator.geolocation) {
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
        <Map
          center={center}
          locations={locations}
          onLocationSelect={setSelectedLocation}
        />
      </div>

      <div className="bg-primary p-6 rounded-lg h-min">
        <form onSubmit={handleSearch} className="space-y-4">
          <h2 className="text-white text-base md:text-lg">
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

          <Button type="submit" className="w-full" variant="secondary">
            {isSearching ? "Searching..." : "Search"}
          </Button>

          <button
            type="button"
            onClick={handleUseMyLocation}
            className="w-full flex items-center justify-center bg-transparent text-secondary font-semibold"
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
