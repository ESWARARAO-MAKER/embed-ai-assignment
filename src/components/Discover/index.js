import './index.css'
import { CiSearch } from "react-icons/ci";
import { forYouList } from '../../list';
import { useEffect, useState } from 'react';
import { FaRegComment } from "react-icons/fa";
import { TryThese } from '../TryThese';
import {Featured} from '../Featured'
import { TrySaying } from '../TrySaying';
import { Options } from '../Options';
import { CreateCharacter } from '../CreateCharacter';


const Discover = () => {
    const [isSignedin, setIsSignedin] = useState(true)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 770) {
                setIsSignedin(false);
            }
            else{
                setIsSignedin(true)
            }
        };

        
        window.addEventListener('resize', handleResize);

        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setIsSignedin]);


    return(
        <div className='discover-container'>
            <div className='m-3'>
                <div className={isSignedin ? 'profile-search-container': 'search-signedout'}>
                    {isSignedin && <div className='discover-profile'>
                        <span>Welcome back,</span>
                        <div className='dis-profile'>
                            <span className='e'>e</span>
                            <span className='name'>eswararao</span>
                        </div>
                    </div>}
                    <div className='search-bar'>
                        <input type = "text" placeholder='Search for Characters'/>
                        <span className='search-icon'><CiSearch/></span>
                    </div>
                </div>
                <div className='for-you'>
                    <h6 className='p-2 m-4 for-heading'>For you</h6>
                    <ul className='for-you-container'>
                        {
                            forYouList.map(each => (
                                <div className='for-container'>
                                    <div className='for-img'>
                                        <img src={each.img} alt={each.heading} className='for-image'/>
                                    </div>
                                    <div className='try-desc'>
                                        <div className='try-desc-text'>
                                            <span className='for-name'>{each.heading}</span>
                                            <span className='font-para'>By @{each.name}</span>
                                            <span className='for-desc'>{each.desc}</span>
                                        </div>
                                        <div>
                                            <span className='comment'><FaRegComment/> {each.comment}k</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <h6 className='try-heading'>Try these</h6>
                    <TryThese/>
                    <Featured/>
                    <Options/>
                    <TrySaying/>
                    <CreateCharacter/>
                    <div className='nav-buttons'>
                        <button className='bn'>About</button>
                        <button className='bn'>Careers</button>
                        <button className='bn'>Blog</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Discover