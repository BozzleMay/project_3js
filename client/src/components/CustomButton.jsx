import React from 'react'
import { useSnapshot } from 'valtio';
import state from '../store';
import {getContrastingColor} from "../config/helpers"

const CustomButton = ({type, title, customStyles, handleClick}) => {
    const snap = useSnapshot(state);
    const generateStyle = (type) => {
        switch(type) {
            case "filled":
                return {
                    backgroundColor: snap.color,
                    color: getContrastingColor(snap.color),
                }
            case "outline":
                return {
                    backgroundColor: snap.color,
                    color: getContrastingColor(snap.color),
                    border: snap.color,
                }
            default:
                return {
                    backgroundColor: "#1D1D1D",
                    color: "#fff",
                }
        }
    
    }
  return (
    <button className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`} style={generateStyle(type)} onClick={handleClick}>{title}</button>
  )
}

export default CustomButton