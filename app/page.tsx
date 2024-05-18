import { Blogs } from "@/components/Blogs";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Newsletter } from "@/components/NewsLetter";
import { Testimonials } from "@/components/Testimonials";
import { fetchData } from "@/utils";
import Link from "next/link";

export default async function Home() {
  const data = await fetchData();
  return (
    <div className="h-screen bg-[#EEF6F9
    ]">
      <Hero />
      <div className="flex justify-center border-5 border-black">
        <div className="">
          <div className="title  m-5 text-xl font-bold uppercase pb-2 border-b-2 w-fit border-gray-400 ">
            <h2>Unbiased. Unfiltered. Unmatched.</h2>
          </div>
          <div className="flex flex-col justify-center w-full lg:m-5 rounded-lg">
            {data
            //@ts-ignore
              .map((blogData) => ( 
                <>
                  <Blogs blogData={blogData} />
                </>
              ))
              .slice(0, 3)}
          </div>
          <div className="flex justify-center m-3">
            <Link href="/blogs">
              <button className="btn btn-primary">View More</button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="m-4">
        <div className="text-center font-bold text-xl uppercase pb-1  flex justify-center ">
          <h1 className="border-b-2 border-gray-400">Testimonials!!</h1>
        </div>
        <Testimonials  />
      </div>
      <div className="m-0">
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
}
