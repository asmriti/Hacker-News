import React, { useEffect, useState } from "react";
import { fetchComment } from "./services/api";
import { Comment } from "../types/Comments";

type Props = {
  commentId: number[];
  className: string;
  commentBy: string;
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
      <ul className="px-2 py-3  border-l m-6">
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment?.text}
            {comment?.by}
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
