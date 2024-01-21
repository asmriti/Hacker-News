import { Story } from "../../types.ts";

const hackerNews = "https://hacker-news.firebaseio.com/v0";

export async function fetchTopStories(): Promise<number[]> {
  const response = await fetch(`${hackerNews}/topstories.json`);
  const data = await response.json();
  return data;
}

export async function fetchStory(id: number): Promise<Story> {
  const response = await fetch(`${hackerNews}/item/${id}.json`);
  const storyData = await response.json();

  const story: Story = {
    id: storyData.id,
    by: storyData.by,
    title: storyData.title,
    url: storyData.url,
    score: storyData.score,
    descendants: storyData.descendants,
    type: storyData.type,
    kids: storyData.kids,
  };
  return story;
}

export const fetchStories = async (ids: number[]): Promise<Story[]> => {
  const stories = await Promise.all(ids.map(fetchStory));
  return stories;
};
