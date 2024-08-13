// src/components/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import ImagePic from "../assets/images/article.jpg";

const NotFoundArticle = () => {
  return (
    <div className="flex flex-col items-center justify-between h-screen">
      <div className="max-h-0">
        <Header />
      </div>
      <div>
        <h1 className="text-4xl font-bold self-center">Not Found - 404</h1>
        <p className="mt-4">The page you are looking for does not exist.</p>
      </div>
      <img src={ImagePic} alt="not found - 404" />
      <Link to="/" className="my-4 text-blue-500 hover:underline">
        Go back to Articles page
      </Link>
    </div>
  );
};

export default NotFoundArticle;
