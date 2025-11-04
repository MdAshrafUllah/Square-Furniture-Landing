import bannerImage from "../../assets/image/background.png";
import Products from "./Products";

const Shop = () => {
  return (
    <section className="min-h-screen">
      <div
        className="w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${bannerImage})` }}>
        <h1 className="text-5xl font-bold">Shop Our Product</h1>
      </div>
      <Products headline="What's Your Choice?" />
    </section>
  );
};

export default Shop;
