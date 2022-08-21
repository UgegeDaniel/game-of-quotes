import React from 'react'
const Quotes = ({character, quote}) => {
    return (
    <div>
        <h4 className='author'>{character?.name}</h4>
        <p className='job'>{character?.house?.name ? character?.house?.name : 'House unknown'}</p>
        <p className='info'>{quote}</p>
    </div>

    )
}

export default Quotes
