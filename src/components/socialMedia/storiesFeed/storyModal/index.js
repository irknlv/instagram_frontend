'use client'

import React, { useState } from "react"

export default function StoryModal({stories, closeModal, isPrevStory, isActiveStory, isNextStory, isPrev2Story, isNext2Story ,storyToLeft, storyToRight, scrollStoryPosition, scrollStoryPositionModal, setScrollStoryPosition, setScrollStoryPositionModal}){
    const showStories = stories.map((story, index)=>{
        return(
            <React.Fragment key={index}>
                <div
                    style={{display: `none`}}
                    className={
                        `storyModal-window
                        ${isActiveStory==story.id ? 'isActiveStory' : ''}
                        ${isPrevStory==story.id ? 'isPrevStory' : ''}
                        ${isPrev2Story==story.id ? 'isPrevStory' : ''}
                        ${isNext2Story==story.id ? 'isNextStory' : ''}
                        ${isNextStory==story.id ? 'isNextStory' : ''}
                    }`}
                >
                    <img src={`/images/${story.media}`} alt="" />
                    <div 
                        className={`
                        ${isPrevStory==story.id ? 'isDark' : ''}
                        ${isNextStory==story.id ? 'isDark' : ''}
                        ${isPrev2Story==story.id ? 'isDark' : ''}
                        ${isNext2Story==story.id ? 'isDark' : ''}
                    `}></div>
                </div>
            </React.Fragment>
            )
    })
    const thisStoryToLeft = () => {
        storyToLeft();
    }
    const thisStoryToRight = () => {
        storyToRight();

    }
    return(
        <section>
            <div className="modalWindow">
                <button 
                    onClick={closeModal}
                    className="modalWindow-closeButton"
                >
                    &times;
                </button>
                    <div className="storyModal-block">
                        <button 
                            onClick={thisStoryToLeft}
                            className="storyModal-leftButton"
                        >
                            <img src="/images/icons/arrow.svg" alt="" />
                        </button>
                        <button 
                            onClick={thisStoryToRight}
                            className="storyModal-rightButton"
                        >
                            <img src="/images/icons/arrow.svg" alt="" />
                        </button>
                        <div className="storyModal-container"
                            style={{transform: `translateX(${scrollStoryPositionModal}px)`}}
                        >
                            <div className="storyModal"
                            style={{transform: `translateX(-${scrollStoryPositionModal}px)`}}
                        >
                            {showStories}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}