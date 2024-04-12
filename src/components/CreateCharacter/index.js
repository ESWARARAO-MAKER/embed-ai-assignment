import './index.css'
import { BsStars } from "react-icons/bs";

export const CreateCharacter = () => {
    return(
        <div className = "create-char-container">
            <div className = "create-text-container">
                <h2>Create a Character</h2>
                <p>Not vibing with any characters? Create one of your own! Customize things like their voice, conversation starts, their tone, and more!</p>
                <button className = "create-char-button"><BsStars/> Create a Character</button>
            </div>
        </div>
    )
}