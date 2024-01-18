// Body of HackerNews

import React, { useEffect, useState } from "react";
import { Story } from "../types";
import { fetchTopStories, fetchStories } from "./services/api";
import HackerNewsItem from "./HackerNewsItem";

function Stories() {
  const [topStories, setTopStories] = useState<number[]>([]);
  const [stories, setStories] = useState<Story[]>([]);
  // const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    fetchTopStories().then((data) => setTopStories(data));
  }, []);

  useEffect(() => {
    if (topStories.length > 0) {
      fetchStories(topStories.slice(0, 10)).then((data) => setStories(data));
    }
  }, [topStories]);

  return (
    <div className="mx-auto container">
      {stories.map((story, index) => (
        <HackerNewsItem key={story.id} story={story} />
      ))}
    </div>
  );
}

export default Stories;
