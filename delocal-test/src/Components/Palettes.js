import React, {useEffect, useState} from "react";
import { getPalettes, getPalettesR } from "../Api/PaletteCalls";
import Palette from "./Palette";
import "./Palettes.css";

export default function Palettes() {
    const [palettes, setPalettes] = useState([]);

    useEffect(() => {
        async function FetchPalettes() {
          let result = await getPalettes();
          setPalettes(result);
        }
        FetchPalettes();
      }, []);

    return(
        <div className="palettes-container">
            <div className="header">
                <div className="title">ColourLovers.</div>
                <div className="sub-title">Live.</div>
                {palettes.map(p => {
                    return <Palette palette={p}/>
                })}
            </div>
            
        </div>
    )
}