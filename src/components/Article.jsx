import React from "react";
import ArticleImg from "../assets/images/images.jpg"; // Ensure this path is correct
import { useNavigate } from "react-router-dom";

const ArticleCard = ({
  idNumber,
  title,
  articleimage,
  description,
  author,
  date,
  category,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/article/${encodeURIComponent(title)}`);
  };

  return (
    <div className="max-w-sm min-w-72 rounded-2xl overflow-hidden shadow-lighter-shadow my-2 mx-4 bg-blue-300 transition-transform duration-300 ease-in-out transform hover:scale-120 hover:shadow-harder-shadow hover:cursor-pointer">
      <img
        onClick={handleClick}
        className="w-full h-48 object-cover flex justify-center items-center"
        src={ArticleImg}
        alt={title}
      />
      <div className="px-6 py-4">
        <div onClick={handleClick} className="font-bold text-xl mb-2">
          {title}
        </div>
        <p
          onClick={handleClick}
          className="text-gray-700 text-base mb-4 line-clamp-2"
        >
          {description}
        </p>{" "}
        {/* Use line-clamp class */}
        <div className="flex flex-col">
          <div>
            {category.map((c, index) => (
              <button
                onClick={() => {
                  navigate(`/article/${encodeURIComponent(c)}`);
                }}
              >
                <span
                  key={index} // Use index as key (or better, use a unique id if available)
                  className="inline-block bg-blue-200 rounded-full px-3 py-1 my-1 text-sm font-semibold text-blue-700 mr-2"
                >
                  {c}
                </span>
              </button>
            ))}
          </div>
          <span className="flex justify-end">
            <button onClick={handleClick}>see more</button>
          </span>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <span className="text-gray-600 text-sm">{author}</span>
        <span className="text-gray-600 text-sm">{date}</span>
      </div>
    </div>
  );
};

export default ArticleCard;
