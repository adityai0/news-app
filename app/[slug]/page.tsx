import React, { Suspense } from "react";
import NewsCard from "@/components/NewsCard";
import Pagination from "@/components/Pagination";

async function getNews(slug: string, page?: string | undefined | string[]) {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&apiKey=${process.env.NEXT_PUBLIC_API_KEY}&category=${slug}&pageSize=18&page=${page}`
  );
  const data = await res.json();
  const news = data.articles.filter((item: any) => item.urlToImage);
  const pageLength = Math.ceil(data.totalResults / 18);
  return { news, pageLength };
}

export default async function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}): Promise<React.ReactElement> {
  const { news, pageLength } = await getNews(params.slug, searchParams?.page);

  return (
    <main className="flex flex-col items-center gap-3">
      <div className={`p-8 flex gap-4 flex-wrap justify-center`}>
        {news &&
          news.map((item: any) => {
            return <NewsCard item={item} key={item.title} />;
          })}
      </div>
      <Suspense fallback={null}>
        <Pagination pageLength={pageLength} slug={params.slug} />
      </Suspense>
    </main>
  );
}
