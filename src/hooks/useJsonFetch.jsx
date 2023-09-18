import { useState, useEffect } from 'react'

export default function useJsonFetch(url, opts) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      setLoading(true)
      
      async function fetchData() {
        try {
          const response = await fetch(url+opts)

          if(!response.ok){
              setError(response.statusText)
              throw new Error(`HTTP Error! Status: ${response.status}`)
          }
          const jsonData = await response.json()
          // константе data присваиваем значение ответа из сервера
          setData(jsonData)
          setError(null)
          } catch(e){
          console.log(e)
          } finally {
            // меняем состояние `loading` на `false` 
              setLoading(false)
          }
      }
      fetchData();
  },[url, opts]);// массив зависимостей для триггера перезапуска useEffect

  return (
    [data, loading, error]
  )
}
