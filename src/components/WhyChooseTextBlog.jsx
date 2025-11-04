import MoreArrowButton from "./MoreArrowButton";

const WhyChooseTextBlog = ({ title, description }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <p className="text-base mb-2">{description}</p>
      <MoreArrowButton name="More Info" />
    </div>
  );
};

export default WhyChooseTextBlog;
