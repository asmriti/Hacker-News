import { Story } from "../types";
import { faComment, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  story: Story;
};

function HackerNewsItem(props: Props) {
  return (
    // border-b-indigo-500 border-r-indigo-500 border-b-4
    <div className="p-8 m-4 rounded-xl shadow-lg shadow-[#000000]">
      <div className="">
        <a className="cursor-pointer text-2xl font-bold" href={props.story.url}>
          {props.story.title}
        </a>
      </div>

      <ul className="flex justify-start items-center gap-6 mt-2">
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
