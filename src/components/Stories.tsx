// Body of HackerNews

import { Story } from "../types";
import { useEffect, useState } from "react";
import HackerNewsItem from "./HackerNewsItem";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchTopStories, fetchStories } from "./services/api";

function Stories() {
  const [topStories, setTopStories] = useState<number[]>([]);
  const [stories, setStories] = useState<Story[]>([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    fetchTopStories().then((data) => setTopStories(data));
  }, []);

  useEffect(() => {
    if (topStories.length > 0) {
      const startIndex = (pageNumber - 1) * 10;
      const endIndex = startIndex + 10;
      fetchStories(topStories.slice(startIndex, endIndex)).then((data) =>
        setStories(data)
      );
    }
  }, [topStories, pageNumber]);

  const handlePrevClick = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNextClick = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <div className="">
      <div className="flex justify-end gap-2">
        <button
          onClick={handlePrevClick}
          className="transition-transform hover:scale-110 "
        >
          <FontAwesomeIcon icon={faArrowAltCircleLeft} className="h-7 " />
        </button>
        <button
          onClick={handleNextClick}
          className="transition-transform hover:scale-110"
        >
          <FontAwesomeIcon icon={faArrowAltCircleRight} className="h-7" />
        </button>
      </div>
      {stories.map((story, index) => (
        <HackerNewsItem key={index} story={story} />
      ))}
    </div>
  );
}

export default Stories;
