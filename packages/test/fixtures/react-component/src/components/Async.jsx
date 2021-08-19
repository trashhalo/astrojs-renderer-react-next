/* eslint-disable require-jsdoc */
import React, { useState, useEffect } from 'react';

function Inner({ value, setValue }) {
  const fetch = () => {
    let v = value();
    if (v) {
      return v;
    }

    if (import.meta.env.SSR) {
      throw Promise.resolve('hello').then(setValue);
    } else {
      useEffect(() => {
        Promise.resolve('hello').then(setValue);
      })

      return "loading";
    }
  };
  const [body] = useState(fetch);
  return (<h1 id="async-h1">{body}</h1>)
}

const cache = {};
function Async({ cacheKey }) {
  const [setValue, value] = import.meta.env.SSR ? [
    (v) => {
      cache[cacheKey] = v;
    },
    () => cache[cacheKey]]
    : useState();

  return (<Inner value={value} setValue={setValue}></Inner>);
}

export default Async
