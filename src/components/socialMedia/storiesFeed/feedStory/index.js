export default function FeedStory({story, openModal}){
    const thisOpenModal = () => {
        openModal(story.id);
        console.log()
    }
    return(
        <button className="feedStory" onClick={thisOpenModal}>
            <div className="feedStory-img">
                <img src="/images/userProfilePicture.png" alt="" />
            </div>
            <p>{story.username}</p>
        </button>
    )
}