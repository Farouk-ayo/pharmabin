"use client";

import React, { useState } from "react";
import StepOneForm from "./components/stepOne";
import StepTwoForm from "./components/stepTwo";
import StepThreeForm from "./components/stepThree";

const Page = () => {
  const [step, setStep] = useState(1);

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <StepOneForm onNext={() => setStep(2)} />;
      case 2:
        return (
          <StepTwoForm onNext={() => setStep(3)} onBack={() => setStep(1)} />
        );
      case 3:
        return <StepThreeForm />;
      default:
        return <StepOneForm onNext={() => setStep(2)} />;
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
      <div className="mt-6 flex justify-between">
        {step > 1 && step < 3 && (
          <button
            className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md"
            onClick={() => setStep((prev) => prev - 1)}
          >
            Back
          </button>
        )}
      </div>
    </div>
  );
};

export default Page;
