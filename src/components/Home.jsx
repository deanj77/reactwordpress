import ArticleCard from "./Article";

const Home = () => {
  const articles = [
    {
      title: "Understanding React Context API",
      image: "../assets/images/article.jpg",
      description:
        "A deep dive into the React Context API and how to use it effectively in your applications.",
      author: "John Doe",
      date: "August 13, 2024",
      category: ["React", "javascript", "css", "nextjs", "tailwind"],
    },
    {
      title: "Building Responsive UIs with CSS",
      image: "../assets/images/article.jpg",
      description:
        "Learn how to create responsive user interfaces using CSS Flexbox and Grid.",
      author: "Jane Smith",
      date: "August 12, 2024",
      category: ["React", "javascript", "css"],
    },
    {
      title: "JavaScript ES6 Features",
      image: "../assets/images/article.jpg",
      description:
        "Explore the new features introduced in ES6 and how to use them in your projects.",
      author: "Alice Johnson",
      date: "August 11, 2024",
      category: ["React", "javascript", "css"],
    },
    // Add more articles as needed
  ];

  return (
    <div className="pt-2 flex justify-center text-xl">
      <div className="flex flex-wrap">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default Home;
