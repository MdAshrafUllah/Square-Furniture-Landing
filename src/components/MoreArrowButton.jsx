import moreArrow from "../assets/image/more_arrow.png";
const MoreArrowButton = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-sm text-primary flex items-center gap-1">
      {name} <img src={moreArrow} alt="More Icon" />
    </button>
  );
};

export default MoreArrowButton;
