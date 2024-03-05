import wayWork from "../../../public/image/waywork.png";

const WorkWays = () => {
  return (
    <section className="my-14 max-w-[1018px] mx-auto">
      <div className="relative">
        <div className="">
          <img src={wayWork} alt="wayWork" className="max-w-[100%] h-auto" />
        </div>
        <div className="max-w-[411px] flex justify-center flex-wrap lg:gap-2 absolute md:top-[100px] lg:top-[185px] lg:right-[30px] gap-1 top-[25px] right-[10px] text-center">
          <h4 className="text-gray-900 text-2xl font-bold leading-14 tracking-tight">
            The Ways We Work
          </h4>
          <p className="text-lg text-gray-900 md:w-[300px]">
            How has our relationship with work changed?
          </p>
          <button className="flex gap-2 items-center lg:px-[26px] lg:py-3 px-5 py-3 rounded-full border border-blue-500 bg-blue-500 text-white transition duration-300 ease-in-out hover:bg-transparent hover:text-blue-500">
            View the report <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkWays;
