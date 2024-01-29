// StoryDetails.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchStory } from "./services/api";
import Header from "./Header";
import Footer from "./Footer";
import { Story } from "../types/Story";
import Comments from "./Comments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faUser } from "@fortawesome/free-regular-svg-icons";

function StoryDetails() {
  const { id } = useParams();
  const [story, setStory] = useState<Story>();

  useEffect(() => {
    const getStory = async () => {
      if (!id) return;
      try {
        const story = await fetchStory(+id);
        if (story) {
          setStory(story);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getStory();
  }, [id]);

  if (!id) return null;

  return (
    <div className="mx-auto container">
      <Header />
      {story && (
        <div>
          <h1 className="font-bold text-3xl mb-4">{story.title}</h1>
          <ul className="flex justify-start items-center gap-6 mb-4">
            <li>
              <FontAwesomeIcon icon={faComment} className="mr-2" />
              {story.score}
            </li>
            <li>
              <FontAwesomeIcon icon={faUser} className="mr-2" /> {story.by}
            </li>
          </ul>
        </div>
      )}
      <h3 className="font-bold mb-4">Comments:</h3>
      <Comments commentId={story?.kids || []} />
      <Footer />
    </div>
  );
}

export default StoryDetails;
