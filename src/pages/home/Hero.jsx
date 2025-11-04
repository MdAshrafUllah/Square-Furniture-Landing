import { FaSearch } from "react-icons/fa";
import bannerImage from "../../assets/image/background.png";
import TooltipButton from "../../components/TooltipButton";

const Hero = () => {
  return (
    <section
      className="h-screen relative bg-cover bg-center text-white "
      style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="md:pt-44 pt-24 text-center space-y-6 md:w-1/2 mx-auto px-2">
        <h1 className="text-4xl lg:text-6xl font-bold text-white lg:leading-tight leading-snug">
          Make Your Interior More Minimalistic & Modern
        </h1>
        <p className="text-2xl font-normal md:w-1/2 mx-auto">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>

        {/* search field */}
        <div className="relative inline-block z-30 -top-10">
          <input
            type="text"
            placeholder="Search furniture"
            className="w-full md:w-80 px-6 py-2 placeholder:text-white bg-white/15 rounded-full border border-gray-300 focus:outline-none mt-16 mr-2"
          />
          <div className="absolute right-3 top-1/2 transform translate-y-1/2 p-2 bg-primary rounded-full">
            <FaSearch />
          </div>
        </div>

        {/* effect */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-linear-to-t from-white via-transparent to-transparent" />

        {/* showing color option in hover */}
        <div className="hidden xl:block absolute bottom-50 left-24">
          <TooltipButton position="bottom" />
        </div>
        <div className="hidden xl:block absolute top-180 right-85">
          <TooltipButton position="top" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
