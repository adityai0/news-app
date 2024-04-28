"use client";
import React, { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function Pagination({
  pageLength,
  slug,
}: {
  pageLength: number;
  slug: string;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = Number(searchParams.get("page"));
  console.log(page);

  return (
    <Suspense fallback={null}>
      <div className="flex gap-5 pb-9">
        <button
          className="bg-gray-900 px-6 py-3 font-bold text-white rounded-md disabled:bg-gray-700"
          onClick={() => {
            router.push(`/${slug}?page=${page === 2 ? page - 2 : page - 1}`);
          }}
          disabled={page === 1 || page === 0}
        >
          Previous
        </button>
        <button
          className="bg-gray-900 px-6 py-3 font-bold text-white rounded-md disabled:bg-gray-700"
          onClick={() => {
            router.push(`/${slug}?page=${page === 0 ? page + 2 : page + 1}`);
          }}
          disabled={page >= pageLength}
        >
          Next
        </button>
      </div>
    </Suspense>
  );
}
