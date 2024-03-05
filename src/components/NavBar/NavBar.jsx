// import { TbWorld } from "react-icons/tb";
// import { IoIosArrowDown } from "react-icons/io";

// import Logo from "../../../public/image/logo.png";
// import Button from "../common/Button";

// const NavBar = () => {
//   return (
//     <>
//       <nav className="max-w-[1380px] h-24 mx-auto flex items-center justify-between">
//         <div className="flex items-center gap-6">
//           <img src={Logo} alt="Logo" className="pb-4" />
//           <ul className="flex items-center gap-5 text-gray-800">
//             <li className="flex items-center gap-2">
//               Product
//               <span>
//                 <IoIosArrowDown className="" />
//               </span>
//             </li>
//             <li className="flex items-center gap-2">
//               Solutions
//               <span>
//                 <IoIosArrowDown className="" />
//               </span>
//             </li>
//             <li className="flex items-center gap-2">
//               Resources
//               <span>
//                 <IoIosArrowDown className="" />
//               </span>
//             </li>
//             <li className="">Enterprise</li>
//             <li className="">Pricing</li>
//           </ul>
//         </div>
//         <div>
//           <ul className="flex items-center gap-4">
//             <li className="flex items-center uppercase gap-1">
//               <TbWorld className="w-6 h-6" />
//               <span className="">en</span>
//             </li>
//             <li>Contact Sales</li>
//             <li className="">Login</li>
//             <li>
//               <Button btnName="Sign up free" symbol="→" />
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default NavBar;

import { useState } from "react";
import Logo from "../../../public/image/logo.png";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { TbWorld } from "react-icons/tb";
const menuItems = [
  {
    name: "Product",
    href: "#",
  },
  {
    name: "Solutions",
    href: "#",
  },
  {
    name: "Resources",
    href: "#",
  },
  {
    name: "Enterprise",
    href: "#",
  },
  {
    name: "Pricing",
    href: "#",
  },
];

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-b-2 border-gray-300 w-full h-[90px] fixed top-0 left-0 right-0 z-40">
      <div className="max-w-[1380px] mx-auto bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8 h-[89px]">
          <div className="inline-flex items-center space-x-2 mr-[-30px] mt-[-10px]">
            <span>
              <img src={Logo} alt="Logo" />
            </span>
          </div>
          <div className="hidden grow items-start lg:flex">
            <ul className="ml-12 inline-flex">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className="rounded-md bg-transparent px-3 py-2 text-base font-normal text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <a
                    href={item.href}
                    className="inline-flex items-center text-base font-normal text-gray-800 hover:text-gray-900"
                  >
                    {item.name}
                    <span>
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <button
              type="button"
              className="relative top-[3px] items-center gap-1 rounded-md bg-transparent px-3 py-2 text-base font-normal text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <div className="flex items-center gap-1">
                <TbWorld className="text-base" /> <span>EN</span>
              </div>
            </button>
            <button
              type="button"
              className="rounded-md bg-transparent px-3 py-2 text-base font-normal text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Contact Sales
            </button>
            <button
              type="button"
              className="rounded-md bg-transparent px-3 py-2 text-base font-normal text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Login
            </button>
            <button className=" gap-2 items-center px-6 py-2 rounded-full border border-blue-500 bg-blue-500 text-white transition duration-300 ease-in-out hover:bg-transparent hover:text-blue-500">
              Sign up free <span>→</span>
            </button>
          </div>
          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <span>
                        <img src={Logo} alt="Logo" />
                      </span>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6 text-black" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-md p-3 text-base font-normal hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                          <span>
                            <ChevronRight className="ml-3 h-4 w-4" />
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                  <div className="mt-2 space-y-2 grid gap-y-[1px]">
                    <button
                      type="button"
                      className="items-center gap-1 rounded-md bg-transparent px-3 py-2 text-base font-normal text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <div className="flex items-center gap-1">
                        <TbWorld /> <aside>EN</aside>
                      </div>
                    </button>
                    <button
                      type="button"
                      className="rounded-md bg-transparent px-3 py-1 text-base font-normal text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black text-left"
                    >
                      Contact Sales
                    </button>
                    <button
                      type="button"
                      className="rounded-md bg-transparent px-3 py-1 pb-1 text-base font-normal text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black text-left"
                    >
                      Login
                    </button>
                    <button className=" gap-2 items-center px-4 py-2 rounded-full border border-blue-500 bg-blue-500 text-white transition duration-300 ease-in-out hover:bg-transparent hover:text-blue-500">
                      Sign up free <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
