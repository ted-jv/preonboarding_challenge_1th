import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Route = ({ path, component }) => {
  const [pathName, setPathName] = useState(window.location.pathname);

  const currentPathName = () => {
    history.pushState({}, '', pathName);
  };

  useEffect(() => {
    window.onpopstate = event => {
      setPathName(event.state);
    };
  }, []);

  useEffect(() => {
    const handlePathChange = () => setPathName(location.pathname);
    window.addEventListener('push', handlePathChange);
  });

  return <>{pathName === path ? <>{component}</> : null}</>;
};

export default Route;
