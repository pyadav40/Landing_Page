import { useState } from "react";
import {
  BsFillCartFill,
  BsPersonFill,
  BsJustify,
  BsSearch,
} from "react-icons/bs";
import ProductDetail from "../../data/ProductDetail";
import Banner_Layout from "./Banner_Layout";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import SectionOne from "./SectionOne";
import Footer from "./Footer";
const Home = () => {
  const [drawer, setDrawer] = useState(false);

  return (
    <div>
      <div
        className="w-full h-screen flex flex-col items-center 
        bg-gradient-to-b from-amber-500 to-gray-100 px-16 max-md:px-5"
      >
        <Topbar />
        {/* heading */}
        <div className="w-full h-20 bg-transparent flex items-center justify-center px-5">
          <h1 className="text-5xl text-white font-poppins">Ecart</h1>
        </div>
        {/* heading */}

        {/* menuBar */}
        <div className="flex gap-3 w-full max-md:flex-col-reverse">
          {/* 1st div with menu */}
          <div className="flex gap-3 items-center h-20 w-7/12 max-md:w-full">
            <div
              onClick={() => setDrawer(true)}
              className="text-4xl text-white cursor-pointer "
            >
              <BsJustify />
            </div>
            {/* select Box  */}
            <div className="w-fit flex items-center text-white bg-zinc-700 h-10 p-4">
              <select name="category" id="category" className="bg-zinc-700">
                <option disabled selected hidden value="All Category">
                  All Category
                </option>
                <option value="Action1" className="bg-white text-black">
                  Cloth
                </option>
                <option value="Action2" className="bg-white text-black">
                  Jewellery
                </option>
                <option value="Action3" className="bg-white text-black">
                  Electronics
                </option>
              </select>
            </div>
            {/* input box */}
            <div className="flex item-center rounded-sm h-10 w-8/12">
              <input className="w-full outline-none" type="text" />
              <div
                className="px-2 flex cursor-pointer
               bg-amber-800 items-center justify-center text-white rounded-e-sm"
              >
                <BsSearch className="text-xl font-bold " />
              </div>
            </div>
          </div>
          {/* 2nd div with cart and other */}
          <div className="flex w-5/12 items-center gap-2 max-md:w-full justify-center">
            <div className="flex items-center text-white bg-zinc-700 w-36 h-10 p-4">
              <select
                className="bg-zinc-700 w-full text-white rounded-sm max-md:w-full 
              max-sm:w-full"
                name="language"
                id="language"
              >
                <option selected value="">
                  English
                </option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>
            <div className="max-md:w-9/12 gap-2 flex flex-row justify-end max-sm:w-6/12">
              <div className="text-slate-100 text-2xl flex items-center flex-row gap-2 ">
                <BsFillCartFill />
                <a className="text-lg cursor-pointer">Cart</a>
              </div>
              <div className="text-slate-100 text-2xl flex items-center flex-row gap-2">
                <BsPersonFill />
                <a className="text-lg cursor-pointer">User</a>
              </div>
            </div>
          </div>
        </div>
        <Navbar setDrawer={setDrawer} drawer={drawer} />
        <Banner_Layout />
      </div>
      <SectionOne title="Mens & Womens Cloth" data={ProductDetail.Cloth} />
      <SectionOne title="Jewellery" data={ProductDetail.jewellery} />
      <SectionOne title="Electronics" data={ProductDetail.electronics} />
      <Footer />
    </div>
  );
};

export default Home;
