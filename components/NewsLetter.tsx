export function Newsletter() {
  return (
    <div className="text-center bg-pattern">
      <div className="text-brown text-xl font-bold p-3 md:p-2 underline">
        Sign up for daily news in your inbox 📥
      </div>
      <div className=" flex flex-col justify-center gap-4 items-center mt-3 pb-3 md:flex md:flex-row">
        <div className="flex-col md:flex">
            <form className="flex items-center gap-0 ">
          <div className="">
            <input
              type="email"
              id="email"
              className="bg-white/80 shadow-lg w-full px-4 py-[15px] text-sm text-gray-900    focus:outline-slate-500 border border-slate-400 rounded-lg  rounded-r-none "
              placeholder="Enter you email address"
              required
            />
          </div>
            <button
              type="submit"
              className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-4 py-4 rounded-lg rounded-l-none"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="text-center text-brown/60 font-bold px-[3px] md:text-start text-[14px] md:text-md">
        Get news and updates right to your inbox! <br /> Sign up here so you don't miss a single newsletter.
        </div>
      </div>
    </div>
  );
}
