/*Dark Theme*/

document.addEventListener('DOMContentLoaded', (event) => {
    ((localStorage.getItem('mode') || 'off') === 'dark') ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')
  })

/*Kleuren*/

  document.addEventListener('DOMContentLoaded', (event) => {
    ((localStorage.getItem('theme-color') || 'off') === 'green-theme') ? document.querySelector('body').classList.add('green-theme') : document.querySelector('body').classList.remove('green-theme')
  })

  document.addEventListener('DOMContentLoaded', (event) => {
    ((localStorage.getItem('theme-color') || 'off') === 'turquoise-theme') ? document.querySelector('body').classList.add('turquoise-theme') : document.querySelector('body').classList.remove('turquoise-theme')
  })

  document.addEventListener('DOMContentLoaded', (event) => {
    ((localStorage.getItem('theme-color') || 'off') === 'purple-theme') ? document.querySelector('body').classList.add('purple-theme') : document.querySelector('body').classList.remove('purple-theme')
  })

  document.addEventListener('DOMContentLoaded', (event) => {
    ((localStorage.getItem('theme-color') || 'off') === 'pink-theme') ? document.querySelector('body').classList.add('pink-theme') : document.querySelector('body').classList.remove('pink-theme')
  })


/*Achtergronden*/

  document.addEventListener('DOMContentLoaded', (event) => {
    ((localStorage.getItem('theme-background') || 'off') === 'lkg4background') ? document.querySelector('body').classList.add('lkg4background') : document.querySelector('body').classList.remove('lkg4background')
  })

  document.addEventListener('DOMContentLoaded', (event) => {
    ((localStorage.getItem('theme-background') || 'off') === 'old') ? document.querySelector('body').classList.add('old') : document.querySelector('body').classList.remove('old')
  })