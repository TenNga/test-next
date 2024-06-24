// pages/_error.js
import React from 'react';
import NextErrorComponent from 'next/error';

const CustomError = ({ statusCode }) => {
  return (
    <div>
      <h1>{statusCode}</h1>
      <p>Something went wrong.</p>
    </div>
  );
};

CustomError.getInitialProps = async (context) => {
  const errorInitialProps = await NextErrorComponent.getInitialProps(context);
  return { ...errorInitialProps };
};

export default CustomError;
