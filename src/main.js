import search from './api'
class App {
    constructor() {
        this.repositories = [];
        this.inputEl = document.querySelector('input[name=repository]')
        this.formEl = document.getElementById('repo-form')
        this.listEl = document.getElementById('repo-list')
        this.registerHandlers()
    }
    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event)
    }

    setLoading(loading = true) {
        if (loading == true) {
            let loadingEl = document.createElement('span')
            loadingEl.appendChild(document.createTextNode('Carregando'))
            loadingEl.setAttribute('id', 'loading')
            this.formEl.appendChild(loadingEl)
        } else {
            document.getElementById('loading').remove()
        }
    }

    async addRepository(event) {
        event.preventDefault();
        const repoInput = this.inputEl.value;
        this.setLoading()
        if (repoInput === 0)
            return;

        try {
            const response = await search(repoInput)
            console.log(response.data.albums.items[0])

            const { name, artists: [art], images, external_urls: { spotify } } = response.data.albums.items[0]

            this.repositories.push({
                name,
                artist: art.name,
                avatar_url: images[0].url,
                html_url: spotify
            })
            console.log(this.repositories)
            this.inputEl.value = '';

            this.render()
        } catch (error) {
            alert('Album não encontrado :(')
        }
        this.setLoading(false)


    }
    render() {
        this.listEl.innerHTML = ''
        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img')
            imgEl.setAttribute('src', repo.avatar_url)

            let titleEl = document.createElement('strong')
            titleEl.appendChild(document.createTextNode(repo.name))

            let artistEl = document.createElement('p')
            artistEl.appendChild(document.createTextNode(repo.artist))

            let linkEl = document.createElement('a')
            linkEl.setAttribute('target', '_blank')
            linkEl.setAttribute('href', repo.html_url)
            linkEl.appendChild(document.createTextNode('Acessar'))

            let listItemEl = document.createElement('li')

            listItemEl.appendChild(imgEl)
            listItemEl.appendChild(titleEl)
            listItemEl.appendChild(artistEl)
            listItemEl.appendChild(linkEl)

            this.listEl.appendChild(listItemEl)
        })

    }

}
new App()