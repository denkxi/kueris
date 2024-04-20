"use client";

import { useState, useEffect } from "react";

import QuoteCard from "./QuoteCard";

const QuoteCardList = ({ data, handleTagClick }) => {
  return <div className="mt-16 prompt_layout">
    {data.map((post) => (
      <QuoteCard 
      key={post._id}
      post={post}
      handleTagClick={handleTagClick}
      />
    ))}
  </div>;
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {};

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('api/quote');
      const data = await response.json();

      setPosts(data);
    }
  
    fetchPosts();
  }, [])
  

  return (
    <section className="feed">
      <form className="relative w-full flex justify-center items-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <QuoteCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
