import {useState, useEffect} from 'react'
import apiClient from '../services/api-client.jsx'


const useData = (endpoint) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient.get(endpoint, {signal: controller.signal})
        .then( (res) => {
            setData(res.data.results);
            setLoading(false);
        })
        .catch( (err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
        });

        return () => controller.abort();
    }, []);

    return {data, error, isLoading}

}

export default useData;