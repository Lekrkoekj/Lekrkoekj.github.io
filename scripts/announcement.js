var announcementText = "Sorry for the hassle! The lekrkoekj.nl expired but will be back up soon! LKG has also been updated. The entire site is now in English and I removed a lot of things that weren't necessary anymore. The homepage has been redesigned and I added this nice Announcement box!<br><br>Also, if you didn't know yet, I have a YouTube channel with over 1000 subs! Check it out via the button below!";

var button1link = "https://youtube.com/c/Lekrkoekj";
var button1text = "My YouTube Channel";

var button2link = "";
var button2text = "";

var button3link = "";
var button3text = "";

window.onload = function() {
    if(announcementText == "") {
        document.getElementsByClassName("announcement-box")[0].remove();
        return;
    }
    if(button1text == "") {
        document.getElementById("button1").remove();
    }
    if(button2text == "") {
        document.getElementById("button2").remove();
    }
    if(button3text == "") {
        document.getElementById("button3").remove();
    }
    document.getElementById("announcement-text").innerHTML = announcementText;

    document.getElementById("button1link").href = button1link;
    document.getElementById("button1").innerHTML = button1text;

    document.getElementById("button2link").href = button2link;
    document.getElementById("button2").innerHTML = button2text;

    document.getElementById("button3link").href = button3link;
    document.getElementById("button3").innerHTML = button3text;
}