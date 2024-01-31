import { useEffect, useState } from "react";
import { Comment } from "../types/Comments";
import { fetchComment } from "./services/api";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  commentId: number[];
  className?: string;
  commentBy?: string;
};

function Comments(props: Props) {
  const { commentId } = props;
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const getCommentsPromises = commentId.map((commentId) =>
          fetchComment(commentId)
        );

        const comments = await Promise.all(getCommentsPromises);
        setComments(comments as Comment[]);
      } catch (error) {
        console.error(error);
      }
    };

    getComments();
  }, [commentId]);

  return (
    <div>
      <ul className="px-2  border-l-[1px] ml-6">
        {comments.map((comment) => (
          <li key={comment.id} className="">
            <div
              className=" mb-1"
              dangerouslySetInnerHTML={{ __html: comment?.text }}
            ></div>
            {/* {comment?.text} */}
            <div className="font-bold mb-4">
              <FontAwesomeIcon icon={faUser} className="mr-2" /> {comment.by}
            </div>

            {comment.kids && !!comment.kids.length && (
              <Comments
                className="px-6 border-b m-6"
                commentId={comment.kids}
                commentBy={comment.by}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
