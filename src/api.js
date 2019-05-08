import axios from 'axios'
const KEY = 'BQB67CE80VcXpTS3EeGF6INNtAhTj7rPzTjJrI35-xf37ByAl3UA3o1w5d3Dx3dSS3NjjPK1PPi8yNPDu1X75chjqp-VsePQ6p-dHDn6_zZJc7UG4ffYd0f3jwA8-nn4WzgGH-9Y4drE4fFey1HYjOc-M_12vhDAHxcxPaXFSRnjz92GbmYca6ujsB-IO7G2gBiDCzpbL-GrPs0naMMgrEQRTZGyS5JEEvpHTwnoIPmLK8cL6CiQ4pMDaSC0k617TAQtAsDmcQBaJhdZkiho3A'
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