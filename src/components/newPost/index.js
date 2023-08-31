'use client'
import React, { useState } from "react"
import { ReactSVG } from "react-svg";

export default function NewPost({isModalOpen,closeModal}){
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [caption, setCaption] = useState("");
    const filters = [
        {
            id: 1,
            name: 'Original',
            style: '',
        },
        {
            id: 2,
            name: 'Clarendon',
            style: '',
        },
        {
            id: 3,
            name: 'Gingham',
            style: '',
        },
        {
            id: 4,
            name: 'Moon',
            style: '',
        },
        {
            id: 5,
            name: 'Lark',
            style: '',
        },
        {
            id: 6,
            name: 'Reyes',
            style: '',
        },
        {
            id: 7,
            name: 'Juno',
            style: '',
        },
        {
            id: 8,
            name: 'Slumber',
            style: '',
        },
        {
            id: 9,
            name: 'Crema',
            style: '',
        },
        {
            id: 10,
            name: 'Ludwig',
            style: '',
        },
        {
            id: 11,
            name: 'Aden',
            style: '',
        },
        {
            id: 12,
            name: 'Perpetua',
            style: '',
        },
    ]
    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };
    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };
    const handleImageUpload = (event) => {
        const uploadedImage = event.target.files[0];
        setSelectedImage(uploadedImage);
        nextStep();
    };
    const handleFilterSelect = (index) => {
        setSelectedFilter(index);
        console.log(index);
    }
    const handleChangeCaption = (event) => {
        const newText = event.target.value
        if(newText.length <= 200) {
            setCaption(newText);
        }
    }
    const closeModalWindow = () => {
        const confirmed = window.confirm("Вы уверены, что хотите продолжить?");
        if (confirmed) {
            closeModal();
            setSelectedFilter(null);
            setCurrentStep(1);
            setCaption("")
        } else {
            
        }
        
    }
    return (
        <section>
            {isModalOpen && <div className="newPost">
                    <button 
                        onClick={closeModalWindow}
                        className="modalWindow-closeButton"
                    >
                        &times;
                    </button>
                    {currentStep == 1 &&<div className="newPost-modal">
                        <div className="newPost-header">
                            <h4>Create new post</h4>
                        </div>
                        <form className="newPost-form">
                            <img src="/images/icons/newPostIcon.png" alt="" />
                            <p>Drag photos and videos here</p>
                            <input onChange={handleImageUpload} type="file" id="mediaInput" accept="image/*"/>
                            <label for="mediaInput" id="chooseFileLabel">Select from computer</label>
                        </form>
                    </div>}
                    {currentStep == 2 &&<div className="editPost-modal">
                        <div className="editPost-header">
                            <button onClick={prevStep}>
                                <img src="/images/icons/arrowLeft.svg" alt="" />
                            </button>
                            <h4>Edit</h4>
                            <button onClick={nextStep}>Next</button>
                        </div>
                        <div className="editPost-container">
                            <div className="editPost-container-left">
                                <img src={URL.createObjectURL(selectedImage)} alt="" />
                            </div>
                            <div className="editPost-container-right">
                                <div className="editPost-container-right-header">
                                    <h5>Filters</h5>
                                </div>
                                <div className="editPost-container-right-filters">
                                    {
                                        filters.map((filter, index) => (
                                            <React.Fragment key={index}>
                                                <div
                                                    onClick={() => handleFilterSelect(index)}
                                                    className={`editPost-filter ${selectedFilter === index ? "editPost-filter-selected" : ""}`}
                                                >
                                                    <img src="/images/icons/filterIcon.png" alt="" />
                                                    <span>{filter.name}</span>
                                                </div>
                                            </React.Fragment>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>}
                    {currentStep == 3 &&<div className="editPost-modal">
                        <div className="editPost-header">
                            <button onClick={prevStep}>
                                <img src="/images/icons/arrowLeft.svg" alt="" />
                            </button>
                            <h4>Create new post</h4>
                            <button onClick={closeModalWindow}>Share</button>
                        </div>
                        <div className="editPost-container">
                            <div className="editPost-container-left">
                                <img src={URL.createObjectURL(selectedImage)} alt="" />
                            </div>
                                <div className="sharePost-container">
                                    <div>
                                        <img src="/images/icons/profilePicture.svg" alt="" />
                                        <h5>decode.kz</h5>
                                    </div>
                                    <textarea
                                        value={caption}
                                        onChange={handleChangeCaption}
                                        rows="10"
                                        cols="50"
                                        maxLength="200"
                                        placeholder="Write a caption..."
                                    ></textarea>
                                    <ReactSVG
                                        className="sharePost-smileIcon"
                                        src="/images/icons/smileIcon.svg"
                                        beforeInjection={(svg) => {
                                        svg.setAttribute("fill", "#a0a0a0");
                                    }}
                                    />
                                    <span>{caption.length}/{200 - caption.length}</span>
                                </div>
                            </div>
                    </div>}
                </div>
            }
        </section>
    )
}