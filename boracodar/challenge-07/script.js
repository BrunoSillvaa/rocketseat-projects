const page = {
    header: {
        title: document.querySelector('.texts'),
        form: document.querySelector('.form'),
        city: {
            search: document.querySelector('.city-search'),
            options: document.querySelector('.options'),
            option: document.querySelectorAll('.option'),
            selected: document.querySelector('.city-selected'),
        },
        imgs: document.querySelectorAll('.bg')
    },

    content: document.querySelector('.content'),

    animations() {
        let time = 0
        const interval = setInterval(() => {
            switch (time) {
                case 5: {
                    this.header.title.classList.add('active')
                    break
                }
                case 10: {
                }
                this.content.classList.add('active')
                break
                case 15: {
                    this.header.form.classList.add('active')
                    this.header.imgs.forEach(img => img.classList.add('active'))
                    break
                }
                case 20: {
                    clearInterval(interval)
                    break
                }
            }
            time ++
        }, 100)
    }
}

page.animations()
page.header.city.search.addEventListener('click', () => page.header.city.options.classList.toggle('active'))
page.header.city.option.forEach(city => {
    city.addEventListener('click', () => page.header.city.selected.textContent = city.textContent)
})