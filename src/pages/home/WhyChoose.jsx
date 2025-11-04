import WhyChooseTextBlog from "../../components/WhyChooseTextBlog";

const WhyChoose = () => {
  return (
    <section className="section-container">
      <div className="my-25 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-8 md:grid-12 text-left">
        <h2 className="text-4xl font-bold">
          Why <br /> Choosing Us
        </h2>
        <WhyChooseTextBlog
          title="Luxury facilities"
          description="The advantage of hiring a workspace with us is that gives you
            comfortable service and all-around facilities."
        />
        <WhyChooseTextBlog
          title="Affordable Price"
          description="You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here."
        />
        <WhyChooseTextBlog
          title="Many Choices"
          description="We provide many unique work space choices so that you can choose the workspace to your liking."
        />
      </div>
    </section>
  );
};

export default WhyChoose;
