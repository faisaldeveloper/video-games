import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f71e5b9c9b4d4525af2185f067d32157'
    }
})
