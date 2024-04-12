import './index.css'
import { trySayingList } from '../../list'

export const TrySaying = () => {
    return(
        <div className="p-1 try-saying">
        <span className = "try-saying-head">Try Saying</span>
        <ul className='try-saying-container'>
                {
                    trySayingList.map(each => (
                        <li className= "try-card-container">
                            <div className='try-say-card'>
                                <div>
                                    <img src={each.img} alt='img' className='try-say-img'/>
                                </div>
                                <div className='try-descrip'>
                                    <span className='hding'>{each.heading}</span>
                                    <span className='say-para'>@{each.name} {each.chats}m chats {each.likes} likes</span>
                                </div>
                            </div>
                            <div className= "try-say-paras">
                                <p>{each.one}</p>
                                <p>{each.three}</p>
                                <p>{each.two}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}