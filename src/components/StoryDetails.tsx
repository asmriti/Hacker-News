// StoryDetails.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchStory } from "./services/api";
import Header from "./Header";
import Footer from "./Footer";
import { Story } from "../types/Story";
import Comments from "./Comments";

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
      {story && <h1 className="font-bold text-3xl mb-4">{story.title}</h1>}
      <h3 className="font-bold">Comments:</h3>
      <Comments commentId={story?.kids || []} />
      <Footer />
    </div>
  );
}

export default StoryDetails;
