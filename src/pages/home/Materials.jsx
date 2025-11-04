import MaterialOne from "../../assets/image/material1.png";
import MaterialTwo from "../../assets/image/material2.png";
import MaterialThree from "../../assets/image/material3.png";
import MoreArrowButton from "../../components/MoreArrowButton";

const Materials = () => {
  return (
    <section className="section-container my-24 flex flex-col md:flex-row items-center justify-between md:gap-20">
      <div className="md:w-1/2 mx-auto">
        <h3 className="text-primary text-lg font-semibold mb-4 uppercase">
          Materials
        </h3>
        <h1 className="capitalize text-5xl font-bold mb-4">
          Very serious materials for making furniture
        </h1>
        <p className="text-base text-gray-500 mb-5 lg:w-2/3">
          Because panto was very serious about designing furniture for our
          environment, using a very expensive and famous capital but at a
          relatively low price
        </p>
        <MoreArrowButton name="More Info" />
      </div>
      <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 md:items-end items-center">
        <div>
          <img src={MaterialOne} alt="" />
          <img src={MaterialTwo} alt="" />
        </div>
        <div className="md:col-span-2 col-span-1">
          <img src={MaterialThree} alt="" className=" md:h-[541px] w-full" />
        </div>
      </div>
    </section>
  );
};

export default Materials;
