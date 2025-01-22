"use client";

import React, { useState } from "react";
import StepOneForm from "./components/stepOne";
import StepTwoForm from "./components/stepTwo";
import StepThreeForm from "./components/stepThree";
import { FormInputs, StepOneInputs, StepTwoInputs } from "@/lib/validation";

const Page = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<FormInputs>>({});

  const handleStepOneSubmit = (data: StepOneInputs) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
    setStep(2);
  };

  const handleStepTwoSubmit = (data: StepTwoInputs) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
    setStep(3);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <StepOneForm
            onNext={handleStepOneSubmit}
            defaultValues={{
              firstName: formData.firstName || "",
              lastName: formData.lastName || "",
              email: formData.email || "",
              phone: formData.phone || "",
            }}
          />
        );
      case 2:
        return (
          <StepTwoForm
            onNext={handleStepTwoSubmit}
            onBack={() => setStep(1)}
            defaultValues={{
              businessName: formData.businessName || "",
              businessAddress: formData.businessAddress || "",
              state: formData.state || "",
              lga: formData.lga || "",
              zipCode: formData.zipCode || "",
              otherDetails: formData.otherDetails || "",
            }}
          />
        );
      case 3:
        return <StepThreeForm />;
      default:
        return <StepOneForm onNext={handleStepOneSubmit} />;
    }
  };

  return (
    <div className="w-full  bg-white  py-8">
      <div className="flex items-center justify-center mb-8">
        {[1, 2, 3].map((currentStep) => (
          <React.Fragment key={currentStep}>
            <div
              className={`
                w-8 h-8 rounded-full flex items-center justify-center text-sm  font-bold
                ${
                  currentStep === step
                    ? "bg-primary text-white"
                    : currentStep < step
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-black"
                }
              `}
            >
              {currentStep}
            </div>
            {currentStep < 3 && (
              <div
                className={`flex-1 h-0.5 mx-2 border-t-2  font-semibold border-dashed
                  ${currentStep < step ? "border-primary" : "border-gray-200"}
                `}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      <div>{renderStepContent()}</div>
    </div>
  );
};

export default Page;
