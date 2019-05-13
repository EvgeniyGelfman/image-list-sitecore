import axios from 'axios';

const KEY = 'AIzaSyAvohOSB-xAhcRYou8K8ygUz8XfZb0Sveg';
const collection = '/search/photos';

/* Another way to create axios instance  */
// axios.create({
//     baseURL: url,
//     headers: {
//         Authorization: `Client-ID ${PUBLIC_KEY}`
//     },
//     params: {
//         query: term
//     }
// });
export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        ket: KEY
    }
});
