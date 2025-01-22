import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { StepTwoInputs, stepTwoSchema } from "@/lib/validation";
import { nigeriaStates } from "@/lib/data/nigeria-states-lga";

interface StepTwoProps {
  onNext: (data: StepTwoInputs) => void;
  onBack: () => void;
  defaultValues?: Partial<StepTwoInputs>;
}

const StepTwoForm = ({ onNext, onBack, defaultValues }: StepTwoProps) => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [availableLGAs, setAvailableLGAs] = useState<
    { name: string; id: number }[]
  >([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<StepTwoInputs>({
    resolver: zodResolver(stepTwoSchema),
    defaultValues,
  });

  const handleStateChange = (stateId: string) => {
    const selected = nigeriaStates.find(
      (state) => state.state.id.toString() === stateId
    );
    setSelectedState(selected?.state.name || null);
    setAvailableLGAs(selected?.state.locals || []);
    setValue("state", stateId);
    setValue("lga", ""); // Reset LGA when state changes
  };

  const handleLGAChange = (lgaId: string) => {
    setValue("lga", lgaId);
  };

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-4">
      <div>
        <label className="block text-sm text-gray-600 mb-1">
          Pharmacy/Company/Organisation Name
        </label>
        <input
          {...register("businessName")}
          placeholder="Enter business name"
          className="w-full"
        />
        {errors.businessName && (
          <span className="text-sm text-red-500">
            {errors.businessName.message}
          </span>
        )}
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">
          Business Address
        </label>
        <input
          {...register("businessAddress")}
          placeholder="Enter business address"
          className="w-full"
        />
        {errors.businessAddress && (
          <span className="text-sm text-red-500">
            {errors.businessAddress.message}
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">State</label>
          <select
            value={selectedState || ""}
            onChange={(e) => handleStateChange(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
          >
            <option value="">Select State</option>
            {nigeriaStates.map((state) => (
              <option key={state.state.id} value={state.state.id}>
                {state.state.name}
              </option>
            ))}
          </select>
          {errors.state && (
            <span className="text-sm text-red-500">{errors.state.message}</span>
          )}
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Local Government
          </label>
          <select
            {...register("lga")}
            disabled={!selectedState}
            onChange={(e) => handleLGAChange(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
          >
            <option value="">Select LGA</option>
            {availableLGAs.map((lga) => (
              <option key={lga.id} value={lga.id}>
                {lga.name}
              </option>
            ))}
          </select>
          {errors.lga && (
            <span className="text-sm text-red-500">{errors.lga.message}</span>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">Zip Code</label>
        <input
          {...register("zipCode")}
          placeholder="Enter zip code"
          className="w-full"
        />
        {errors.zipCode && (
          <span className="text-sm text-red-500">{errors.zipCode.message}</span>
        )}
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">
          Others (What do you want to dispose? Any special time?)
        </label>
        <textarea
          {...register("otherDetails")}
          className="w-full p-2 border rounded-md resize-none"
          rows={3}
          placeholder="Enter other details"
        />
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={onBack}
          className="w-full py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </form>
  );
};

export default StepTwoForm;
