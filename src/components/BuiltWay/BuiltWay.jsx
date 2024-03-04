import Brainstormwithoutshadow from "../../../public//image/Brainstormwithoutshadow.png";
const BuiltWay = () => {
  return (
    <section className="my-14 max-w-[1120px] mx-auto p-[30px]">
      <div>
        <h2 className="text-gray-900 text-4xl font-bold leading-14 tracking-tight">
          Built for the way you work
        </h2>

        <ul className="flex items-center gap-2 pt-8 text-sm">
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
      <div className="flex mt-7 justify-between">
        <div className="max-w-[360px]">
          <h4 className="text-lg text-gray-900 font-medium mt-8">
            Brainstorming
          </h4>
          <p className="text-gray-600 font-normal text-base leading-6 mt-7 max-w-[302px]">
            Unleash creative ideas and build on them with the help of sticky
            notes, images, mind maps, videos, drawing capabilities — the list
            goes on.
          </p>
          <button className="text-blue-500 text-lg flex gap-2 mt-9">
            <span className="">Learn more</span>
            <span>→</span>
          </button>
        </div>
        <div>
          <img src={Brainstormwithoutshadow} alt="Brainstormwithoutshadow" />
        </div>
      </div>
    </section>
  );
};

export default BuiltWay;
