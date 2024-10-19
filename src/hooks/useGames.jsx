import useData from './useData.jsx';

const useGames = (selectedGenre, selectedPlatform) => useData('/games', {
    params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id
        }}, [selectedGenre?.id, selectedPlatform?.id] );

export default useGames;