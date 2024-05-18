import Marquee from "react-fast-marquee";
import { testimonials } from "@/utils/testimonials";

export function Testimonials() {
  
  return (
    <>
        <Marquee
          pauseOnHover={true}
          gradient={true}
          gradientWidth={20}
          
        >
      {testimonials.map((e) => (
          <div className="flex" key={e.id}>
            <div className="w-[250px] h-[200px]  border flex flex-col p-4 m-3 bg-gray-200 rounded-lg shadow-lg">
              <div className="font-bold">
                <h2>{e.comment}</h2>
              </div>
              <div className="flex justify-end m-2 gap-2 items-end">
                <p className="font-bold text-sm">{e.name}</p> -
                <img
                  className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  // src="https://imgs.search.brave.com/7ZR7ePai5qOQGPBjPdFYeFUFqSrvTBQoe5Z0ZV4A69c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZmNiYXJjZWxvbmFs/YXRlc3RuZXdzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OS8xMi9MaW9uZWwt/TWVzc2ktcGljdHVy/ZXMtMS1zY2FsZWQu/anBn"
                  src={e.profileImg}
                  alt="Bordered avatar"
                ></img>
              </div>
            </div>
          </div>
      ))}
      </Marquee>
      </>
  );
}
