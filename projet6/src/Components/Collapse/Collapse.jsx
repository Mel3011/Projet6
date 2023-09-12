import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Collapse({ buttonLabel, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='collapse'>
      {buttonLabel}
      <div className='collapse-open'>
        <button onClick={toggleCollapse}>
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
        </button>
        {isOpen && (
          <div className="collapse-content">
            {content}
          </div>
        )}
      </div>
    </div>
  );
}

export default Collapse;
