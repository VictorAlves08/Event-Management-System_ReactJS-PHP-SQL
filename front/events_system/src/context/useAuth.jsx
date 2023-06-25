import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [isLoggedInData, setIsLoggedInData] = useState(false);

  useEffect(() => {
    const checkAuthentication = () => {
      const userData = sessionStorage.getItem('isUserLoggedIn');
      if (userData) {
        const parsedData = JSON.parse(userData);
        setIsLoggedInData(parsedData);
      } else {
        setIsLoggedInData(false);
      }
    };

    checkAuthentication();
  }, []);

  return isLoggedInData;
};

