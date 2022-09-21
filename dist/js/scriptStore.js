let tablinks = document.getElementsByClassName("tablinks");
let tabcontent = document.getElementsByClassName("tabcontent");
function openCity(evt, tabName) {
var i;
for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}

for (i = 0; i < tablinks.length; i++) {
  tablinks[i].className = tablinks[i].className.replace(" active", "");
}

document.getElementById(tabName).style.display = "flex";
evt.currentTarget.className += " active";
}


tabcontent[0].style.display = "flex"