import axios from 'axios'
const KEY = 'BQCmDORNWV4ieCzu_eL4iq4gSvM6cwwz8I21C33HZ8EiphVMlmE7h5JOiSJsQzXRohBHHZbJIXRi8RtHAMZVDFXnBdW1kHvsrNpDjGSJ3VOyPV5lCGJT0EU0CKUJHSdiz0yPCRtaHa8JgmpqZe9S'
let search = (query) => {
    const api = axios.create({
        headers: {
            'Authorization': 'Bearer ' + KEY
        },
    })
    let url = `https://api.spotify.com/v1/search?q=${query}&type=album`

    return api.get(url)
}

export default search