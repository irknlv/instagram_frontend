'use client'
import Posts from "../posts";
import React, {useState} from "react";
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
    const [comments, setComments] = useState([
        {
            id: 1,
            content: 'Клевый пост',
            username: 'irkenaliyev1',
            postId: 1,
            likes: 5,
        },
        {
            id: 2,
            content: 'Хороший пост',
            username: 'irkenaliyev2',
            postId: 1,
            likes: 3,
        },
        {
            id: 3,
            content: 'Класс',
            username: 'irkenaliyev3',
            postId: 1,
            likes: 4,
        },
        {
            id: 4,
            content: 'Круто',
            username: 'irkenaliyev4',
            postId: 1,
            likes: 7,
        },
        {
            id: 5,
            content: 'Огонь',
            username: 'irkenaliyev5',
            postId: 1,
            likes: 9,
        },
        {
            id: 6,
            content: 'Красиво',
            username: 'irkenaliyev6',
            postId: 1,
            likes: 3,
        },
        {
            id: 7,
            content: 'Вау',
            username: 'irkenaliyev7',
            postId: 1,
            likes: 2,
        },
        {
            id: 8,
            content: 'Красиво',
            username: 'irkenaliyev8',
            postId: 1,
            likes: 7,
        },
        {
            id: 9,
            content: 'Классное фото',
            username: 'irkenaliyev9',
            postId: 1,
            likes: 11,
        },
        {
            id: 10,
            content: 'Хороший фотограф',
            username: 'irkenaliyev10',
            postId: 1,
            likes: 13,
        },
        {
            id: 11,
            content: 'Клевая фотка',
            username: 'irkenaliyev11',
            postId: 1,
            likes: 16,
        },        
    ])
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
            <Posts posts={posts} comments={comments}></Posts>
       </section>
    )
}