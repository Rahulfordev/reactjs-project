import Walmart from "../../../public/image/Walmart.png";
import cisco from "../../../public/image/cisco.png";
import Volvo from "../../../public/image/Volvo.png";
import deloitte from "../../../public/image/deloitte.png";
import okta from "../../../public/image/okta.png";

const Trusted = () => {
  return (
    <>
      <section className="my-14 max-w-[1120px] mx-auto px-4">
        <div className="py-[60px]">
          <div className="">
            <p className="title text-gray-600 text-center text-base font-normal leading-6">
              Trusted by 45M+ users
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-around lg:justify-evenly mt-12">
            <img src={Walmart} alt="walmart" className="max-w-[100%]" />
            <img src={cisco} alt="cisco" className="max-w-[100%]" />
            <img src={Volvo} alt="Volvo" className="max-w-[100%]" />
            <img src={deloitte} alt="deloitte" className="max-w-[100%]" />
            <img src={okta} alt="okta" className="max-w-[100%]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Trusted;
