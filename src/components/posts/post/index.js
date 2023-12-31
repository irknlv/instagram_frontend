export default function Post({post, onClick}){
    const postImg = "/images/" + post.img;
    let iconSrc = "";
    if (post.type === 'multiple') {
        iconSrc = "/images/icons/multipleTypeIcon.svg";
    } else if (post.type === 'video') {
        iconSrc = "/images/icons/videoTypeIcon.svg";
    }
    return(
        <div className="profile-post" onClick={onClick}>
            <div className="profile-post-image">
                <img src={postImg} alt="" />
            </div>
            {iconSrc && <img src={iconSrc} alt="" className="profile-post-typeIcon" />}
        </div>
    )
}

