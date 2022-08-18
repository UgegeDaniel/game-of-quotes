import React from 'react'
import { FaChevronLeft, FaChevronRight, } from 'react-icons/fa';
const NavigationButtons = ({ onPrevious, onNext, onRandom}) => {
  return (
    <>
      <div className='button-container'>
        <button className='prev-btn' onClick={onPrevious}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={onNext}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={onRandom}>
        surprise me
      </button>
    </>

  )
}

export default NavigationButtons