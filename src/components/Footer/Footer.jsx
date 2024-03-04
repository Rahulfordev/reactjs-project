import twitter from "../../../public/image/twitter.png";
import facebook from "../../../public/image/facebook.svg";
import youtube from "../../../public/image/youtube.svg";

const Footer = () => {
  return (
    <footer className="bg-indigo-900 mt-14  py-[96px]">
      <div className="max-w-[1056px] mx-auto">
        <div className="flex justify-between">
          <div>
            <h4 className="text-2xl font-extrabold text-white">
              Scan. Detect. Remove.
            </h4>
            <div className="flex items-center gap-10 mt-8">
              <img src={twitter} alt="twitter" className="cursor-pointer" />
              <img src={facebook} alt="facebook" className="cursor-pointer" />
              <img src={youtube} alt="youtube" className="cursor-pointer" />
            </div>
            <div className="flex gap-4 mt-10 text-xs text-white">
              <p className="border-b border-white cursor-pointer">
                Privacy Policy
              </p>
              <p className="border-b border-white cursor-pointer">
                Terms of Service
              </p>
            </div>
            <p className="text-xs text-white mt-10">
              Copyright © 2022 Certo Software Limited | Registered in <br />{" "}
              England & Wales No. 10072356
            </p>
            <p className="text-xs text-white mt-4">
              Designed & developed by Bigger Picture
            </p>
          </div>
          <div>
            <h4 className="text-4xl font-extrabold text-white border-b border-white pb-6 pr-20">
              Miro.
            </h4>
            <ul className="flex flex-col gap-3 text-yellow-400 font-bold text-xl mt-14">
              <li className="flex gap-3 cursor-pointer">
                <span>-</span>iPhone
              </li>
              <li className="flex gap-3 cursor-pointer">
                <span>-</span>Android
              </li>
              <li className="flex gap-3 cursor-pointer">
                <span>-</span>Help
              </li>
              <li className="flex gap-3 cursor-pointer">
                <span>-</span>About
              </li>
              <li className="flex gap-3 cursor-pointer">
                <span>-</span>Insights
              </li>
            </ul>
          </div>
          <div>
            <div className="rounded-[41px] bg-yellow-400 w-[436px] px-9 bg-[url('../../../public/image/certo-dark-yellow.svg')]  bg-no-repeat bg-center py-8">
              <div className="">
                <div className="">
                  <h4 className="text-2xl font-extrabold">
                    Sign up to our newsletter
                  </h4>
                  <p className="text-sm mt-5">
                    Receive the latest mobile security news, exclusive discounts
                    & offers straight to your inbox!
                  </p>
                  <div className="flex items-center justify-center mt-9">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="py-2 px-4 rounded-l-3xl"
                    />
                    <button className="bg-indigo-900 px-7 py-2 text-white font-extrabold rounded-r-3xl">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 max-w-[550px]">
          <p className="text-white text-xs">
            Apple, the Apple logo, and iPhone are trademarks of Apple Inc.,
            registered in the U.S. and other countries. App Store is a service
            mark of Apple Inc. Android, Google Play and the Google Play logo are
            trademarks of Google LLC.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
