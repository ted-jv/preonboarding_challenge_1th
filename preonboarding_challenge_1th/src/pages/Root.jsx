import React from 'react';
import useRouter from '../hooks/useRouter';

const Root = () => {
  const { push } = useRouter();

  return (
    <>
      Root
      <div>
        <button
          onClick={() => {
            push('/about');
          }}
        >
          Go About
        </button>
      </div>
    </>
  );
};

export default Root;
