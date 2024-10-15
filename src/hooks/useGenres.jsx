import {useState, useEffect} from 'react'
import apiClient from '../services/api-client.jsx'


const useGenres = () => {
    const [genres, setGenres] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient.get('/genres', {signal: controller.signal})
        .then( (res) => {
            setGenres(res.data.results);
            setLoading(false);
        })
        .catch( (err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
        });

        return () => controller.abort();
    }, []);

    return {genres, error, isLoading}

}

export default useGenres;