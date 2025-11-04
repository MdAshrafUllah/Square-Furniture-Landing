const TooltipButton = ({
  position = "bottom",
  colors = ["bg-red-700", "bg-blue-700", "bg-green-700"],
}) => {
  const positionClasses = {
    bottom: {
      tooltip: "bottom-full left-1/2 transform -translate-x-1/2 mb-3",
      arrow: "left-1/2 transform -translate-x-1/2 -bottom-2",
    },
    top: {
      tooltip: "top-full left-1/2 transform -translate-x-1/2 mt-3",
      arrow: "left-1/2 transform -translate-x-1/2 -top-2 rotate-180",
    },
  };

  return (
    <div className="relative group">
      <button className="relative p-4 bg-white/50 rounded-full border-2 border-white">
        <div className="relative p-1 bg-white rounded-full" />
        <div
          className={`hidden absolute p-2 rounded-lg bg-white/25 shadow-md group-hover:flex space-x-1 ${positionClasses[position].tooltip}`}>
          {colors.map((color, index) => (
            <div
              key={index}
              className={`size-6 ${color} border border-white rounded-full`}
            />
          ))}

          {/* arrow */}
          <div
            className={`absolute ${positionClasses[position].arrow} w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/25 rounded-3xl`}
          />
        </div>
      </button>
    </div>
  );
};

export default TooltipButton;
