import { Story } from "../types";
import { faComment, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  story: Story;
};

function HackerNewsItem(props: Props) {
  // console.log(props.story.score);
  return (
    <div className="p-8 border-2 m-4 rounded-lg">
      <div className="">
        <a className="cursor-pointer text-2xl" href={props.story.url}>
          {props.story.title}
        </a>
      </div>

      <ul className="flex justify-between items-center w-3/12 mt-2">
        <li>
          <FontAwesomeIcon icon={faComment} className="mr-2" />
          {props.story.score}
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} className="mr-2" />
          {props.story.by}
        </li>
      </ul>
    </div>
  );
}

export default HackerNewsItem;
