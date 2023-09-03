'use client'
import React, { useState } from "react"

export default function feedPost({post, handleSubmit, content, setContent, openModal}){
    const [expanded, setExpanded] = useState(true);
    const toggleDescription = ()=>{
        setExpanded(!expanded);
    }
    const openThisModal = ()=>{
        openModal(post);
    }
    return(
        <div className="feedPost">
            <div className="feedPost-header">
                <div>
                    <button className="feedStory feedPost-logo">
                        <div className="feedStory-img feedPost-logo-img">
                            <img src="/images/userProfilePicture.png" alt="" />
                        </div>
                    </button>
                    <h5>terrylucas</h5>
                </div>
                <button>...</button>
            </div>
            <div className="feedPost-content">
                {<img src={`images/${post.img}`} alt="" />}
            </div>
            <div className="feedPost-info">
                <div className="feedPost-info-action">
                    <div>
                        <img src="/images/icons/heart.svg" alt="" />
                        <img src="/images/icons/comment.svg" alt="" />
                    </div>
                    <div>
                        <img src="/images/icons/bookmark.svg" alt="" />
                    </div>
                </div>
                <h5>1.069 likes</h5>
                <div>
                    <div className="feedPost-info-text">
                        <h5>terrylucas</h5>
                        <span>
                            {post.description.length > 75 ? (expanded ? post.description.slice(0,75): post.description) : post.description}
                        </span>
                        <small onClick={toggleDescription}>
                            {expanded ? '...more' : '...less'}
                        </small>
                    </div>
                </div>
                <small onClick={openThisModal}>View all 100 comments</small>
                <span>1 HOUR AGO</span>
            </div>
            <form className="feedPost-info-form">
                <img src="/images/icons/smileIcon.svg" alt="" />
                <input 
                    name="content" 
                    type="text" 
                    placeholder="Add a comment..."/>
                <button type="submit">Post</button>
            </form>
        </div>
    )
}