function showEffects() {
    localStorage.setItem('mode', (localStorage.getItem('mode') || 'effects-visible') === 'effects-visible' ? 'light' : 'effects-visible'); localStorage.getItem('mode') === 'effects-visible' ? document.querySelector('body').classList.add('effects-visible') : document.querySelector('body').classList.remove('effects-visible')
}

function toggleInvert() {
    localStorage.setItem('mode', (localStorage.getItem('mode') || 'inverted') === 'inverted' ? 'light' : 'inverted'); localStorage.getItem('mode') === 'inverted' ? document.querySelector('body').classList.add('inverted') : document.querySelector('body').classList.remove('inverted')
}
    
function toggleSaturation() {
localStorage.setItem('mode', (localStorage.getItem('mode') || 'saturated') === 'saturated' ? 'light' : 'saturated'); localStorage.getItem('mode') === 'saturated' ? document.querySelector('body').classList.add('saturated') : document.querySelector('body').classList.remove('saturated')
}

function toggleTurn() {
localStorage.setItem('mode', (localStorage.getItem('mode') || 'turned') === 'turned' ? 'light' : 'turned'); localStorage.getItem('mode') === 'turned' ? document.querySelector('body').classList.add('turned') : document.querySelector('body').classList.remove('turned')
}

function toggleSiteSpin() {
localStorage.setItem('mode', (localStorage.getItem('mode') || 'spinning') === 'spinning' ? 'light' : 'spinning'); localStorage.getItem('mode') === 'spinning' ? document.querySelector('body').classList.add('spinning') : document.querySelector('body').classList.remove('spinning')
}

function toggleSlowSiteSpin() {
localStorage.setItem('mode', (localStorage.getItem('mode') || 'slow-spinning') === 'slow-spinning' ? 'light' : 'slow-spinning'); localStorage.getItem('mode') === 'slow-spinning' ? document.querySelector('body').classList.add('slow-spinning') : document.querySelector('body').classList.remove('slow-spinning')
}

function toggleTurnIMG() {
localStorage.setItem('mode', (localStorage.getItem('mode') || 'img-turned') === 'img-turned' ? 'light' : 'img-turned'); localStorage.getItem('mode') === 'img-turned' ? document.querySelector('body').classList.add('img-turned') : document.querySelector('body').classList.remove('img-turned')
}

function togglePinkGreen() {
localStorage.setItem('mode', (localStorage.getItem('mode') || 'pinkgreen') === 'pinkgreen' ? 'light' : 'pinkgreen'); localStorage.getItem('mode') === 'pinkgreen' ? document.querySelector('body').classList.add('pinkgreen') : document.querySelector('body').classList.remove('pinkgreen')
}

function toggleTurnText() {
localStorage.setItem('mode', (localStorage.getItem('mode') || 'text-turned') === 'text-turned' ? 'light' : 'text-turned'); localStorage.getItem('mode') === 'text-turned' ? document.querySelector('body').classList.add('text-turned') : document.querySelector('body').classList.remove('text-turned')
}

function toggleTurnAll() {
localStorage.setItem('mode', (localStorage.getItem('mode') || 'all-turned') === 'all-turned' ? 'light' : 'all-turned'); localStorage.getItem('mode') === 'all-turned' ? document.querySelector('body').classList.add('all-turned') : document.querySelector('body').classList.remove('all-turned')
}

function toggleTurnAll1deg() {
localStorage.setItem('mode', (localStorage.getItem('mode') || 'all-turned-1deg') === 'all-turned-1deg' ? 'light' : 'all-turned-1deg'); localStorage.getItem('mode') === 'all-turned-1deg' ? document.querySelector('body').classList.add('all-turned-1deg') : document.querySelector('body').classList.remove('all-turned-1deg')
}

function togglePink() {
localStorage.setItem('mode', (localStorage.getItem('mode') || 'pink') === 'pink' ? 'light' : 'pink'); localStorage.getItem('mode') === 'pink' ? document.querySelector('body').classList.add('pink') : document.querySelector('body').classList.remove('pink')
}