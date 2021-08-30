import { blogCommentData } from '../Data/BlogCommentData'
function CommentFn(props) {

    return (
        <div>
            <ul>
                {
                    blogCommentData.comments.filter(
                        (c => c.blogId === props.blogId && c.isActive))
                        .map((commentData, key) => {
                            return (
                                <li key={commentData.id}>{commentData.comment}</li>
                            );
                        }
                        )
                }
            </ul>
        </div>
    );

}

export default CommentFn