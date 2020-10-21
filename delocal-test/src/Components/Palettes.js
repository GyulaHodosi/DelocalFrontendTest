import React, {useEffect, useState} from "react";
import { getNewPalettes, getPalettes } from "../Api/PaletteCalls";
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import Palette from "./Palette";
import "./Palettes.css";

export default function Palettes() {
    const [palettes, setPalettes] = useState([]);
    const [loadCount, setLoadCount] = useState(0);
    const [updateTime, setUpdateTime] = useState(new Date());

    useBottomScrollListener(handleScroll);


    function handleScroll(){
        async function FetchNewPalettes() {
            let result = await getNewPalettes(loadCount);
            setPalettes(palettes.concat(result));
            setLoadCount(loadCount+10);
            setUpdateTime(new Date());
        }
        FetchNewPalettes();
    };

    useEffect(() => {
        async function FetchPalettes() {
          let result = await getPalettes();
          setPalettes(result);
          setLoadCount(loadCount+10);
        }
        FetchPalettes();
      }, []);

    return(
        <div id="palettes" className="palettes-container">
            <div className="header">
            <div className="update">Last updated: {updateTime.getHours() + ":" + (updateTime.getMinutes() < 10 ? ("0" + updateTime.getMinutes()) : updateTime.getMinutes())}</div>
                <div className="title">ColourLovers.</div>
                <div className="sub-title">Live.</div>
            </div>
            {palettes.map(p => {
                    return <Palette key={p.id} palette={p}/>
                })}
            <div className="instruction">Scroll down to load more palettes!</div>
        </div>
    )
}