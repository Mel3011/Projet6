import React, { useState } from 'react';

function Collapse ({ buttonLabel, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleCollapse}>
        {isOpen ? 'Cacher' : 'Afficher'} le contenu
      </button>
      {isOpen && (
        <div>
          {content}
        </div>
      )}
    </div>
  );
}

export default Collapse;
