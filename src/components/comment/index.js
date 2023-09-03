export default function Comment({com, setFilterComments}){
    const deleteComment = () => {
        setFilterComments(prevItems => prevItems.filter(item => item.id !== com.id));
      };
    return(
        <div className="comment">
            <div className="comment-left">
                <div className="comment-left-logo">
                    <img src="/images/icons/profilePicture.svg" alt="" />
                </div>
                <div className="comment-left-container">
                    <div>
                        <p><span>{com.username}</span>{com.content}</p>
                    </div>
                    <div>
                        <span>1d</span>
                        {com.likes == 1 && <small>{com.likes} like</small>}
                        {com.likes == 0 && <small>{com.likes} likes</small>}
                        {com.likes > 1 && <small>{com.likes} likes</small>}
                        <small>Reply</small>
                        {com.userId == 1 && <small onClick={deleteComment}>Delete</small>}
                    </div>  
                </div>
            </div>
            <div className="comment-right">
                <button>
                    <img src="/images/icons/heart.svg" alt="" />
                </button>
            </div>
        </div>
    )
}

