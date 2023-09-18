import React from 'react'
import useJsonFetch from '../hooks/useJsonFetch';

export default function ComponentWithLoading() {
    const [data, loading, error] = useJsonFetch('http://localhost:7070','/loading');

    if ({loading}) {
      return <div>Loading...</div>;
    }
  
    if ({error}) {
      return <div>Error: {error}</div>;
    }
  
    return (
      <div>
        <pre>{JSON.stringify(data)}</pre>
      </div>
    );
  };