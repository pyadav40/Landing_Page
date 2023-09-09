import Button from "../Button";

const CardBanner = ({ title }) => {
  return (
    <div
      className="bg-transparent flex flex-col items-center 
    gap-6 w-[80%] h-80 mx-auto px-4 transition-all delay-300 duration-200 ease-in-out"
    >
      <h1 className="uppercase  text-white text-6xl font-black mb-32 tracking-wider text-center leading-tight max-sm:text-2xl">
        {title}
      </h1>
      <Button text="Button" />
    </div>
  );
};

export default CardBanner;
