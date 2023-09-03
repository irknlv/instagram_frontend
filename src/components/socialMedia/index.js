'use client'
import PostAbout from "../posts/postAbout";
import PostsFeed from "./postsFeed"
import StoriesFeed from "./storiesFeed"
import SuggestionsFeed from "./suggestionsFeed"
import React, { useState } from "react";
export default function SocialMedia(){
    const [stories, setStories] = useState([
        {
            id: 1,
            username: 'irkenaliyev',
            fullname: 'Irkenaliyev Alibi',
            media: 'post2.png'
        },
        {
            id: 2,
            username: 't_azamatov',
            fullname: 'Timur Azamatov',
            media: 'post1.png'
        },
        {
            id: 3,
            username: 'ivanov999',
            fullname: 'Ivanov Dmitriu',
            media: 'post2.png'
        },
        {
            id: 4,
            username: 'johndoe',
            fullname: 'John Doe',
            media: 'post1.png'
        },
        {
            id: 5,
            username: 'janedoe',
            fullname: 'Jane Doe',
            media: 'post6.png'
        },
        {
            id: 6,
            username: 'alexsmith',
            fullname: 'Alex Smith',
            media: 'post1.png'
        },
        {
            id: 7,
            username: 'emilyjones',
            fullname: 'Emily Jones',
            media: 'post2.png'
        },
        {
            id: 8,
            username: 'michaelbrown',
            fullname: 'Michael Brown',
            media: 'post1.png'
        },
        {
            id: 9,
            username: 'sarahwilson',
            fullname: 'Sarah Wilson',
            media: 'post3.png'
        },
        {
            id: 10,
            username: 'robertjohnson',
            fullname: 'Robert Johnson',
            media: 'post1.png'
        },
        {
            id: 11,
            username: 'lisasmith',
            fullname: 'Lisa Smith',
            media: 'storyImage.png'
        },
        {
            id: 12,
            username: 'peterparker',
            fullname: 'Peter Parker',
            media: 'post1.png'
        },
        {
            id: 13,
            username: 'maryjones',
            fullname: 'Mary Jones',
            media: 'post6.png'
        },
        {
            id: 14,
            username: 'davidmiller',
            fullname: 'David Miller',
            media: 'post1.png'
        },
        {
            id: 15,
            username: 'susanwhite',
            fullname: 'Susan White',
            media: 'post2.png'
        },
        {
            id: 16,
            username: 'michaelwilson',
            fullname: 'Michael Wilson',
            media: 'post1.png'
        },
        {
            id: 17,
            username: 'kateadams',
            fullname: 'Kate Adams',
            media: 'post2.png'
        },
        {
            id: 18,
            username: 'danielthomas',
            fullname: 'Daniel Thomas',
            media: 'post1.png'
        },
        {
            id: 19,
            username: 'elizabethbrown',
            fullname: 'Elizabeth Brown',
            media: 'post5.png'
        },
        {
            id: 20,
            username: 'williamjones',
            fullname: 'William Jones',
            media: 'post1.png'
        }
    ]);
    const [suggestions, setSuggestions] = useState([
        {
            username: 'irkenaliyev',
            fullname: 'Irkenaliyev Alibi'
        },
        {
            username: 't_azamatov',
            fullname: 'Timur Azamatov'
        },
        {
            username: 'ivanov999',
            fullname: 'Ivanov Dmitriu'
        },
        {
            username: 'johndoe',
            fullname: 'John Doe'
        },
        {
            username: 'janedoe',
            fullname: 'Jane Doe'
        },
        {
            username: 'alexsmith',
            fullname: 'Alex Smith'
        },
        
        
    ]);
    const posts = [
        {
            id: 1,
            img: 'post1.png',
            type: 'multiple',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, totam harum! Repellat in architecto minus labore, voluptas quibusdam dignissimos perspiciatis delectus, maxime quis, facere doloremque velit id molestiae molestias ipsum?'
        },
        {
            id: 2,
            img: 'post2.png',
            type: 'video',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, totam harum! Repellat in architecto minus labore, voluptas quibusdam dignissimos perspiciatis delectus, maxime quis, facere doloremque velit id molestiae molestias ipsum?'
        },
        {
            id: 3,
            img: 'post3.png',
            type: 'image',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, totam harum! Repellat in architecto minus labore, voluptas quibusdam dignissimos perspiciatis delectus, maxime quis, facere doloremque velit id molestiae molestias ipsum?'
        },
        {
            id: 4,
            img: 'post4.png',
            type: 'image',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, totam harum! Repellat in architecto minus labore, voluptas quibusdam dignissimos perspiciatis delectus, maxime quis, facere doloremque velit id molestiae molestias ipsum?'
        },
        {
            id: 5,
            img: 'post5.png',
            type: 'image',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, totam harum! Repellat in architecto minus labore, voluptas quibusdam dignissimos perspiciatis delectus, maxime quis, facere doloremque velit id molestiae molestias ipsum?'
        },
        {
            id: 6,
            img: 'post6.png',
            type: 'multiple',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, totam harum! Repellat in architecto minus labore, voluptas quibusdam dignissimos perspiciatis delectus, maxime quis, facere doloremque velit id molestiae molestias ipsum?'
        },
    ];
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
    return (
        <section className="socialMedia">
            <div className="socialMedia-left">
                <StoriesFeed stories={stories}></StoriesFeed>
                <PostsFeed posts={posts} handleSubmit={handleSubmit} content={content} setContent={setContent} openModal={openModal}></PostsFeed>
            </div>
            <div className="socialMedia-right">
                <SuggestionsFeed suggestions={suggestions}></SuggestionsFeed>
            </div>
            {isModalOpen && <div>
                <PostAbout selectedPost={selectedPost} filterComments={filterComments} setFilterComments={setFilterComments} closeModal={closeModal}></PostAbout>
                </div>
            }
        </section>
    )
}