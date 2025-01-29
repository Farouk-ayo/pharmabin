"use client";
import { useParams, useRouter } from "next/navigation";
import ArticleForm from "../articleForm";
import { useGetArticle } from "@/lib/hooks/api/queries";
import { ArticleCard } from "@/lib/types";
import { useDeleteArticle, usePatchArticle } from "@/lib/hooks/api/mutations";

export default function ViewArticlePage() {
  const { id } = useParams();
  const { data: article, isLoading: isFetching } = useGetArticle(id as string);
  const { mutate: deleteArticle, isPending: isDeleting } = useDeleteArticle();
  const router = useRouter();

  const patchArticle = usePatchArticle(id as string);

  const handleSubmit = async (data: ArticleCard) => {
    patchArticle.mutate(data, {
      onSuccess: () => {
        router.push("/dashboard/articles");
      },
    });
  };

  const handleDelete = () => {
    deleteArticle(id as string, {
      onSuccess: () => {
        router.push("/dashboard/articles");
      },
    });
  };

  return (
    <ArticleForm
      onSubmit={handleSubmit}
      initialData={article}
      isFetching={isFetching}
      isLoading={isDeleting || patchArticle.isPending}
      onDelete={handleDelete}
      type="view"
    />
  );
}
