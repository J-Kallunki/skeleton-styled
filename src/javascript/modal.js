function openModal(modalName){
    document.getElementById(modalName).style.display = "block";
}

function closeModal(modalName) {
    document.getElementById(modalName).style.display = "none";
}

function openImageModal(elem, modalName) {
    var modal = document.getElementById(modalName);
    
    modal.style.display = "block";
    document.getElementById("img01").src = elem.src;
    document.getElementById("modalCaption").innerHTML = elem.alt;
}

// // Get the modal
// var modal = document.getElementById('myModal');

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById('myImg');
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }