import React from 'react'
const Quotes = ({character, quote}) => {
    return (
    <>
        <h4 className='author'>{character?.name}</h4>
        <p className='job'>{character?.house?.name ? character?.house?.name : 'House unknown'}</p>
        <p className='info'>{quote}</p>
    </>

    )
}

export default Quotes