import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <>
      <main className=" text-black  ">
        <div className=" px-10 py-5">
          <div className=" mt-7  border-red-600 sm:mt-4">
            <h1
              className=" font-normal uppercase text-4xl text-[50px] leading-snug font-medium
              md:text-8xl md:font-semibold md:mt-6  
              lg:text-9xl lg:font-semibold lg:mt-8 text-brown"
            >
              Where News Comes First  <span className="text-[#a2b9a1]">Unfiltered</span>.
            </h1>
            <p className="py-8 text-[#242031] uppercase leading-[150%] w-[300px] font-medium text-center text-[13px]  sm:ml-[70%] sm:text-base sm:w-fit">
            Stay Ahead of the Curve with Cutting-Edge Reporting and Insightful Analysis
            </p>
            <button className="btn    shadow-2xl hover:bg-blue-100 w-fit   text-[#221b21] border-b-4  border-gray-300">
              <Link href='/blogs'>
                Explore Topics
              </Link>  
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              src="/quill.png"
              width={300}
              height={100}
              alt="quill"
              className="md:w-[200px]"
            />
          </div>
          <div className="flex justify-end gap-2">
            <Image
              src="/down-arrow.svg"
              width={20}
              height={20}
              alt="down-arrow-icon"
            />
            <Image
              src="/down-arrow.svg"
              width={20}
              height={20}
              alt="down-arrow-icon"
            />
          </div>
        </div>
      </main>
    </>
  );
}
