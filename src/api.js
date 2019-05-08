import axios from 'axios'
const KEY = 'BQB8C_ddRE3bOYZK4lW0tcmVHjUy6Dcjb3M5eJ5hjHt_w_N0SgipsavKcBCq5FzUsMKfN6H'
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