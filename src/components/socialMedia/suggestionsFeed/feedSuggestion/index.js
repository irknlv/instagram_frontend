export default function FeedSuggestion({suggestion}){
    return(
        <div className="feedSuggestion">
            <div className="feedSuggestion-left">
                <img src="/images/icons/profilePicture.svg" alt="" />
                <div>
                    <p>{suggestion.username}</p>
                    <span>Followed by terrylucas + 2 more</span>
                </div>
            </div>
            <div className="feedSuggestion-right">
                <button>Follow</button>
            </div>
        </div>
    )
}