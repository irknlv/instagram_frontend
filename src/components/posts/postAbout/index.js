import React, { useState } from "react";
import Comment from "@/components/posts/comment"
export default function PostAbout({selectedPost, filterComments, setFilterComments, closeModal, setComments}){
    const imgUrl = '/images/' + selectedPost.img;
    const showComments = filterComments.map(com => (
        <React.Fragment key={com.id}>
            <Comment com={com} setFilterComments={setFilterComments}></Comment>
        </React.Fragment>
    ))
    const [content, setContent] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        if(!content.trim() == ''){
            let newItem = {
                id: filterComments.length + 1,
                username: 'irkenaliyev',
                postId: selectedPost.id,
                content: content,
                likes: 0,
                userId: 1,
            }
            setFilterComments(prevItems => [newItem, ...prevItems]);
            setContent('')
        }
        
    }
    return(
        <section>
            <div className="modalWindow">
                <button 
                    onClick={closeModal}
                    className="modalWindow-closeButton"
                >
                    &times;
                </button>
                <div className="postAbout-modal">
                    <div className="postAbout-left">
                        <img src={imgUrl} alt="" />
                    </div>
                    <div className="postAbout-right">
                        <div className="postAbout-right-header">
                            <div>
                                <img src="/images/icons/profilePicture.svg" alt="" />
                            </div>
                            <div>
                                <h4>decode.kz</h4>
                                <span>Original audio</span>
                            </div>
                            <div className="postAbout-right-header-menu">
                                ...
                            </div>
                        </div>
                        <div className="postAbout-right-container">
                            <div className="comments">
                                {showComments}
                            </div>
                            <div className="comments-action">
                                <div className="comments-action-analysis">
                                    <button>View Insights</button>
                                    <button>Currently boosted</button>
                                </div>
                                <div className="comments-action-buttons">
                                    <div>
                                        <img src="/images/icons/heart.svg" alt="" />
                                        <img src="/images/icons/comment.svg" alt="" />
                                    </div>
                                    <div>
                                        <img src="/images/icons/bookmark.svg" alt="" />
                                    </div>
                                </div>
                                <div className="comments-action-info">
                                    <div>
                                        <img src="/images/icons/profilePicture.svg" alt="" />
                                        <img src="/images/icons/profilePicture.svg" alt="" />
                                        <p>Liked by <span>senalov070</span> and <span>61 others</span></p>
                                    </div>
                                    <div>
                                        <small>1 DAY AGO</small>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit} className="comments-action-form">
                                    <img src="/images/icons/smileIcon.svg" alt="" />
                                    <input 
                                        name="content" 
                                        type="text" 
                                        value={content}
                                        onChange={e => setContent(e.target.value)}
                                        placeholder="Add a comment..."/>
                                    <button type="submit">Post</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}