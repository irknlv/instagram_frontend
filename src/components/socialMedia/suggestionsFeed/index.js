import React from "react"
import FeedSuggestion from "./feedSuggestion"
export default function SuggestionsFeed({suggestions}){
    const showSuggestions = suggestions.map((suggestion, index) => {
        return (
            <React.Fragment key={index}>
                <FeedSuggestion suggestion={suggestion}></FeedSuggestion>
            </React.Fragment>
        )    
    })
    return(
    <section className="suggestionsFeed">
        <div className="suggestionsFeed-header">
            <h5>Suggestions For You</h5>
            <button>See All</button>
        </div>
        <div className="suggestionsFeed-container">
            {showSuggestions}
        </div>
    </section>
    )
}