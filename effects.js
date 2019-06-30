/*geen effect maar dit scriptj staat op elke pagina dus ik makklijkr*/
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
function removeBlockedOverlay() {
    
    document.getElementById("blocked-game-overlay").remove();
    
}  


function darkModeSwitch() {
localStorage.setItem('mode', (localStorage.getItem('mode') || 'dark') === 'dark' ? 'light' : 'dark'); localStorage.getItem('mode') === 'dark' ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')
}
function search() {
localStorage.setItem('mode', (localStorage.getItem('mode') || 'search-open') === 'search-open' ? 'light' : 'search-open'); localStorage.getItem('mode') === 'search-open' ? document.querySelector('body').classList.add('search-open') : document.querySelector('body').classList.remove('search-open')
}

/*wow*/


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

function toggleTurnAll36deg() {
localStorage.setItem('mode', (localStorage.getItem('mode') || 'all-turned-36deg') === 'all-turned-36deg' ? 'light' : 'all-turned-36deg'); localStorage.getItem('mode') === 'all-turned-36deg' ? document.querySelector('body').classList.add('all-turned-36deg') : document.querySelector('body').classList.remove('all-turned-36deg')
}

function togglePink() {
localStorage.setItem('mode', (localStorage.getItem('mode') || 'pink') === 'pink' ? 'light' : 'pink'); localStorage.getItem('mode') === 'pink' ? document.querySelector('body').classList.add('pink') : document.querySelector('body').classList.remove('pink')
}

function toggleWhite() {
localStorage.setItem('mode', (localStorage.getItem('mode') || 'white') === 'white' ? 'light' : 'white'); localStorage.getItem('mode') === 'white' ? document.querySelector('body').classList.add('white') : document.querySelector('body').classList.remove('white')
}

function toggleOld() {
localStorage.setItem('mode', (localStorage.getItem('mode') || 'old') === 'old' ? 'light' : 'old'); localStorage.getItem('mode') === 'old' ? document.querySelector('body').classList.add('old') : document.querySelector('body').classList.remove('old')
}

function toggleWhiteBackground() {
localStorage.setItem('mode', (localStorage.getItem('mode') || 'white-background') === 'white-background' ? 'light' : 'white-background'); localStorage.getItem('mode') === 'white-background' ? document.querySelector('body').classList.add('white-background') : document.querySelector('body').classList.remove('white-background')
}

function toggleF() {
localStorage.setItem('mode', (localStorage.getItem('mode') || 'effect-spin') === 'effect-spin' ? 'light' : 'effect-spin'); localStorage.getItem('mode') === 'effect-spin' ? document.querySelector('body').classList.add('effect-spin') : document.querySelector('body').classList.remove('effect-spin')
}

function toggleSpasticBackground() {
localStorage.setItem('mode', (localStorage.getItem('mode') || 'spastic-background') === 'spastic-background' ? 'light' : 'spastic-background'); localStorage.getItem('mode') === 'spastic-background' ? document.querySelector('body').classList.add('spastic-background') : document.querySelector('body').classList.remove('spastic-background')
}

function toggleLekrdraaitj() {
localStorage.setItem('mode', (localStorage.getItem('mode') || 'lekrdraaitj') === 'lekrdraaitj' ? 'light' : 'lekrdraaitj'); localStorage.getItem('mode') === 'lekrdraaitj' ? document.querySelector('body').classList.add('lekrdraaitj') : document.querySelector('body').classList.remove('lekrdraaitj')
}

function toggleLekrknippertj() {
localStorage.setItem('mode', (localStorage.getItem('mode') || 'lekrknippertj') === 'lekrknippertj' ? 'light' : 'lekrknippertj'); localStorage.getItem('mode') === 'lekrknippertj' ? document.querySelector('body').classList.add('lekrknippertj') : document.querySelector('body').classList.remove('lekrknippertj')
}

function toggleLekrschaduwtj() {
localStorage.setItem('mode', (localStorage.getItem('mode') || 'shadow') === 'shadow' ? 'light' : 'shadow'); localStorage.getItem('mode') === 'shadow' ? document.querySelector('body').classList.add('shadow') : document.querySelector('body').classList.remove('shadow')
}

function toggleLekrschaduwtjInset() {
localStorage.setItem('mode', (localStorage.getItem('mode') || 'shadow-inset') === 'shadow-inset' ? 'light' : 'shadow-inset'); localStorage.getItem('mode') === 'shadow-inset' ? document.querySelector('body').classList.add('shadow-inset') : document.querySelector('body').classList.remove('shadow-inset')
}

function toggleLekrzoompj() {
localStorage.setItem('mode', (localStorage.getItem('mode') || 'zoomed') === 'zoomed' ? 'light' : 'zoomed'); localStorage.getItem('mode') === 'zoomed' ? document.querySelector('body').classList.add('zoomed') : document.querySelector('body').classList.remove('zoomed')
}

function toggleLekrrandj() {
localStorage.setItem('mode', (localStorage.getItem('mode') || 'border') === 'border' ? 'light' : 'border'); localStorage.getItem('mode') === 'border' ? document.querySelector('body').classList.add('border') : document.querySelector('body').classList.remove('border')
}

function toggleLekrdikrandj() {
localStorage.setItem('mode', (localStorage.getItem('mode') || 'fat-border') === 'fat-border' ? 'light' : 'fat-border'); localStorage.getItem('mode') === 'fat-border' ? document.querySelector('body').classList.add('fat-border') : document.querySelector('body').classList.remove('fat-border')
}