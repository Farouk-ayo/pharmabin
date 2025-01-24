import type { ArticleCard } from "@/lib/types";
import React from "react";
import Pagination from "@/components/pagination";
import Button from "@/components/buttons";

interface ArticlesSectionProps {
  articles: ArticleCard[] | undefined;
  showAddArticleButton?: boolean;
  onAddArticle?: () => void;
}

const ArticlesSection: React.FC<ArticlesSectionProps> = ({
  articles,
  showAddArticleButton = false,
  onAddArticle,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        {showAddArticleButton && (
          <h2 className="text-xl font-semibold text-primary">Articles</h2>
        )}{" "}
        {showAddArticleButton && onAddArticle && (
          <Button
            onClick={onAddArticle}
            className="!bg-black text-white !px-6 !py-2 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          >
            + Add Article
          </Button>
        )}
      </div>

      {/* Articles Table */}
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border-collapse text-primary text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-primary px-4 py-2">S/N</th>
              <th className="text-primary px-4 py-2">Date Posted</th>
              <th className="text-primary px-4 py-2">Title</th>
              <th className="text-primary px-4 py-2">Subtitle</th>
              <th className="text-primary px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {articles?.map((article, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="text-primary px-4 py-2 text-center">
                  {index + 1}
                </td>
                <td className="text-primary px-4 py-2">{article.date}</td>
                <td className="text-primary px-4 py-2">{article.title}</td>
                <td className="text-primary px-4 py-2">{article.subtitle}</td>
                <td className="text-primary px-4 py-2">
                  <button className="text-blue-600 font-semibold hover:underline">
                    View details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={1}
        totalPages={8}
        onPageChange={(page) => console.log("Page changed to:", page)}
      />
    </div>
  );
};

export default ArticlesSection;
