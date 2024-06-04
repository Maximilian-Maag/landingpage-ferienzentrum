// generate Modal and add it to DOM
var slideIndex = 1;
var navbar;

function generateModalElement(flatid) {
  // load corrosponding flat
  var flat = get_flat(flatid)
  var numPics = flat.numberPics;
  var id = flat.id;

  // create modal controls
  var modal = document.createElement("div");
  modal.classList.add("modal");
  modal.setAttribute("id", "modal");
  var span = document.createElement("span");
  span.classList.add("cursor");
  span.classList.add("close");
  span.setAttribute("onclick", "closeModal()");
  var spanText = document.createTextNode('&times;');
  span.innerHTML = "&times;";
  var nextButton = document.createElement("a");
  nextButton.setAttribute("onclick", "plusSlides(1)");
  nextButton.classList.add("next");
  nextButton.innerHTML = "&#10095;";
  var previousButton = document.createElement("a");
  previousButton.classList.add("prev");
  previousButton.innerHTML = "&#10094;";
  previousButton.setAttribute("onclick", "plusSlides(-1)");
  
  // create modal content
  var modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  modal.style.display = "block";

  //append images
  for (let i = 1; i <= numPics; i += 1){
    var picNode = document.createElement("div");
    picNode.classList.add("mySlides");
    var imgNode = document.createElement("img");
    imgNode.src = "images/flats/f"+id+"/"+i+".jpg";
    imgNode.style = "width:100%";
    picNode.appendChild(imgNode);
    modalContent.appendChild(picNode);
  }

  // integrate calender
  var calNode = document.createElement("div");
  calNode.classList.add("mySlides")
  var calData = document.createElement("iframe");
  calData.src = flat.calenderURL;
  calData.style = "width:100%";
  calData.height = 480;
  calData.loading = "lazy";
  calData.frameBorder = 0;
  calNode.appendChild(calData);

  // assamble modal
  modal.appendChild(modalContent);
  modal.appendChild(span);
  modal.appendChild(nextButton);
  modal.appendChild(previousButton);
  modal.appendChild(calNode);
  return modal;
}

// Open the Modal
function openModal(flatid) {
    var modal = generateModalElement(flatid);
    var anchor = document.getElementById("anchorpoint");
    navbar = document.getElementById("navbar-overview-page");
    anchor.removeChild(navbar); // remove navbar
    anchor.appendChild(modal);
    showSlides(0);
}
  
// Close the Modal
function closeModal() {
  var parent = document.getElementById("anchorpoint");
  var child = document.getElementById("modal");
  parent.removeChild(child);
  parent.appendChild(navbar); // restore navbar
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
} 