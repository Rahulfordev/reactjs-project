/* eslint-disable react/no-unescaped-entities */
import user1 from "../../../public/image/Testimonial-1.png";
import user2 from "../../../public/image/Testimonial-2.png";
import user3 from "../../../public/image/Testimonial-3.png";

import vmware from "../../../public/image/vmware.png";
import docusign from "../../../public/image/docusign.png";
import frog from "../../../public/image/frog.png";

const Teams = () => {
  const Teams = [
    {
      id: 1,
      image: vmware,
      desc: "“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”",
      member: user1,
      name: "Roxanne Mustafa",
      role: "Design Team Lead at VMware",
    },
    {
      id: 2,
      image: docusign,
      desc: "“Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”",
      member: user2,
      name: "Jane Ashley",
      role: "Head of Design at DocuSign",
    },
    {
      id: 3,
      image: frog,
      desc: "“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”",
      member: user3,
      name: "Laura Baird",
      role: "Associate Design Director at frog",
    },
  ];
  return (
    <section className="mt-14 mb-28 max-w-[1120px] mx-auto">
      <div>
        <div className="px-4">
          <h2 className="text-gray-900 text-center text-3xl md:text-4xl font-bold leading-14 tracking-tight">
            Loved by the world's best teams
          </h2>
          <div className="flex items-center justify-center mt-6">
            <button className="text-center px-6 py-3 rounded-full border border-blue-500 bg-transparent text-blue-500 transition duration-300 ease-in-out hover:bg-blue-500  hover:text-white">
              See all customer stories →
            </button>
          </div>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20 items-center text-center md:text-left justify-center md:justify-around lg:justify-between">
          {Teams.map((team) => (
            <div key={team.id}>
              <img src={team.image} alt={team.name} />
              <p className="text-gray-600 text-lg mt-6 lg:mt-9 max-w-[291px]">
                {team.desc}
              </p>
              <div className="flex items-center gap-3 mt-12 mb-16 lg:mb-0">
                <img src={team.member} alt={team.name} />
                <div className="text-left">
                  <p className="text-gray-600 text-sm">{team.name}</p>
                  <p className="text-gray-600 text-sm">{team.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
