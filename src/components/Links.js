import React from "react";

function Links({github,linkedin}) {
    return (
        <div id="links">
            <h3>Links</h3>
            <div> linkedin: <a href={linkedin}>{linkedin}</a></div>
            github: <a href={github}>{github}</a>

        </div>
        
    )
}

export default Links;