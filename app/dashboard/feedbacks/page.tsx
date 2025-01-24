"use client";

import React from "react";
import LoadingSkeleton from "@/components/loadingSkeleton";
import FeedbackCard from "./feedbackCard";
import { useGetCustomer } from "@/lib/hooks/api/queries";
import Pagination from "@/components/pagination";

const FeedbackPage = () => {
  const { data: customerService, isPending: isLoadingArticles } =
    useGetCustomer();

  return (
    <div className="py-14 px-8 space-y-6">
      {isLoadingArticles ? (
        <LoadingSkeleton count={10} type="table" />
      ) : (
        customerService?.map((feedback) => (
          <FeedbackCard
            key={feedback._id}
            feedback={feedback}
            delete={true}
            onDelete={(id) => console.log(`Delete feedback with ID: ${id}`)}
          />
        ))
      )}
      <Pagination
        currentPage={1}
        totalPages={8}
        onPageChange={(page) => console.log("Page changed to:", page)}
      />
    </div>
  );
};

export default FeedbackPage;
