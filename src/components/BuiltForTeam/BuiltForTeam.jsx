import uxdesignwithoutshadow from "../../../public//image/uxdesignwithoutshadow.png";
import icon1 from "../../../public//image/icon-1.svg";
import xd from "../../../public//image/xd.png";
import figma from "../../../public//image/figma.png";
import noation from "../../../public//image/notation.png";
const BuiltForTeam = () => {
  return (
    <section className="my-14 max-w-[1120px] mx-auto p-[30px]">
      <div>
        <h2 className="text-gray-900 text-4xl text-center lg:text-left font-bold leading-14 tracking-tight">
          Built for the way you work
        </h2>

        <ul className="flex flex-wrap items-center gap-2 pt-8 text-sm">
          <li className="rounded-3xl border border-gray-200 bg-blue-100 px-4 py-3 cursor-pointer">
            Brainstorming
          </li>
          <li className="rounded-3xl border border-gray-200 px-4 py-3 cursor-pointer">
            Diagramming
          </li>
          <li className="rounded-3xl border border-gray-200 px-4 py-3 cursor-pointer">
            Meetings & Workshops
          </li>
          <li className="rounded-3xl border border-gray-200 px-4 py-3 cursor-pointer">
            Scrum Events
          </li>
          <li className="rounded-3xl border border-gray-200 px-4 py-3 cursor-pointer">
            Mapping
          </li>
          <li className="rounded-3xl border border-gray-200 px-4 py-3 cursor-pointer">
            Research & Design
          </li>
          <li className="rounded-3xl border border-gray-200 px-4 py-3 cursor-pointer">
            Strategic Planning
          </li>
        </ul>
      </div>
      <div className="flex mt-7 justify-center lg:justify-between flex-wrap">
        <div className="max-w-[360px]">
          <p className="text-gray-600 font-normal text-base leading-6 mt-7 max-w-[302px]">
            <ul>
              <li className="mt-4">
                <span className="mr-3 text-gray-900 font-bold">+</span>
                Build low-fi wireframes
              </li>
              <li className="mt-4">
                <span className="mr-3 text-gray-900 font-bold">+</span>
                Involve stakeholders in the design <span> </span>process
              </li>
              <li className="mt-4">
                <span className="mr-3 text-gray-900 font-bold">+</span>
                Run engaging design workshops
              </li>
            </ul>
          </p>
          <button className="text-blue-500 text-lg flex gap-2 mt-9">
            <span className="">Learn more</span>
            <span>→</span>
          </button>
          <p className="text-lg mt-[70px]">Integrate your favorite tools</p>
          <div className="flex items-center gap-9 mt-6">
            <img src={icon1} alt="icon1" />
            <img src={xd} alt="xd" width="26px" />
            <img src={figma} alt="figma" />
            <img src={noation} alt="noation" />
          </div>
        </div>
        <div>
          <img src={uxdesignwithoutshadow} alt="uxdesignwithoutshadow" />
        </div>
      </div>
    </section>
  );
};

export default BuiltForTeam;
