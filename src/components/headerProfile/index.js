'use client';
import { useState } from 'react';
import NewPost from "@/components/newPost";
import { ReactSVG } from 'react-svg';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
export default function HeaderProfile(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };
    return (
        <Router>
        <section>
            <div className="header-profile">
                <div className="header-profile-logo">
                    <Link to="/home">
                        <img src="/images/logo.svg" alt="" />
                    </Link>
                </div>
                <div className="header-profile-search">
                    <input 
                        id="searchInput" 
                        type="text" 
                        placeholder="Search" 
                        value={inputValue}
                        onChange={handleInputChange} 
                    />
                    {inputValue ? null : <img id="searchImg" src="/images/icons/search.svg" alt="" />}
                </div>
                <div className="header-profile-menu">
                    <a href="">
                        <img src="/images/icons/home.svg" alt="" />
                    </a>
                    <a href="">
                        <img src="/images/icons/direct.svg" alt="" />
                    </a>
                    <button onClick={openModal}>
                        <img src="/images/icons/newPost.svg" alt="" />
                    </button>
                    <a href="">
                        <img src="/images/icons/news.svg" alt="" />
                    </a>
                    <a href="">
                        <img src="/images/icons/like.svg" alt="" />
                    </a>
                    <a href="/profile">
                        <img src="/images/icons/profilePicture.svg" alt="" />
                    </a>
                </div>
            </div>
            <NewPost isModalOpen={isModalOpen} closeModal={closeModal}></NewPost>
        </section>
        </Router>
    )
}