import './index.css'
import { FaAnglesLeft } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaRegCompass } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { useState } from 'react';


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(true)

    const onCloseButton = () => {
        setIsOpen(false)
    }

    const onOpenButton = () => {
        setIsOpen(true)
    }

    return(
        <>
        { isOpen &&
            <div className='navbar-container'>
                <div className='nav-content'>
                    <div className='logo'>
                        <span>Character.ai</span>
                        <button className='close-button btn' onClick={onCloseButton}><FaAnglesLeft/></button>
                    </div>
                    <div className='action-buttons'>
                        <button className='create-button'><FaPlus/> Create</button>
                        <button className='discover-button'><FaRegCompass/> Discover</button>
                    </div>
                </div>
                <div className='bottom-section'>
                    <hr className='m-4'/>
                    <div className='profile-container'>
                        <button>Try c.ai <FaPlus className='subscribe-plus'/></button>
                        <div className='profile'>
                            <div className='profile-text'>
                                <span className='profile-logo'>e</span>
                                <span className='profile-name'>eswararao</span>
                            </div>
                            <FaAngleDown className=''/>
                        </div>
                        <button className='sign-button btn'>Sign in</button>
                    </div>
                </div>
            </div>
        }
        {
            !isOpen && <div className='open-container'><button className='open-button' onClick={onOpenButton}><FaAlignLeft/></button></div>
        }
        </>
    )
}
export default Navbar