'use client'
import Post from "./post";
import React, { useState } from "react";
import PostAbout from "./postAbout";
export default function Posts({posts, comments}){
    const [selectedPost, setSelectedPost] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filterComments, setFilterComments] = useState(null);
    const openModal = (post) => {
        setSelectedPost(post);
        setIsModalOpen(true);
        setFilterComments(comments.filter(com => com.postId == post.id));
    }
    const closeModal = () => {
        setSelectedPost(null);
        setIsModalOpen(false);
    }
    const showPosts = posts.map(post => (
            <React.Fragment key={post.id}>
                <Post post={post} onClick={() => openModal(post)}/>
            </React.Fragment>
    ))
    return(
        <section>
            <div className="profile-media">
                <div>
                    <img src="/images/icons/postsIcon.svg" alt="" />
                    <span>POSTS</span>
                </div>
            </div>
            <div className="profile-posts">
                {showPosts}
            </div>
            {isModalOpen && <div>
                <PostAbout selectedPost={selectedPost} filterComments={filterComments} setFilterComments={setFilterComments} closeModal={closeModal}></PostAbout>
                </div>
            }
        </section>
  )
}