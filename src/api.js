import axios from 'axios'
const key = '948e7610e9c94d81bdfd05a07a5a8e6e:' + '780384775e0a491db4d181c6580c01dd'
const KEY = 'BQBre4Id47wetxPsIaG82bkkfh05f03N92Nn-Ubijc12-Bhrq7DWyJ3Mg5ZjSXPLuwdNAFXdHRnTXwxxYpZCNqIqgyquNPSr0QbVHzLKtR2ntYoKwLu8pVa6DasJ1o6UtbVTmUNzTgfZ-c8KiDdWPyevqR191Lg4BgzvfdQvwoscqf2whiAo97BMna9z2_ATFCIVdDDSixTDytieRk-soUuKBn-ofi3Y1bBy29T-NoUU6iKCbpltBI6OOLxXmynHT5NOgAT9k2zTzoVMikuccw'
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