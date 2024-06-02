class Flat {
    constructor(id, price, thumbail, calenderURL, numberPics, description) {
        this.id = id;
        this.price = price;
        this.thumbail = thumbail;
        this.calenderURL = calenderURL;
        this.numberPics = numberPics;
        this.description = description;
    }
}

function createFlatElement(Flat){
    var flat = document.createElement("div");
    flat.classList.add('col-lg-4');
    flat.classList.add('col-12');
    flat.classList.add('mb-3');
    var thumbail = document.createElement("img");
    thumbail.src = Flat.thumbail;
    thumbail.classList.add('img-fluid');
    thumbail.classList.add('product-image');
    flat.appendChild(thumbail);
    var productInfo = document.createElement("div");
    productInfo.classList.add('product-info');
    productInfo.classList.add('d-flex')
    var productTitle = document.createElement("h5");
    let title = document.createTextNode('Nr. ' + Flat.id);
    productTitle.appendChild(title);
    productTitle.classList.add('product-title');
    productTitle.classList.add('mb-0');
    var productDescription = document.createElement("p");
    productDescription.classList.add('product-p');
    productDescription.classList.add('ms-auto');
    let desc = document.createTextNode(Flat.description);
    productDescription.appendChild(desc);
    var productPrice = document.createElement("small");
    productPrice.classList.add('text-muted');
    productPrice.classList.add('ms-auto');
    let price = document.createTextNode(Flat.price+' €/Nacht');
    productPrice.appendChild(price);
    productInfo.appendChild(productTitle);
    productInfo.appendChild(productDescription);
    productInfo.appendChild(productPrice);
    flat.appendChild(productInfo);
    return flat;
}

function createModalElement(Flat){

}

// Testing template only temporarly, will be replaced with json-parser
var f1 = new Flat('1', '100', 'images/flat1/thumbmail.jpeg', 'www.google.de', '6', '2 Personen');

var f1_element = createFlatElement(f1);

var parent = document.getElementById('flatlist');
parent.appendChild(f1_element);