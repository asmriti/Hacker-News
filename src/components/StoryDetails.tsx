import Header from "./Header";
import Footer from "./Footer";
import { Story } from "../types/Story";

type Props = {
  story: Story;
};

function StoryDetails(props: Props) {
  return (
    <div>
      <Header />
      <div>{props.story.title}</div>
      <Footer />
    </div>
  );
}

export default StoryDetails;
