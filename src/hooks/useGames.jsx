import React, {useState, useEffect} from 'react'
import apiClient from '../services/api-client.jsx'


const useGames = () => {
    const [games, setGames] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        apiClient.get('/games', {signal: controller.signal})
        .then( res => setGames(res.data.results))
        .catch( (err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)}
        );

        return () => controller.abort();
    }, []);

    return {games, error}

}

export default useGames;