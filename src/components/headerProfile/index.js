'use client';
import { useState } from 'react';
export default function HeaderProfile(){
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };
    return (
        <div className="header-profile">
            <div className="header-profile-logo">
                <img src="/images/logo.svg" alt="" />
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
                <a href="">
                    <img src="/images/icons/newPost.svg" alt="" />
                </a>
                <a href="">
                    <img src="/images/icons/news.svg" alt="" />
                </a>
                <a href="">
                    <img src="/images/icons/like.svg" alt="" />
                </a>
                <a href="">
                    <img src="/images/icons/profilePicture.svg" alt="" />
                </a>
            </div>
        </div>
    )
}