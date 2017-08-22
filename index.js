var links = document.querySelectorAll(".itemLinks");
var wrapper = document.querySelector("#wrapper");
 
// pointer to currently displayed item
var activeLink = 0;
 
// event listeners
for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.addEventListener('click', setClickedItem, false);
 
    // identify the item for the activeLink
    link.itemID = i;
}
 
// set first item as active
links[activeLink].classList.add("active");
 
function setClickedItem(e) {
    removeActiveLinks();
    //resetTimer();
 
    var clickedLink = e.target;
    activeLink = clickedLink.itemID;
 
    changePosition(clickedLink);
}
 
function removeActiveLinks() {
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
}
 
function changePosition(link) {
    var position = link.getAttribute("data-pos");
    
    // translate vertically
    var translateValue = "translate3d(0px," + position + ", 0)";
    wrapper.style.transform = translateValue;
 
    // set new link as active
    link.classList.add("active");
}

/*
The code for sliding the content automatically
*/
var timeout;
 
function startTimer() {
    // wait 6 seconds before calling goInactive
    timeout = window.setInterval(goToNextItem, 6000);
}
startTimer();
 
function resetTimer() {
    window.clearInterval(timeoutID);
    startTimer();
}
 
function goToNextItem() {
    removeActiveLinks();
 
    if (activeLink < links.length - 1) {
        activeLink++;
    } else {
        activeLink = 0;
    }
 
    var newLink = links[activeLink];
    changePosition(newLink);
}

/*
I had help creating this content slider from Kirupa
Check out his awesome tutorial here: https://www.kirupa.com/html5/creating_a_sweet_content_slider.htm
*/