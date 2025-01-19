"use client";
import { Card } from "@/components/cards";
import Header from "@/components/header/header";
import Pagination from "@/components/pagination";
import { cards } from "@/lib/data";
import React, { useState } from "react";

const AboutUs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(cards.length / itemsPerPage);

  const currentData = cards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <section className="">
      <Header
        title="Read Articles"
        description={
          <p className="text-lg text-medium text-white">
            Pharmaceutical waste disposal can be complex to navigate, so we work
            hard to provide answers to the questions you may have. Enter our
            Articles section to find blog posts, research papers and FAQ’s on
            compliant and effective pharmaceutical waste management.
          </p>
        }
      />{" "}
      <section className="px-4 lg:px-28 md:pt-20 relative z-10 my-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentData.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      </section>
    </section>
  );
};

export default AboutUs;
