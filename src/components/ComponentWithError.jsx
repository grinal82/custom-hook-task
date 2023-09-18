import React from 'react'
import useJsonFetch from '../hooks/useJsonFetch';

export default function ComponentWithError() {
    const [data, loading, error] = useJsonFetch('http://localhost:7070','/error');

    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div> {error}</div>;
    }
  
    return (
      <div>
        <pre>{JSON.stringify(data)}</pre>
      </div>
    );
  };