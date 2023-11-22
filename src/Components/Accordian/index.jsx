import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Accordion = ({ question, answer, index, openAccordion, setOpenAccordion }) => {
  const isOpen = index === openAccordion;

  const handleOpen = () => {
    setOpenAccordion(isOpen ? null : index);
  };

  return (
    <div className='my-4 rounded-lg cursor-pointer'>
      <div
        className='w-full bg-black bg-opacity-50 text-white    hover:text-purple-600 font-medium text-xl flex items-center justify-between px-3 py-2 border-4 group hover:border-purple-600 transition-all duration-300'
        onClick={handleOpen}
      >
        <div className='w-[80%]'>
          <p>{question}</p>
        </div>
        <div>
          <FontAwesomeIcon
            className={` ${isOpen ? 'rotate-180' : ''} group-hover:text-purple-600 transition-all duration-750`}
            icon={faAngleDown}
          />
        </div>
      </div>
      {isOpen && (
        <div
          className={`translate-y-[0rem] bg-blue-600 py-2 px-4 font-medium text-lg transition-all duration-750`}
        >
          {answer}
        </div>
      )}
    </div>
  );
};

export default Accordion