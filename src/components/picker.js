import { HexColorPicker } from "react-colorful"
import React from "react"
import "react-colorful/dist/index.css";
import {useProxy } from "valtio"


  const Picker=({state})=> {
    


    const snap = useProxy(state)
    console.log(snap);
    return (
      <div style={{ display: snap.current ? "block" : "none" }}>
        <HexColorPicker className="picker" color={snap.items[snap.current]} onChange={(color) => (state.items[snap.current] = color)} />
       
        <h1>{snap.current}</h1>
      </div>
    )
  } 
  export default Picker;