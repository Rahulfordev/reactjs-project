/* eslint-disable react/prop-types */
const Button = ({ btnName, symbol }) => {
  return (
    <button className="flex gap-2 items-center px-6 py-4 rounded-full border border-blue-500 bg-blue-500 text-white transition duration-300 ease-in-out hover:bg-transparent hover:text-blue-500">
      {btnName} <span>{symbol}</span>
    </button>
  );
};

export default Button;
