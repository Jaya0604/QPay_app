import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoice, faExclamationTriangle, faHistory, faUser, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  'Bill Pay': faFileInvoice,
  'Dispute': faExclamationTriangle,
  'History': faHistory,
  'Profile': faUser,
  'More Info': faInfoCircle
};

const SidebarItem = ({ title, onClick }) => {
  return (
    <div className={`sidebar-item ${title === "Bill Pay" ? "item_active" : ""}`} onClick={onClick}>
      <FontAwesomeIcon icon={iconMap[title]} className="icon" />
      {title}
    </div>
  );
};

export default SidebarItem;
