import './index.css'
import { tryThese } from '../../list'

export const TryThese  = () => {
    const tryTheseList1 = tryThese.slice(0,4)
    const tryTheseList2 = tryThese.slice(4,9)

    const renderCard = (lst) => {
        return(
            <ul className='try-these-container'>
                {
                    lst.map(each => (
                        <li className='try-these-card'>
                            <div>
                                <img src={each.img} alt='img' className='try-img'/>
                            </div>
                            <div className='try-description'>
                                <span className='head'>{each.head}</span>
                                <span className='try-para'>{each.para}</span>
                            </div>
                        </li>
                    ))
                }
            </ul>
        )
    }

    return(
        <div>
            {renderCard(tryTheseList1)}
            {renderCard(tryTheseList2)}
        </div>
    )
}