import React from "react";
import "./Palette.css";

export default function Palette({palette}) {

    // const palette = {
    //     id: 3896580,
    //     title: "Tequila Sunrise",
    //     userName: "peachcreativeco",
    //     numViews: 11,
    //     numVotes: 3,
    //     numComments: 0,
    //     numHearts: 0,
    //     rank: 0,
    //     dateCreated: "2015-10-09 10:15:22",
    //     colors: [
    //       "9F1F63",
    //       "D61B5B",
    //       "F6DC32",
    //       "F69C1F",
    //       "67B7A8"
    //     ],
    //     "description": "A refreshing tropical palette reminiscent of umbrella cocktails...",
    //     "url": "http://www.colourlovers.com/palette/3896580/Tequila_Sunrise",
    //     "imageUrl": "http://www.colourlovers.com/paletteImg/9F1F63/D61B5B/F6DC32/F69C1F/67B7A8/Tequila_Sunrise.png",
    //     "badgeUrl": "http://www.colourlovers.com/images/badges/p/3896/3896580_Tequila_Sunrise.png",
    //     "apiUrl": "http://www.colourlovers.com/api/palette/3896580"
    //   };

    return(
        <div className="palette-container">
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