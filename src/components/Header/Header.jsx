/* eslint-disable react/no-unescaped-entities */
import StarF from "../../../public/image/star-f.png";
import StarH from "../../../public/image/star-h.png";
import Google from "../../../public/image/google.png";
import getApp from "../../../public/image/getApp.png";
import Capterra from "../../../public/image/capterra.png";
import HeaderImg from "../../../public/image/header.png";

const Header = () => {
  return (
    <>
      <header className="max-w-[1140px] mx-auto mb-16 mt-36">
        <div className="flex flex-col justify-center items-center gap-[30px] px-4 text-center lg:flex-row lg:text-left lg:justify-between lg:px-0">
          <div className="max-w-[440px]">
            <h2 className="text-gray-900 text-3xl sm:text-5xl font-bold leading-14 tracking-tight">
              Take ideas from better to best.
            </h2>
            <p className="text-gray-700 font-normal text-base leading-6 mt-4">
              Miro is your team's visual platform to connect, collaborate, and
              create — together.
            </p>
            <div className="mt-8 ">
              <input
                className="flex items-center h-12 px-6 rounded-full border border-gray-300 w-full"
                type="email"
                placeholder="Enter your work email"
              />
              <button className="flex items-center justify-center h-12 px-6 rounded-full border border-blue-500 bg-blue-500 text-white mt-4 transition duration-300 ease-in-out hover:bg-transparent hover:text-blue-500 w-full">
                Sign up free <span>→</span>
              </button>
              <p className="text-gray-400 font-normal text-sm leading-5 mt-2">
                Collaborate with your team within minutes
              </p>
            </div>
            <div className="mt-10 flex gap-3 items-center py-4 px-6 rounded-lg bg-gray-100 max-w-[83%]">
              <div className="">
                <div className="flex items-center gap-1">
                  <img src={StarF} alt="Star Full" />
                  <img src={StarF} alt="Star Full" />
                  <img src={StarF} alt="Star Full" />
                  <img src={StarF} alt="Star Full" />
                  <img src={StarH} alt="Star Half" />
                </div>
                <p className="text-gray-900 font-normal text-xs leading-4 mt-1">
                  Based on 5149+ reviews:
                </p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <img src={Google} alt="Google" />
                <img src={getApp} alt="getApp" />
                <img src={Capterra} alt="Capterra" />
              </div>
            </div>
          </div>
          <div className="">
            <img src={HeaderImg} alt="HeaderImg" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
