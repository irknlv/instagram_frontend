'use client'
import { useState } from "react"

export default function NewPost({isModalOpen,closeModal}){
    
    return (
        <section>
            {isModalOpen && <div className="newPost">
                <button 
                    onClick={closeModal}
                    className="newPost-closeButton"
                >
                    &times;
                </button>
                <div className="newPost-modal">
                    <div className="newPost-header">
                        <h4>Create new post</h4>
                    </div>
                    <form className="newPost-form">
                        <img src="/images/icons/newPostIcon.png" alt="" />
                        <p>Drag photos and videos here</p>
                        <input type="file" id="mediaInput" accept="image/*"/>
                        <label for="mediaInput" id="chooseFileLabel">Select from computer</label>
                    </form>
                </div>
            </div>
            }
        </section>
    )
}