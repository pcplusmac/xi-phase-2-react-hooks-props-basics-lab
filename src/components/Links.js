import React from "react";

function Links(props) {
    return (
        <div id="links">
            <h3>Links</h3>
            <a href={props.linkedIn}>{props.linkedIn}</a>
            <a href={props.gitHub}>{props.gitHub}</a>

        </div>
        
    )
}

export default Links;