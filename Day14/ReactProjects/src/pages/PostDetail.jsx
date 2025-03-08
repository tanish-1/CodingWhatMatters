import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPostById } from "../api/posts";

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      const data = await fetchPostById(id);
      setPost(data);
    };
    loadPost();
  }, [id]);

  if (!post) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <button onClick={() => navigate(-1)} className="mb-4 p-2 border rounded bg-gray-200">
        Go Back
      </button>
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-2 text-gray-600">{post.body}</p>
    </div>
  );
};

export default PostDetail;