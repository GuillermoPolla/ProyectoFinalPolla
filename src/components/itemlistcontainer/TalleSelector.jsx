import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const TalleSelector = ({ talles }) => {
  const [showTalles, setShowTalles] = useState(false);
  const [selectedTalle, setSelectedTalle] = useState('S');

  const toggleTalles = () => {
    setShowTalles(!showTalles);
  };

  const handleTalleClick = (talle) => {
    setSelectedTalle(talle);
    setShowTalles(false);
  };

  return (
    <div className="talle-selector">
      <button className="talle-button" onClick={toggleTalles}>
        Talle {selectedTalle} <FontAwesomeIcon icon={faChevronDown} />
      </button>
      {showTalles && (
        <div className="talle-options">
          {talles.map((talle) => (
            <div key={talle} onClick={() => handleTalleClick(talle)}>
              {talle}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TalleSelector;
