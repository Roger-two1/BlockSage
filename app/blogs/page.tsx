import { Blogs } from "@/components/Blogs";
import { Footer } from "@/components/Footer";
import { fetchData } from "@/utils";
import React from "react";

const page = async () => {
  const data = await fetchData();
  // console.log(data)
  return (
    <div className="flex flex-col items-center justify-center">
    <div className="flex item-center flex-col text-center ">
        <h1 className="text-xl lg:text-4xl capitalize font-bold pt-6 ">Uncover the Stories Within</h1> 
        <div className="text-md lg:text-lg  font-semibold text-center p-2">
            Dive into a World of <span className="border-b-2 border-black text-emerald-900">Infinite Narratives</span>
        </div>
    </div>
    <div>
      {data
      //@ts-ignore
        .map((blogData) => (
          <>
            <Blogs blogData={blogData} />
          </>
        ))}
    </div>
    <Footer />
    </div>
  );
}

export default page;
