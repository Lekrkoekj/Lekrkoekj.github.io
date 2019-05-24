function toggleInvert() {

    if (document.getElementById("invert").checked == true) {
        
        document.getElementById("body").style.filter = "invert(100%)";
        
    } 
    else {
        
        document.getElementById("body").style.filter = "";
        
    }
}
    
function toggleSaturation() {

    if (document.getElementById("saturation").checked == true) {
        
        document.getElementById("body").style.filter = "saturate(10000%)";
        
    } 
    else {
        
        document.getElementById("body").style.filter = "";
        
    }
}
function toggleTurn() {

    if (document.getElementById("turn").checked == true) {
        
        document.getElementById("body").style.transform = "rotate(180deg)";
        
    } 
    else {
        
        document.getElementById("body").style.transform = "";
        
    }
}
function toggleSpin() {

    if (document.getElementById("spin").checked == true) {
        
        document.getElementById("site-container").style.animation = "wrapper-spin 5s infinite";
        
    } 
    else {
        
        document.getElementById("site-container").style.animation = "";
        
    }
}