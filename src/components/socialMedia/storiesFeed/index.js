'use client'
import React, { useState } from "react"
import FeedStory from "./feedStory"
import StoryModal from "./storyModal"
export default function StoriesFeed({stories}){

    const visiblePlate = 580.54;
    const cardInPlate = 7;
    const maxScroll = (stories.length/cardInPlate * visiblePlate)-visiblePlate;
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleClickLeft = () => {
        setScrollPosition((prevPosition) =>
            prevPosition - visiblePlate < 0 ? 0 : prevPosition - visiblePlate
        );
    }
    const handleClickRight = () => {
        setScrollPosition((prevPosition) =>
            prevPosition + visiblePlate > maxScroll ? maxScroll : prevPosition + visiblePlate
        );
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isActiveStory, setIsActiveStory] = useState(null);
    const [isPrevStory, setIsPrevStory] = useState(null);
    const [isNextStory, setIsNextStory] = useState(null);
    const [isPrev2Story, setIsPrev2Story] = useState(null);
    const [isNext2Story, setIsNext2Story] = useState(null);
    const [scrollStoryPosition, setScrollStoryPosition] = useState(0);
    const [scrollStoryPositionModal, setScrollStoryPositionModal] = useState(0);
    
    const setStory = (id) => {
        setIsActiveStory(id);

        if((id-1)>0){
            setIsPrevStory(id-1);
        } else{
            setIsPrevStory(null);
        }

        if((id-2)>0){
            setIsPrev2Story(id-2);
        } else{
            setIsPrev2Story(null);
        }

        if((id+1)<(stories.length+1)){
            setIsNextStory(id+1);
        } else {
            setIsNextStory(null);
        }

        if((id+2)<(stories.length+1)){
            setIsNext2Story(id+2);
        } else {
            setIsNext2Story(null);
        }
    }
    const openModal = (id) => {
        setStory(id);
        setIsModalOpen(true);
    }

    const storyToLeft = () => {
        if (isActiveStory !== null && isActiveStory > 1) {
            setStory(isActiveStory - 1);
            setScrollStoryPositionModal((prevPosition) => prevPosition - 50);
        }
    }
    
    const storyToRight = () => {
        if (isActiveStory !== null && isActiveStory < stories.length) {
            setStory(isActiveStory + 1);
            setScrollStoryPositionModal((prevPosition) => prevPosition + 50);
        }
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }
    const showStories = stories.map((story, index) => {
        return (
            <React.Fragment key={index}>
                <FeedStory story={story} openModal={openModal}></FeedStory>
            </React.Fragment>
        )    
    })
    return(
    <section className="storiesFeed">
        <div
            style={{transform: `translateX(-${scrollPosition}px)`}} 
            className="storiesFeed-scroll"
        >
            {showStories}       
        </div>
        <div className="storiesFeed-navigation">
            <button className={`${scrollPosition === 0 ? '' : 'visible'}`}
                disabled={scrollPosition === 0}
                onClick={handleClickLeft}
            >
                <img src="/images/icons/buttonArrow.svg" alt="" />
            </button>
            <button className={`${scrollPosition === maxScroll ? '' : 'visible'}`}
                disabled={scrollPosition === maxScroll}
                onClick={handleClickRight}
            >
                <img src="/images/icons/buttonArrow.svg" alt="" />
            </button>
        </div>
        {isModalOpen && <StoryModal stories={stories} closeModal={closeModal} isPrevStory={isPrevStory} isActiveStory={isActiveStory} isNextStory={isNextStory} isPrev2Story={isPrev2Story} isNext2Story={isNext2Story} storyToLeft={storyToLeft} storyToRight={storyToRight} scrollStoryPosition={scrollStoryPosition} scrollStoryPositionModal={scrollStoryPositionModal} setScrollStoryPosition={setScrollStoryPosition} setScrollStoryPositionModal={setScrollStoryPositionModal}></StoryModal>}
    </section>
    )
}