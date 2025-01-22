"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { useGetRegisterUsers } from "@/lib/hooks/api/queries";
import { nigeriaStates } from "@/lib/data/nigeria-states-lga";

const PharmacyDirectory = () => {
  const { data: pharmacies = [], isLoading } = useGetRegisterUsers();
  const [selectedState, setSelectedState] = useState("Osun State");
  const [selectedArea, setSelectedArea] = useState<string>("Ife Central");
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  const [localAreas, setLocalAreas] = useState<{ name: string; id: number }[]>(
    []
  );

  useEffect(() => {
    const stateData = nigeriaStates.find(
      (state) => state.state.name === selectedState
    );
    if (stateData) {
      setLocalAreas(stateData.state.locals);
      setSelectedArea(stateData.state.locals[0]?.name || "");
    }
  }, [selectedState]);

  const filteredPharmacies = pharmacies.filter(
    (pharmacy) =>
      pharmacy.State === selectedState && pharmacy.localGovt === selectedArea
  );

  return (
    <div className="mx-auto px-4 lg:px-28 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div className="flex items-center gap-5 justify-center mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Discover PharmaBin Collection Point In
          </h1>
          <button
            onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)}
            className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition-colors"
          >
            {selectedState}
            <ChevronDown size={20} />
          </button>
        </div>

        {/* State Selector */}
        <div className="relative">
          {isStateDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              {nigeriaStates.map((state) => (
                <button
                  key={state.state.id}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setSelectedState(state.state.name);
                    setIsStateDropdownOpen(false);
                  }}
                >
                  {state.state.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="font-semibold mb-4">Local Governments</h2>
            <nav className="space-y-1">
              {localAreas.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setSelectedArea(area.name)}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                    selectedArea === area.name
                      ? "bg-green-100 text-green-700"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {area.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Pharmacy Listings */}
        <div className="lg:col-span-3">
          {isLoading ? (
            <p>Loading pharmacies...</p>
          ) : filteredPharmacies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredPharmacies.map((pharmacy) => (
                <div
                  key={pharmacy._id}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-green-600 mb-2">
                    {pharmacy.organizationName}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin
                        size={16}
                        className="mt-1 flex-shrink-0 text-gray-400"
                      />
                      <p className="text-gray-600">{pharmacy.City}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-gray-400" />
                      <p className="text-gray-600">
                        Phone No: {pharmacy.phoneNumber}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={16} className="text-gray-400" />
                      <p className="text-gray-600">
                        Email: {pharmacy.emailAddress}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No pharmacies found for this selection.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PharmacyDirectory;
