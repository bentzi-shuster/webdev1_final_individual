"use client"
import React, { useState } from 'react';
import styles from './consent.module.css' //You can style the component in a separate CSS file

const CookieConsent = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(localStorage.getItem('cookieConsent') !== 'accepted');

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowCookieConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    removeGoogleAnalyticsCookies(); // Call the function to remove GA cookies
    setShowCookieConsent(false);
  };

  const removeGoogleAnalyticsCookies = () => {
    // List of Google Analytics cookies (as of the last knowledge update)
    const gaCookies = ['_ga', '_gid', '_gat', '_ga_07J2SQ3D3C', '_ga_MHKW2KWS'];
    // Loop through the list of cookies and remove them
    gaCookies.forEach(cookieName => {
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
  };
  

  if (!showCookieConsent) {
    return null; // Don't render anything if consent has been given
  }

  return (
    <div className={styles.cookieConsent}>
      <p>This website uses cookies to ensure you get the best experience on our website.</p>
      <button onClick={handleAccept}>Accept</button>
      <button onClick={handleDecline}>Decline</button>
    </div>
  );
};

export default CookieConsent;
