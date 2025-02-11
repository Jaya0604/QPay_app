import React from 'react';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const handleBillPayClick = () => {
    console.log('Bill Pay clicked');
    alert('Redirecting to Bill Pay page...');
  };

  const handleMoreInfoClick = () => {
    console.log('More Info clicked');
    alert('Redirecting to More Info page...');
  };

  const handleDisputeClick = () => {
    console.log('Dispute clicked');
    alert('Redirecting to Dispute page...');
  };

  const handleHistoryClick = () => {
    console.log('History clicked');
    alert('Redirecting to History page...');
  };

  const handleProfileClick = () => {
    console.log('Profile clicked');
    alert('Redirecting to Profile page...');
  };

  const items = [
    { title: 'Bill Pay' , icon: 'billpay-icon', onClick: handleBillPayClick },
    { title: 'Dispute', icon: 'dispute-icon', onClick: handleDisputeClick },
    { title: 'History', icon: 'history-icon', onClick: handleHistoryClick },
    { title: 'Profile', icon: 'profile-icon', onClick: handleProfileClick },
    { title: 'More Info', icon: 'moreinfo-icon', onClick: handleMoreInfoClick },
  ];

  return (
    <aside className="sidebar">
      {items.map(item => (
        <SidebarItem 
          key={item.title} 
          title={item.title} 
          icon={item.icon} 
          onClick={item.onClick} 
        />
      ))}
    </aside>
  );
};

export default Sidebar;
