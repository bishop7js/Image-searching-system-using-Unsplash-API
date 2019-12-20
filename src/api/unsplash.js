import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
        'Client-ID e320d4a89414e1da4a40cf99e51446d73178bbd9cbe5f34345eb6c6e54dbd888'
    }
});