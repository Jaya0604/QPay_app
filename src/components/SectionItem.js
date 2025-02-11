import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBolt, faCreditCard, faTachometerAlt, faLandmark, faTv,
  faGasPump, faPhone, faHome, faPiggyBank, faDonate, faPencilRuler, faWater
} from '@fortawesome/free-solid-svg-icons'; 

const iconMap = {
  'Electricity': faBolt,
  'Credit Card': faCreditCard,
  'FASTag': faTachometerAlt,
  'Loan': faLandmark,
  'DTH': faTv,
  'Prepaid': faPhone,
  'LPG Gas': faGasPump,
  'Postpaid': faPhone,
  'Landline Postpaid': faPhone,
  'Mobile Prepaid': faPhone,
  'Mobile Postpaid': faPhone,
  'Broadband Postpaid': faTv,
  'Cable TV': faTv,
  'Subscription': faPencilRuler,
  'Water': faWater,  
  'Piped Gas': faGasPump,
  'Housing': faHome,
  'Municipal': faLandmark,
  'Rent': faHome,
  'Loan Payback': faLandmark,
  'Insurance': faPiggyBank,
  'Education Fee': faPencilRuler,
  'Recurring Deposit': faPiggyBank,
  'Donation': faDonate,
  'National Pension Scheme (NPS)': faPiggyBank,
};

const SectionItem = ({ title, onClick ,className}) => {
  return (
    <div className={`section-item ${className}`} onClick={onClick}>
      <FontAwesomeIcon icon={iconMap[title]} className="icon" />
      {title}
    </div>
  );
};

export default SectionItem;
