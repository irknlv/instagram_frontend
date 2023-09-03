import React from "react"
import Follower from "./follower"

export default function Followers({closeModal}){
    const followers = [
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
        {
            username: 'emilyjones',
            fullname: 'Emily Jones'
        },
        {
            username: 'michaelbrown',
            fullname: 'Michael Brown'
        },
        {
            username: 'sarahwilson',
            fullname: 'Sarah Wilson'
        },
        {
            username: 'robertjohnson',
            fullname: 'Robert Johnson'
        },
        {
            username: 'lisasmith',
            fullname: 'Lisa Smith'
        },
        {
            username: 'peterparker',
            fullname: 'Peter Parker'
        },
        {
            username: 'maryjones',
            fullname: 'Mary Jones'
        },
        {
            username: 'davidmiller',
            fullname: 'David Miller'
        },
        {
            username: 'susanwhite',
            fullname: 'Susan White'
        },
        {
            username: 'michaelwilson',
            fullname: 'Michael Wilson'
        },
        {
            username: 'kateadams',
            fullname: 'Kate Adams'
        },
        {
            username: 'danielthomas',
            fullname: 'Daniel Thomas'
        },
        {
            username: 'elizabethbrown',
            fullname: 'Elizabeth Brown'
        },
        {
            username: 'williamjones',
            fullname: 'William Jones'
        }
    ]
    const showFollowers = followers.map((follower, index) => {
        return(
            <React.Fragment key={index}>
                <Follower follower={follower}></Follower>
            </React.Fragment>
        )
    })
    return(
        <section>
            <div className="modalWindow">
                <div className="followers">
                    <div className="followers-header">
                        <h4>Followers</h4>
                        <button 
                            onClick={closeModal}
                            className="followers-header-closeButton"
                        >
                            &times;
                        </button>
                    </div>
                    <div className="followers-container">
                        {showFollowers}
                    </div>
                </div>
            </div>
        </section>
    )
}