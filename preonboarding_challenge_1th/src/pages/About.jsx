import React from 'react';
import useRouter from '../hooks/useRouter';

const About = () => {
  const { push } = useRouter();
  return (
    <>
      About
      <div>
        <button
          onClick={() => {
            push('/');
          }}
        >
          Go Root
        </button>
      </div>
    </>
  );
};

export default About;
