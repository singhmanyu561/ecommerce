import React from 'react';
// import Product from './Product';
import { useFetch } from './useFetch';

const Demo = () => {
  const url = 'https://fakestoreapi.com/products';
  const { data, loading, error } = useFetch(url);

  return (
    <div>
      {loading && <div>{loading}</div>}
      {error && <div>{error}</div>}
      {data && <div>{<div>{data.title}</div>}</div>}
    </div>
  );
};

export default Demo;
