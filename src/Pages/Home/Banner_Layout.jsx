import { useState, useEffect, useRef } from "react";
import data from "../../data/data";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import CardBanner from "../../Components/CardBanner/CardBanner";
import { CSSTransition } from "react-transition-group";
import "../../index.css";
import "react-transition-group";
const Banner_Layout = () => {
  const nodeRef = useRef();
  const [countCard, setCountCard] = useState(0);
  const [cardContent, setCardContent] = useState(data[0]);
  const [inProp, setInProp] = useState(false);
  console.log(inProp);
  useEffect(() => {
    if (countCard >= data.length) {
      setCountCard(0);
      setCardContent(data[0]);
    } else if (countCard < 0) {
      setCountCard(data.length - 1);
      setCardContent(data[data.length - 1]);
    } else {
      setCardContent(data[countCard]);
    }
    setInProp(true);
  }, [countCard]);

  return (
    <>
      <div
        className="bg-banner w-2/4 h-[70%]  
       bg-no-repeat absolute top-[12rem] left-1/3 blur-sm"
      ></div>
      <div className="flex h-4/6 w-full relative items-center justify-center">
        <div className="flex w-full ">
          <a
            onClick={() => {
              setCountCard(countCard - 1);
            }}
            role="button"
            className="p-3 bg-slate-500 rounded-3xl w-10 
          active:text-white active:bg-gray-800 absolute top-1/2 ml-4"
          >
            <BsFillCaretLeftFill />
          </a>
          <CSSTransition
            nodeRef={nodeRef}
            in={inProp}
            timeout={200}
            classNames="fade"
          >
            <CardBanner title={cardContent} nodeRef={nodeRef} />
          </CSSTransition>
          <a
            onClick={() => {
              setCountCard(countCard + 1);
            }}
            role="button "
            className="p-3 cursor-pointer bg-slate-500 rounded-3xl w-10 absolute 
          active:text-white active:bg-gray-800 top-1/2 right-0 mr-4 "
          >
            <BsFillCaretRightFill />
          </a>
        </div>
      </div>
    </>
  );
};

export default Banner_Layout;
