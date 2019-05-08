import axios from 'axios'
const KEY = 'BQDz6WjgCUEd_r7KL-mQ2StCOxDTMmAVdXnmobKS_h5-nhFzNnnWBzSKefdmTV0ooN62OsD5MBqbLlFkQ6hHBtNgoA5irhKaxgI0Bj30Rg_nj12vscQMjZ7p5dRnfPuPcVRu4vgSXPMWTiSxlowlnVTuwhvhNoyEP9Z-H19i4GDzkScesKEnl5IC0R-sr10w4rbit5eCjTn9z_n7c6TBMOcVP8GiVCrkzKcAbTZd3h4GppwY29Un_weuyfzvzLYDPqK2nwTaq6ADda8vRo4HQQ'
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