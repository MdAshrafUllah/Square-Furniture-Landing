import experience from "../../assets/image/experiences.png";
import MoreArrowButton from "../../components/MoreArrowButton";
const Experiences = () => {
  return (
    <section className="section-container my-24 flex flex-col md:flex-row items-center justify-between md:gap-20">
      <div className="md:w-1/2 md:h-[541px]">
        <img src={experience} alt="" />
      </div>

      <div className="md:w-1/2 mx-auto">
        <h3 className="text-primary text-lg font-semibold mb-4 uppercase">
          Experiences
        </h3>
        <h1 className="capitalize text-5xl font-bold mb-4">
          we provide you the best experience
        </h1>
        <p className="text-base text-gray-500 mb-5 lg:w-2/3">
          You don’t have to worry about the result because all of these
          interiors are made by people who are professionals in their fields
          with an elegant and lucurious style and with premium quality materials
        </p>
        <MoreArrowButton name="More Info" />
      </div>
    </section>
  );
};

export default Experiences;
