import { blogCommentData } from './blogComment'
function CommentFn(props) {

    return (
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
    );

}

export default CommentFn