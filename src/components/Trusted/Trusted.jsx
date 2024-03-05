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
          <div className="flex items-center justify-center flex-wrap mt-12 text-center">
            <img src={Walmart} alt="walmart" />
            <img src={cisco} alt="cisco" />
            <img src={Volvo} alt="Volvo" />
            <img src={deloitte} alt="deloitte" />
            <img src={okta} alt="okta" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Trusted;
