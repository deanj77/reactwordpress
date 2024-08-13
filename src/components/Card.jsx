// src/components/ArticleCard.jsx
import React from "react";

const ArticleCard = ({ title, image, description, author, date, category }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2">
          {category}
        </span>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <span className="text-gray-600 text-sm">{author}</span>
        <span className="text-gray-600 text-sm">{date}</span>
      </div>
    </div>
  );
};

export default ArticleCard;
