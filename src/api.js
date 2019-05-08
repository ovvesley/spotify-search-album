import axios from 'axios'
const KEY = 'BQBBeLJlnfO2PoOtFcbKatkSsD_CfOwVi8Gnsr25-DYvH3bt8Hd2pUtunnvviAENH9UPHHwfrqgdmOBu16hBV4F4Mk168wEjcAjTtG8X1KUob0YOUHgcR_OHZfmlBGGELa3aQQ5US1qN7IhqQRaCCzOIF2zUYgU5NxxlvvxHwtWFkCYVNyEkNsPNR1BxcO_2VTRFNnTlWgGxOhIHDS7OGQRpjcRy5abLtDh8MHoQip9YRW4_9CApWj37eFWn-iZemDxUjBGuPCiCeWrpPhaflA'
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