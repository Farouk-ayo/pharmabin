/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { usePatchRegisterUser } from "@/lib/hooks/api/mutations";
import { RegisteredUser } from "@/lib/types";
import Button from "@/components/buttons";
import { showToast } from "@/lib/util";
import { useParams, useRouter } from "next/navigation";
import Select from "react-select";
import { nigeriaStates } from "@/lib/data/nigeria-states-lga";
import { customStyles } from "@/app/register/components/stepTwo";

interface EditUserProps {
  user: RegisteredUser;
}

const EditUser: React.FC<EditUserProps> = ({ user }) => {
  const { id } = useParams();
  const router = useRouter();

  const stateOptions = nigeriaStates.map((state) => ({
    value: state.state.name,
    label: state.state.name,
  }));

  const [editedUser, setEditedUser] = useState<RegisteredUser>({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    emailAddress: user?.emailAddress || "",
    phoneNumber: user?.phoneNumber || "",
    organizationName: user?.organizationName || "",
    City: user?.City || "",
    State: user?.State || "",
    localGovt: user?.localGovt || "",
    zipCode: user?.zipCode || 0,
    Others: user?.Others || "",
  });

  const [availableLGAs, setAvailableLGAs] = useState<
    { value: string; label: string }[]
  >([]);

  useEffect(() => {
    if (editedUser.State) {
      const selectedState = nigeriaStates.find(
        (state) => state.state.name === editedUser.State
      );
      if (selectedState) {
        const lgaOptions = selectedState.state.locals.map((lga) => ({
          value: lga.name,
          label: lga.name,
        }));
        setAvailableLGAs(lgaOptions);
      }
    }
  }, [editedUser.State]);

  const { mutate: updateUser, isPending } = usePatchRegisterUser();

  const handleInputChange = (field: keyof RegisteredUser, value: string) => {
    setEditedUser((prev) => ({ ...prev, [field]: value }));
  };

  const onCancel = () => {
    router.push("/dashboard/users");
  };

  const handleSave = () => {
    updateUser(
      { _id: Array.isArray(id) ? id[0] : id || "", data: editedUser },
      {
        onSuccess: () => {
          showToast.success("User updated successfully");
          router.push("/dashboard/users");
        },
        onError: (error) => {
          showToast.error(error.message);
        },
      }
    );
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold text-green-700 mb-6">Edit User</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700">
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
          <label className="block text-sm font-semibold text-gray-700">
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
          <label className="block text-sm font-semibold text-gray-700">
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
          <label className="block text-sm font-semibold text-gray-700">
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
          <label className="block text-sm font-semibold text-gray-700">
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
          <label className="block text-sm font-semibold text-gray-700">
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
          <label className="block text-sm font-semibold text-gray-700">
            State
          </label>
          <Select
            className="bg-transparent"
            options={stateOptions}
            styles={customStyles}
            placeholder="Select State"
            value={
              stateOptions.find(
                (option) => option.value === editedUser.State
              ) || null
            }
            onChange={(option) =>
              handleInputChange("State", option?.value || "")
            }
          />
        </div>
        {/* Organization Local Govt */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Local Govt
          </label>
          <Select
            options={availableLGAs}
            isDisabled={!editedUser.State}
            placeholder="Select LGA"
            value={
              availableLGAs.find(
                (option) => option.value === editedUser.localGovt
              ) || null
            }
            onChange={(option) =>
              handleInputChange("localGovt", option?.value || "")
            }
          />
        </div>
        {/* Zip Code */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
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
        <div className="">
          <label className="block text-sm font-semibold text-gray-700">
            Others (What do you want to dispose? Any special time?)
          </label>
          <textarea
            placeholder="Enter other details"
            value={editedUser.Others || ""}
            rows={3}
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
