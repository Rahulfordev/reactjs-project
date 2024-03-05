import integrations from "../../../public/image/integrations_all_integrations.png";

const ToolsFeature = () => {
  return (
    <section className="my-14 max-w-[1120px] mx-auto px-4 lg:px-0 text-center lg:text-left">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        <div>
          <img src={integrations} alt="integrations" />
        </div>
        <div className="max-w-[410px]">
          <h2 className="text-gray-900 text-2xl lg:text-4xl font-bold leading-14 tracking-tight">
            Connect <br /> your tools, <br /> close your tabs
          </h2>
          <p className="text-gray-600 font-normal text-base leading-6 mt-4">
            Whether you want to edit your Google Docs, resolve Jira issues, or
            collaborate over Zoom, Miro has 100+ integrations with tools you
            already use and love.
          </p>
          <button className="text-blue-500 text-lg flex gap-2 mt-9 mx-auto lg:mx-0">
            <span className="border-b border-blue-500">Learn more</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ToolsFeature;
