import {  blogProps } from "@/types";


interface blogDataProps {
  blogData: blogProps
}
export async function Blogs({ blogData }: blogDataProps) {

  const { author, title, description, url, urlToImage, content, publishedAt } = blogData
  return (
    <>
      {/* <div className="title m-5 text-xl font-bold uppercase pb-2 border-b-2 w-fit border-gray-400 ">
        <h2>Stories That Stir the Soul</h2>
      </div>
      <div className="flex justify-center border-2 border-red-700"> */}
        <a
          href={url}
          className="flex flex-col items-center bg-[#f0e7d7]/45 hover:bg-[#f0e7d7]/100 text-black  border-b-2 border-black rounded-lg lg:rounded-none shadow-lg md:flex-row md:max-w-xl   m-5 p-2"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg hidden md:block"
            
            src={urlToImage}
            alt=""
          />

          <div className="flex flex-col justify-between p-4 leading-normal">
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
                {title}
              </h5>
              <p className="mb-3 font-normal text-black">
                {description ? description.slice(0, 100) + "..." : "click to read more"}
              </p>
            </div>
            <div className="flex justify-end mt-4 items-center">
              <Avatar authorName={author} />
              <div className="text-sm  felx justify-center flex-col p-3 text-black">
                {`${Math.ceil(content.length / 100 )} minute(s) read.`}
              </div>
            </div>
          </div>
        </a>
    </>
  );
}

export function Avatar({ authorName = "Anonymous" }: { authorName?: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden  bg-white rounded-full border border-black">
      <span className="font-bold text-black">
        {/* {authorName.toUpperCase().charAt(0)} */}
        {authorName ? 
        authorName.toUpperCase().charAt(0)
      : null}
      </span>
    </div>
  );
}
