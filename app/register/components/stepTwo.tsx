/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { StepTwoInputs, stepTwoSchema } from "@/lib/validation";
import { nigeriaStates } from "@/lib/data/nigeria-states-lga";
import Button from "@/components/buttons";
import { ArrowLeftIcon } from "lucide-react";
import Select from "react-select";

interface StepTwoProps {
  onNext: (data: StepTwoInputs) => void;
  onBack: () => void;
  defaultValues?: Partial<StepTwoInputs>;
}

interface SelectOption {
  value: string;
  label: string;
}

const StepTwoForm = ({ onNext, onBack, defaultValues }: StepTwoProps) => {
  const [availableLGAs, setAvailableLGAs] = useState<SelectOption[]>([]);

  // Format states for react-select
  const stateOptions: SelectOption[] = nigeriaStates.map((state) => ({
    value: state.state.id.toString(),
    label: state.state.name,
  }));

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<StepTwoInputs>({
    resolver: zodResolver(stepTwoSchema),
    defaultValues,
  });

  const selectedState = watch("state");

  // Update LGAs when state changes
  useEffect(() => {
    if (selectedState) {
      const selected = nigeriaStates.find(
        (state) => state.state.id.toString() === selectedState
      );
      if (selected) {
        const lgaOptions = selected.state.locals.map((lga) => ({
          value: lga.id.toString(),
          label: lga.name,
        }));
        setAvailableLGAs(lgaOptions);
      }
    }
  }, [selectedState]);

  // Set initial state and LGAs if defaultValues exist
  useEffect(() => {
    if (defaultValues?.state) {
      const selected = nigeriaStates.find(
        (state) => state.state.id.toString() === defaultValues.state
      );
      if (selected) {
        const lgaOptions = selected.state.locals.map((lga) => ({
          value: lga.id.toString(),
          label: lga.name,
        }));
        setAvailableLGAs(lgaOptions);
      }
    }
  }, [defaultValues]);

  const customStyles = {
    control: (base: any) => ({
      ...base,
      padding: "2px",
      borderRadius: "6px",
      borderColor: "#E5E7EB",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#D1D5DB",
      },
      minHeight: "42px",
      scrollbarWidth: "thin",
      scrollbarColor: "#e5e7eb #e5e7eb",
    }),
    option: (base: any, state: { isSelected: boolean }) => ({
      ...base,
      backgroundColor: state.isSelected ? "#157D18" : "white",
      "&:hover": {
        backgroundColor: state.isSelected ? "#157D18" : "#f3f4f6",
      },
    }),
  };

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-4">
      <div className="w-full">
        <label className="block text-base lg:text-lg text-gray-600 font-semibold mb-1">
          Pharmacy/Company/Organisation Name
        </label>
        <input
          {...register("businessName")}
          placeholder="Enter business name"
          className="w-full border px-4 py-2 rounded-md"
        />
        {errors.businessName && (
          <span className="text-sm text-red-500">
            {errors.businessName.message}
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-base lg:text-lg text-gray-600 font-semibold mb-1">
            Pharmacy/Company/Organisation Address/City
          </label>
          <input
            {...register("businessAddress")}
            placeholder="Enter business address"
            className="w-full border px-4 py-2 rounded-md"
          />
          {errors.businessAddress && (
            <span className="text-sm text-red-500">
              {errors.businessAddress.message}
            </span>
          )}
        </div>
        <div>
          <label className="block text-base lg:text-lg text-gray-600 font-semibold mb-1">
            Pharmacy/Company/Organisation State
          </label>
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={stateOptions}
                placeholder="Select State"
                styles={customStyles}
                value={
                  stateOptions.find((option) => option.value === field.value) ||
                  null
                }
                onChange={(option) => field.onChange(option?.value)}
              />
            )}
          />
          {errors.state && (
            <span className="text-sm text-red-500">{errors.state.message}</span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-base lg:text-lg text-gray-600 font-semibold mb-1">
            Pharmacy/Company/Organisation Local Govt
          </label>
          <Controller
            name="lga"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={availableLGAs}
                isDisabled={!selectedState}
                placeholder="Select LGA"
                styles={customStyles}
                value={
                  availableLGAs.find(
                    (option) => option.value === field.value
                  ) || null
                }
                onChange={(option) => field.onChange(option?.value)}
              />
            )}
          />
          {errors.lga && (
            <span className="text-sm text-red-500">{errors.lga.message}</span>
          )}
        </div>
        <div>
          <label className="block text-base lg:text-lg text-gray-600 font-semibold mb-1">
            Pharmacy/Company/Organisation Zip Code
          </label>
          <input
            {...register("zipCode")}
            placeholder="Enter zip code"
            className="w-full border px-4 py-2 rounded-md"
          />
          {errors.zipCode && (
            <span className="text-sm text-red-500">
              {errors.zipCode.message}
            </span>
          )}
        </div>
      </div>

      <div>
        <label className="block text-base lg:text-lg text-gray-600 font-semibold mb-1">
          Others (What do you want to dispose? Any special time?)
        </label>
        <textarea
          {...register("otherDetails")}
          className="w-full p-2 border rounded-md resize-none"
          rows={3}
          placeholder="Enter other details"
        />
      </div>

      <div className="flex flex-col gap-4">
        <Button
          type="submit"
          isDisabled={isSubmitting}
          isLoading
          className="text-white w-full"
        >
          Continue
        </Button>
        <Button
          onClick={onBack}
          className="w-full flex items-center gap-2 justify-center text-primaryDark border-none bg-transparent"
        >
          <ArrowLeftIcon /> Back
        </Button>
      </div>
    </form>
  );
};

export default StepTwoForm;
