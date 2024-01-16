import React from "react";

type Props = {
  story: Story;
};

function HackerNewsItem(props: Props) {
  return (
    <div>
      <h1>{props.story.title}</h1>
    </div>
  );
}

export default HackerNewsItem;
