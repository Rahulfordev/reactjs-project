import Button from "../common/Button";
import Group from "../../../public/image/Group.png";

const Feature = () => {
  return (
    <>
      <section className="max-w-[1140px] mx-auto mt-16 mb-16">
        <div className="">
          <div className="relative">
            <img
              src={Group}
              alt="Group"
              className="absolute top-[-80px] left-[37.5rem]"
            />

            <h2 className="text-gray-900 text-center text-4xl font-bold leading-14 tracking-tight">
              Collaborate without <br /> constraints
            </h2>
          </div>
          <div className="flex justify-around mt-9">
            <div className="max-w-[314px] flex flex-col gap-[25px] pt-[23px] pl-[24px] pr-[22px] pb-[44px">
              <h4 className="text-gray-900 text-2xl font-bold leading-7">
                Free forever
              </h4>
              <p className="text-gray-600 font-normal text-base leading-6 mt-2">
                Our free plan gives you unlimited team members, 3 boards, and
                300+ expert-made templates. Signing up with your work email lets
                you bring in your team faster. See our{" "}
                <span className="text-blue-500">pricing plans</span> for more
                features.
              </p>
            </div>
            <div className="max-w-[314px] flex flex-col gap-[25px] pt-[23px] pl-[24px] pr-[22px] pb-[44px">
              <h4 className="text-gray-900 text-2xl font-bold leading-7">
                Easy integrations
              </h4>
              <p className="text-gray-600 font-normal text-base leading-6 mt-2">
                Miro has 100+ powerful integrations with tools you already use
                like G Suite, Slack, and Jira, so your workflow is seamless.
                View the full list in our{" "}
                <span className="text-blue-500">Marketplace</span>.
              </p>
            </div>
            <div className="max-w-[314px] flex flex-col gap-[25px] pt-[23px] pl-[24px] pr-[22px] pb-[44px">
              <h4 className="text-gray-900 text-2xl font-bold leading-7">
                Security first
              </h4>
              <p className="text-gray-600 font-normal text-base leading-6 mt-2">
                We treat your data like you would — with the utmost care. We
                follow industry-leading security standards and give you tools to
                protect intellectual property. Learn more at our{" "}
                <span className="text-blue-500">Trust Center</span>.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-12">
            <Button btnName="Sign up free" symbol="→" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
