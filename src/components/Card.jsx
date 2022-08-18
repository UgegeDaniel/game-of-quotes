import React from 'react';
import NavigationButtons from './NavigationButtons';
import CardImage from './CardImage';
import Quotes from './Quotes';
const Card = ({ character, quote, onPrevious, onNext, onRandom }) => {
    return (
        <article className='review'>
            <CardImage character={character} />
            <Quotes character={character} quote={quote} />
            <NavigationButtons onPrevious={onPrevious} onNext={onNext} onRandom={onRandom} />
        </article>
    );
};
export default Card;