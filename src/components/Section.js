import React from 'react';
import SectionItem from './SectionItem';

const Section = ({ title, items, className }) => {
  const handleElectricityClick = () => {
    console.log('Electricity clicked');
    alert('Redirecting to Electricity payment page...');
  };

  const handleCreditCardClick = () => {
    console.log('Credit Card clicked');
    alert('Redirecting to Credit Card payment page...');
  };

  const itemClickHandlers = {
    'Electricity': handleElectricityClick,
    'Credit Card': handleCreditCardClick,
  };

  return (
    <div className="section">
      <h2>{title}</h2>
      <div className="grid">
        {items.map(item => (
          <SectionItem
            className={className}
            key={item.title}
            title={item.title}
            icon={item.icon}
            onClick={itemClickHandlers[item.title]}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
