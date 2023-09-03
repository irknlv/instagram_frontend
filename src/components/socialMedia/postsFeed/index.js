import React from "react"
import FeedPost from "./feedPost"
export default function PostsFeed({posts, handleSubmit, content, setContent, openModal}){
    const showPosts = posts.map((post, index) => {
        return(
            <React.Fragment key={index}>
                <FeedPost post={post} handleSubmit={handleSubmit} content={content} setContent={setContent} openModal={openModal}></FeedPost>
            </React.Fragment>
        )
    }) 
    return(
    <section className="postsFeed">
        {showPosts}
    </section>
    )
}