import "./index.css"
import { featuredList, options } from "../../list"
import { FaRegComment } from "react-icons/fa";


export const Options = () => {
    return(
        <div className = "options-container">
            <ul className = "options">
                {
                    options.map(each => (
                        <button className = "options-button">{each}</button>
                    ))
                }
            </ul>
            <ul className='for-you-container'>
                    {
                        featuredList.map(each => (
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
    )
}