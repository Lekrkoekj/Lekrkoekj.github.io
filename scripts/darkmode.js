/*Dark Theme*/

document.addEventListener('DOMContentLoaded', (event) => {
    ((localStorage.getItem('mode') || 'dark') === 'dark') ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')
  })

/*Kleuren*/

  document.addEventListener('DOMContentLoaded', (event) => {
    ((localStorage.getItem('theme-color') || 'green-theme') === 'green-theme') ? document.querySelector('body').classList.add('green-theme') : document.querySelector('body').classList.remove('green-theme')
  })

  document.addEventListener('DOMContentLoaded', (event) => {
    ((localStorage.getItem('theme-color') || 'turquoise-theme') === 'turquoise-theme') ? document.querySelector('body').classList.add('turquoise-theme') : document.querySelector('body').classList.remove('turquoise-theme')
  })


/*Achtergronden*/

  document.addEventListener('DOMContentLoaded', (event) => {
    ((localStorage.getItem('theme-background') || 'lkg4background') === 'lkg4background') ? document.querySelector('body').classList.add('lkg4background') : document.querySelector('body').classList.remove('lkg4background')
  })

  document.addEventListener('DOMContentLoaded', (event) => {
    ((localStorage.getItem('theme-background') || 'old') === 'old') ? document.querySelector('body').classList.add('old') : document.querySelector('body').classList.remove('old')
  })