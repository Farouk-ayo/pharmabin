"use client";
import React from "react";
import UserCard from "./usersCard";
import { useGetRegisterUsers } from "@/lib/hooks/api/queries";
import LoadingSkeleton from "@/components/loadingSkeleton";
import Pagination from "@/components/pagination";

const Page = () => {
  const { data: users, isPending: isLoadingUsers } = useGetRegisterUsers();

  return (
    <div className="md:py-14 py-10 px-2  md:px-8 space-y-6">
      {isLoadingUsers ? (
        <LoadingSkeleton count={5} />
      ) : (
        users?.map((user) => (
          <UserCard
            key={user._id}
            user={user}
            edit={true}
            delete={true}
            onEdit={(id) => console.log(`Edit user with ID: ${id}`)}
            onDelete={(id) => console.log(`Delete user with ID: ${id}`)}
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

export default Page;
