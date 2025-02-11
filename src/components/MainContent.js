import React from 'react';
import Section from './Section';

const MainContent = () => {
  return (
    <main className="main-content">
      <Section className="trending-payment" title="Trending Payment" items={[
        { title: 'Electricity', icon: 'electricity-icon' },
        { title: 'Credit Card', icon: 'creditcard-icon' },
        { title: 'FASTag', icon: 'fastag-icon' },
        { title: 'Loan', icon: 'loan-icon' },
        { title: 'DTH', icon: 'dth-icon' },
        { title: 'Prepaid', icon: 'prepaid-icon' },
        { title: 'LPG Gas', icon: 'lpg-icon' },
        { title: 'Postpaid', icon: 'postpaid-icon' },
      ]} />

      <div className="split-section">
        <Section title="Housing & Utilities" items={[
          { title: 'Electricity', icon: 'electricity-icon' },
          { title: 'LPG Gas', icon: 'lpg-icon' },
          { title: 'Water', icon: 'water-icon' },
          { title: 'Piped Gas', icon: 'pipedgas-icon' },
          { title: 'Housing', icon: 'housing-icon' },
          { title: 'Municipal', icon: 'municipal-icon' },
          { title: 'Rent', icon: 'rent-icon' },
        ]} />
        <Section title="Finance" items={[
          { title: 'Loan Payback', icon: 'loanpayback-icon' },
          { title: 'Credit Card', icon: 'creditcard-icon' },
          { title: 'Insurance', icon: 'insurance-icon' },
          { title: 'Education Fee', icon: 'educationfee-icon' },
          { title: 'Recurring Deposit', icon: 'recurringdeposit-icon' },
          { title: 'Donation', icon: 'donation-icon' },
          { title: 'National Pension Scheme (NPS)', icon: 'nps-icon' },
        ]} />
      </div>

      <div className="split-section">
        <Section title="Communication" items={[
          { title: 'Landline Postpaid', icon: 'landline-icon' },
          { title: 'Mobile Prepaid', icon: 'mobileprepaid-icon' },
          { title: 'Mobile Postpaid', icon: 'mobilepostpaid-icon' },
        ]} />
        <Section title="Entertainment" items={[
          { title: 'Broadband Postpaid', icon: 'broadband-icon' },
          { title: 'Cable TV', icon: 'cabletv-icon' },
          { title: 'DTH', icon: 'dth-icon' },
          { title: 'Subscription', icon: 'subscription-icon' },
        ]} />
      </div>
    </main>
  );
};

export default MainContent;
