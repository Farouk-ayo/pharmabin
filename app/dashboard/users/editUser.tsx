"use client";

import React, { useState } from "react";
import { usePatchRegisterUser } from "@/lib/hooks/api/mutations";
import { RegisteredUser } from "@/lib/types";
import Button from "@/components/buttons";

interface EditUserProps {
  user: RegisteredUser;
  onCancel: () => void;
}

const EditUser: React.FC<EditUserProps> = ({ user, onCancel }) => {
  const [editedUser, setEditedUser] = useState<RegisteredUser>(user);
  const { mutate: updateUser, isPending } = usePatchRegisterUser();

  const handleInputChange = (field: keyof RegisteredUser, value: string) => {
    setEditedUser((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    updateUser(
      { _id: editedUser._id || "", data: editedUser },
      {
        onSuccess: () => {
          onCancel();
        },
      }
    );
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold text-green-700 mb-6">Edit User</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            placeholder="Enter first name"
            value={editedUser.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>
        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Enter last name"
            value={editedUser.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>
        {/* Email Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            value={editedUser.emailAddress}
            onChange={(e) => handleInputChange("emailAddress", e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>
        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            placeholder="Enter phone number"
            value={editedUser.phoneNumber}
            onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>
        {/* Organization Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Pharmacy/Company/Organisation Name
          </label>
          <input
            type="text"
            placeholder="Enter business name"
            value={editedUser.organizationName}
            onChange={(e) =>
              handleInputChange("organizationName", e.target.value)
            }
            className="w-full p-2 border rounded-md"
          />
        </div>
        {/* Organization Address/City */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Pharmacy/Company/Organisation Address/City
          </label>
          <input
            type="text"
            placeholder="Enter business address/city"
            value={editedUser.emailAddress || ""}
            onChange={(e) => handleInputChange("emailAddress", e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>
        {/* Organization State */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Pharmacy/Company/Organisation State
          </label>
          <input
            type="text"
            placeholder="Enter business state"
            value={editedUser.State || ""}
            onChange={(e) => handleInputChange("State", e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>
        {/* Organization Local Govt */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Pharmacy/Company/Organisation Local Govt
          </label>
          <input
            type="text"
            placeholder="Enter business local government"
            value={editedUser.localGovt || ""}
            onChange={(e) => handleInputChange("localGovt", e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>
        {/* Zip Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Pharmacy/Company/Organisation Zip Code
          </label>
          <input
            type="text"
            placeholder="Enter business zip code"
            value={editedUser.zipCode || ""}
            onChange={(e) => handleInputChange("zipCode", e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>
        {/* Other Details */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Others (What do you want to dispose? Any special time?)
          </label>
          <textarea
            placeholder="Enter other details"
            value={editedUser.Others || ""}
            onChange={(e) => handleInputChange("Others", e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>
      </form>
      {/* Buttons */}
      <div className="mt-6 flex justify-end gap-4">
        <Button
          onClick={onCancel}
          className="!bg-gray-50 !text-black !px-6 !py-2 rounded-md"
        >
          Cancel
        </Button>
        <Button
          isLoading={isPending}
          onClick={handleSave}
          className="!bg-black !text-white !px-6 !py-2 rounded-md"
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditUser;
