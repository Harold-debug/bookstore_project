var modal = [];
modal.length = 40;
for (var i = 0; i < modal.length; i++) {
    modal = document.getElementById("myModal");
}
var img = [];
img.length = 40;
for (var i = 0; i < img.length; i++) {
    img = document.getElementById("myImg");
}
var modalImg = [];
modalImg.length = 40;
for (var i = 0; i < modalImg.length; i++) {
    modalImg = document.getElementById("img01");
}
var captionText = [];
captionText.length = 40;
for (var i = 0; i < captionText.length; i++) {
    captionText = document.getElementById("caption");
}
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}