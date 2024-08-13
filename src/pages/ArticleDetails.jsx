// src/pages/ArticleDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import ArticleImg from "../assets/images/article.jpg"; // Import your default image
import Header from "../components/Header";
import NotFoundArticle from "../components/NotFoundArticle";
const ArticleDetail = () => {
  const { title } = useParams();

  // Sample articles data
  const articles = [
    {
      id: 1,
      title: "Understanding React Context API",
      image: ArticleImg, // Use the imported image
      description:
        "A deep dive into the React Context API and how to use it effectively in your applications , A deep dive into the React Context API and how to use it effectively in your applications , A deep dive into the React Context API and how to use it effectively in your applications , A deep dive into the React Context API and how to use it effectively in your applications , A deep dive into the React Context API and how to use it effectively in your applications , A deep dive into the React Context API and how to use it effectively in your applications ,A deep dive into the React Context API and how to use it effectively in your applications , A deep dive into the React Context API and how to use it effectively in your applications , A deep dive into the React Context API and how to use it effectively in your applications , A deep dive into the React Context API and how to use it effectively in your applications ,",
      author: "John Doe",
      date: "August 13, 2024",
      category: ["React", "javascript", "css", "nextjs", "tailwind"],
    },
    {
      id: 2,
      title: "Building Responsive UIs with CSS",
      image: ArticleImg, // Use the imported image
      description:
        "Learn how to create responsive user interfaces using CSS Flexbox and Grid.",
      author: "Jane Smith",
      date: "August 12, 2024",
      category: ["React", "javascript", "css"],
    },
    {
      id: 3,
      title: "JavaScript ES6 Features",
      image: ArticleImg, // Use the imported image
      description:
        "Explore the new features introduced in ES6 and how to use them in your projects.",
      author: "Alice Johnson",
      date: "August 11, 2024",
      category: ["React", "javascript", "css"],
    },
  ];

  // Find the article that matches the title from the URL
  const article = articles.find((article) => article.title === title);

  if (!article) {
    return (
      <div>
        <NotFoundArticle />
      </div>
    );
  }

  return (
    <div>
      <div className="top-0">
        <Header />
      </div>
      <div>
        <div className="mobile-screen:max-w-sm  min-w-72  overflow-hidden shadow-lighter-shadow m-4 bg-blue-300   hover:shadow-harder-shadow">
          <img
            className="w-full h-48 object-cover"
            src={article.image || ArticleImg}
            alt={article.title}
          />
          <div className="px-6 py-4">
            <h1 className="font-bold text-xl mb-2">{article.title}</h1>
            <p className="text-gray-700 text-base mb-4">
              {article.description}
            </p>
            <div className="flex flex-col">
              <div>
                {article.category.map((c, index) => (
                  <span
                    key={index} // Use index as key (or better, use a unique id if available)
                    className="inline-block bg-blue-200 rounded-full px-3 py-1 my-1 text-sm font-semibold text-blue-700 mr-2"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <div className="px-6 pt-4 pb-2 flex justify-between items-center">
                <span className="text-gray-600 text-sm">{article.author}</span>
                <span className="text-gray-600 text-sm">{article.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
