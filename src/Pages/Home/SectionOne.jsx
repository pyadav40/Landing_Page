import img1 from "../../assets/Shirt1.png";
import img2 from "../../assets/women_Coat.png";
import img3 from "../../assets/skirt.png";
import ProductCard from "../../Components/Productcard/ProductCard";
const SectionOne = ({ title, data }) => {
  const mensWomenData = data;

  return (
    <div className="w-full flex flex-col items-center px-4 py-8 bg-white mx-auto overflow-hidden text-center ">
      <h1 className="text-zinc-800 text-4xl font-extrabold">{title}</h1>
      <div className="flex flex-wrap items-center gap-4 py-9 justify-center">
        {mensWomenData.map((item) => (
          <ProductCard
            key={item.id}
            img={item.imgurl}
            ProductTitle={item.cat}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionOne;
