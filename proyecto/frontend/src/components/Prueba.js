import React, { useState, useEffect } from 'react';

let s;

export const test = () => {

    const [counter, setCounter] = React.useState(0);

  // Emmulate componentDidMount lifecycle
  React.useEffect(() => {
    s = setInterval(() => {
      setCounter(state => (state +1));
    }, 1000);
  }, []);

  // This is for counter state variable
  React.useEffect(() => {
    if (counter > 9) {
      clearInterval(s);
    }
  }, [counter]);

    return <span>{counter}</span>;
}
export default test
