import React from 'react';

const useRouter = () => {
  const push = path => {
    window.history.pushState({}, '', path);

    const pushEvent = new CustomEvent('push');
    dispatchEvent(pushEvent);
  };
  return { push };
};

export default useRouter;
