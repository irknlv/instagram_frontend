import Post from "./post";
import React from "react";
export default function Posts({posts}){
    const showPosts = posts.map(post => (
        <React.Fragment key={post.id}>
            <Post post={post} />
        </React.Fragment>))
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
        </section>
    )
}