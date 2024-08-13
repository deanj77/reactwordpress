import React from "react";
import ArticleCard from "../components/Article";
import Header from "../components/Header";
import PicOne from "../assets/images/article.jpg";
import PicTwo from "../assets/images/js.jpg";
import PicThree from "../assets/images/imageeditor.jpg";
const Articles = () => {
  const articles = [
    {
      iidNumberd: 1,
      title: "Understanding React Context API",
      articleimage: PicOne,
      description:
        "A deep dive into the React Context API and how to use it effectively in your applications , A deep dive into the React Context API and how to use it effectively in your applications , A deep dive into the React Context API and how to use it effectively in your applications , A deep dive into the React Context API and how to use it effectively in your applications , A deep dive into the React Context API and how to use it effectively in your applications , A deep dive into the React Context API and how to use it effectively in your applications ,A deep dive into the React Context API and how to use it effectively in your applications , A deep dive into the React Context API and how to use it effectively in your applications , A deep dive into the React Context API and how to use it effectively in your applications , A deep dive into the React Context API and how to use it effectively in your applications ,",
      author: "John Doe",
      date: "August 13, 2024",
      category: ["React", "javascript", "css", "nextjs"],
    },
    {
      idNumber: 2,
      title: "Building Responsive UIs with CSS",
      articleimage: PicTwo,
      description:
        "Learn how to create responsive user interfaces using CSS Flexbox and Grid.",
      author: "Jane Smith",
      date: "August 12, 2024",
      category: ["React", "javascript", "css"],
    },
    {
      idNumber: 3,
      title: "JavaScript ES6 Features",
      articleimage: PicThree,
      description:
        "Explore the new features introduced in ES6 and how to use them in your projects.",
      author: "Alice Johnson",
      date: "August 11, 2024",
      category: ["React", "javascript", "css"],
    },
    {
      idNumber: 3,
      title: "JavaScript ES6 Features",
      articleimage: PicThree,
      description:
        "Explore the new features introduced in ES6 and how to use them in your projects.",
      author: "Alice Johnson",
      date: "August 11, 2024",
      category: ["React", "javascript", "css"],
    },
    {
      idNumber: 3,
      title: "JavaScript ES6 Features",
      articleimage: PicThree,
      description:
        "Explore the new features introduced in ES6 and how to use them in your projects.",
      author: "Alice Johnson",
      date: "August 11, 2024",
      category: ["React", "javascript", "css"],
    },
    {
      idNumber: 3,
      title: "JavaScript ES6 Features",
      articleimage: PicThree,
      description:
        "Explore the new features introduced in ES6 and how to use them in your projects.",
      author: "Alice Johnson",
      date: "August 11, 2024",
      category: ["React", "javascript", "css"],
    },
  ];
  return (
    <div>
      <Header />
      <div className="flex flex-wrap">
        {articles.map((article, index) => (
          <div>
            <ArticleCard key={article.id} {...article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
