import React, { useState, useEffect } from "react";

const Post = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(
          "http://localhost/wordpress/wp-json/wp/v2/posts/10/"
        );
        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching the post:", error);
      }
    };

    fetchPost();
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title.rendered}</h1>
      <p>
        <strong>Date:</strong> {new Date(post.date).toLocaleString()}
      </p>

      <div>
        <strong>Content:</strong>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>

      <p>
        <strong>Comment Status:</strong> {post.comment_status}
      </p>

      <p>
        <strong>Format:</strong> {post.format}
      </p>

      <p>
        <strong>Categories:</strong> {post.categories.join(", ")}
      </p>
      <p>
        <strong>Tags:</strong> {post.tags.join(", ")}
      </p>
    </div>
  );
};

export default Post;
