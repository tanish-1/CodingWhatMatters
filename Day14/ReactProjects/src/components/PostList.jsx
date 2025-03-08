import React, { useState, useEffect, useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { fetchPosts } from "../api/posts";
import { debounce } from "lodash";
import { useNavigate } from "react-router-dom";

const PostList = () => {
  const parentRef = useRef(null);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
      setFilteredPosts(data);
    };
    loadPosts();
  }, []);

  const handleSearch = debounce((query) => {
    setSearchTerm(query);
    setFilteredPosts(query ? posts.filter(post => post.title.includes(query)) : posts);
  }, 300);

  const rowVirtualizer = useVirtualizer({
    count: filteredPosts.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 150,
  });

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <input
        type="text"
        className="w-full p-2 mb-4 border rounded"
        placeholder="Search posts..."
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div ref={parentRef} className="h-[600px] overflow-auto border rounded">
        <div style={{ height: `${rowVirtualizer.getTotalSize()}px` }} className="relative">
          {rowVirtualizer.getVirtualItems().map((row) => {
            const post = filteredPosts[row.index];
            return (
              <div
                key={post.id}
                className="p-4 border-b cursor-pointer hover:bg-gray-100"
                onClick={() => navigate(`/post/${post.id}`)}
                style={{ position: "absolute", top: `${row.start}px`, width: "100%" }}
              >
                <h3 className="text-lg font-bold">{post.title}</h3>
                {post.type === "image" && <img src={post.mediaUrl} alt="Post" className="w-full h-auto mt-2" />}
                {post.type === "video" && <video src={post.mediaUrl} controls className="w-full h-auto mt-2" />}
                <p className="text-sm text-gray-600">{post.body.substring(0, 100)}...</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PostList;