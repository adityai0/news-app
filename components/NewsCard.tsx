import Image from "next/image";
import React from "react";

export default function NewsCard({ item }: { item: any }) {
  const date = new Date(item.publishedAt).toDateString();
  return (
    <div className={`border w-full md:w-1/4 rounded-md p-6 flex flex-col relative pb-24`}>
      <h2 className="text-base font-semibold my-3">{item.title}</h2>
      {item.urlToImage && (
        <div className="relative aspect-[3/2] flex justify-center items-center w-full">
          <Image
            src={item?.urlToImage || "/No-Image.png"}
            alt="Picture of the author"
            className="object-contain aspect-[3/2]"
            width={1920}
            height={1080}
          />
        </div>
      )}
      <div className={`flex flex-col font-medium text-sm my-3`}>
        <span className={``}>{date}</span>
        {item.author &&  <span className={``}>By - {item.author}</span>}
      </div>
      <p className="font-normal text-sm">{item.description}</p>
      <a href={item.url} target="_blank" className="bg-gray-800 rounded-md px-6 py-3 text-white font-bold text-center my-3 absolute bottom-3">
        Read More
      </a>
    </div>
  );
}
