import React, { useState, useEffect } from 'react';

const CookiesPolicy: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = document.cookie.split('; ').find(row => row.startsWith('cookiesAccepted='));
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    document.cookie = `cookiesAccepted=true; path=/; max-age=${60 * 60 * 24 * 365}`; // 1 year
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">
          We use cookies to improve your experience on our site. By using our site, you accept our <a href="/privacy-policy" className="underline">Privacy Policy</a>.
        </p>
        <button
          onClick={acceptCookies}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookiesPolicy;