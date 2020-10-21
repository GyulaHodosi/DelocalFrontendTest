import React from "react";
import "./Palette.css";

export default function Palette({palette}) {

    function handleBackground() {
        document.body.style.backgroundImage = `linear-gradient(to right, #${palette.colors[0]}, #${palette.colors[1]}, #${palette.colors[2]}, #${palette.colors[3]}, #${palette.colors[4]})`;
    }

    return(
        <div className="palette-container" onClick={handleBackground}>
            <div className="palette-details">
                <div className="palette-title left">{palette.title}</div>
                <div className="palette-creator left">by {palette.userName} at {palette.dateCreated}</div>
                <div className="palette-views left">{palette.numViews} views {palette.numVotes} votes</div>
            </div>
            <div className="palette-colors right">
                {palette.colors.map(c => {
                    return <div className="palette-color" style={{backgroundColor: "#" + c}} />
                })}
            </div>
        </div>
    )
}