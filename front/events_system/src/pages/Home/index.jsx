import React, { useEffect } from 'react';
import {getAllEvents} from '../../services/event.api';

export const Home = () => {

  useEffect(() => {
    const result = getAllEvents();
    console.log(result);
  }, [])

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
