import React from "react";

export default function Follower({follower}){
    console.log(follower)
    return(
        <div className="follower">
            <div className="follower-left">
                <div className="follower-left-img">
                    <img src="/images/icons/profilePicture.svg" alt="" />
                </div>
                <div className="follower-left-info">
                    <div>
                        <h4>{follower.username}</h4>
                        <button>Follow</button>
                    </div>
                    <span>{follower.fullname}</span>
                </div>
            </div>
            <div className="follower-right">
                <button>Remove</button>
            </div>
        </div>
    )
}