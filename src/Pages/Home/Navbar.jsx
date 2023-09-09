import { BsXCircle } from "react-icons/bs";
const Navbar = ({ setDrawer, drawer }) => {
  return (
    <>
      <div
        className={`container h-full fixed bg-slate-900 w-3/12 z-30 max-sm:w-5/12 max-md:w-3/12 text-white top-0 ${
          drawer ? "open" : "close"
        } `}
      >
        <ul
          className="flex flex-col gap-4 items-center mt-16 text-white
         text-2xl cursor-pointer "
        >
          <li
            onClick={() => {
              setDrawer(false);
            }}
            className="text-white absolute top-5  right-5 text-2xl hover:text-orange-600 hover:font-bold hover:text-3xl transition-all delay-100 duration-100 ease-out"
          >
            <BsXCircle />
          </li>
          <li className="hover:text-orange-600 hover:font-bold hover:text-3xl transition-all delay-100 duration-100 ease-out">
            Home
          </li>
          <li className="hover:text-orange-600 hover:font-bold hover:text-3xl transition-all delay-100 duration-100 ease-out">
            About
          </li>
          <li className="hover:text-orange-600 hover:font-bold hover:text-3xl transition-all delay-100 duration-100 ease-out">
            Contact
          </li>
          <li className="hover:text-orange-600 hover:font-bold hover:text-3xl transition-all delay-100 duration-100 ease-out">
            Service
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
