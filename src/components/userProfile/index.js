import Posts from "../posts";

export default function UserProfile(){
    const posts = [
        {
            id: 1,
            img: 'post1.png',
            type: 'multiple'
        },
        {
            id: 2,
            img: 'post2.png',
            type: 'video'
        },
        {
            id: 3,
            img: 'post3.png',
            type: 'image'
        },
        {
            id: 4,
            img: 'post4.png',
            type: 'image'
        },
        {
            id: 5,
            img: 'post5.png',
            type: 'image'
        },
        {
            id: 6,
            img: 'post6.png',
            type: 'multiple'
        },
        
    ]
    return(
       <section>
            <div className="user-profile">
                <img src="/images/userProfilePicture.png" alt="" className="user-profile-logo" />
                <div className="user-profile-content">
                    <div className="user-profile-menu">
                        <h3>terrylucas</h3>
                        <button className="user-profile-followButton">Follow</button>
                        <button className="user-profile-burgerButton">...</button>
                    </div>
                    <div className="user-profile-info">
                        <small><span>1,258</span> posts</small>
                        <small><span>4M</span> followers</small>
                        <small><span>1,250</span> following</small>
                    </div>
                    <div className="user-profile-biography">
                        <span>Terry Lucas</span>
                    </div>
                </div>
            </div>
            <Posts posts={posts}></Posts>
       </section>
    )
}