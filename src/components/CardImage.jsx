import React from 'react'
import { FaQuoteRight } from 'react-icons/fa';
import gotLogo from '../img/gotLogo.jpg'
const CardImage = ({character}) => {
    return (
        <div className='img-container'>
            <div className='img-container'>
                <img src={character?.imageUrl || gotLogo} alt={"character i"} className='person-img' />
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
            </div>
        </div>
    )
}
export default CardImage