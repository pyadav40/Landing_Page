import shirt from "../assets/Shirt1.png";
import Tshirt from "../assets/Tshirt.png";
import Laptop from "../assets/Laptop.png";
import Ring from "../assets/Ring.png";
import necklaceOne from "../assets/necklace.png";
import Iphone from "../assets/Iphone.png";
import necklace from "../assets/Jwellery.png";
import coat from "../assets/women_Coat.png";
import ipad from "../assets/ipad.png";

const ProductDetail = {
  Cloth: [
    { id: 0, cat: "Mens T-Shirt", imgurl: Tshirt },
    { id: 1, cat: "Women coat", imgurl: coat },
    { id: 2, cat: "Mens Shirt", imgurl: shirt },
  ],
  jewellery: [
    { id: 0, cat: "Jewellery", imgurl: necklace },
    { id: 1, cat: "Jewellery", imgurl: Ring },
    { id: 2, cat: "Jewellery", imgurl: necklaceOne },
  ],
  electronics: [
    { id: 0, cat: "Mobile", imgurl: Iphone },
    { id: 1, cat: "Electronics", imgurl: Laptop },
    { id: 1, cat: "Mobile", imgurl: ipad },
  ],
};

export default ProductDetail;
