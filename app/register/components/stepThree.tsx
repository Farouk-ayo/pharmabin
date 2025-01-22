const StepThreeForm = () => {
  return (
    <div className="text-center py-8">
      <div className="flex justify-center mb-4">
        <div className="bg-green-100 p-4 rounded-full">
          <svg
            className="w-8 h-8 text-primary"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-2">Thank You!</h2>
      <p className="text-gray-600">
        We appreciate your effort in taking time to give the information. Our
        Representatives will contact you shortly to discuss the full details
        with you.
      </p>
      <button
        type="button"
        className="mt-6 px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
      >
        Done
      </button>
    </div>
  );
};

export default StepThreeForm;
