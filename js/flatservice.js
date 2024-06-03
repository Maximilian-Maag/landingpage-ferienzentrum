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
    thumbail.setAttribute("onclick", "openModal("+Flat.id+");");
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

// generate Flat object
var f1 = new Flat('1', '100', 'images/flats/f1/thumbmail.jpg', 'www.google.de', 7, '2 Personen');
var f2 = new Flat('2', '199', 'images/flats/f2/thumbmail.jpg', 'www.google.de', 2, '1 - 2 Personen');
var f3 = new Flat('3', '49', 'images/flats/f3/thumbmail.jpg', 'www.google.de', 9, '4 Personen');
var f4 = new Flat('4', '122', 'images/flats/f4/thumbmail.jpg', 'www.google.de', 3, '2 Personen');
var f5 = new Flat('5', '200', 'images/flats/f5/thumbmail.jpg', 'www.google.de', 1, '1 Person');

// generate html node from flat object
var f1_element = createFlatElement(f1);
var f2_element = createFlatElement(f2);
var f3_element = createFlatElement(f3);
var f4_element = createFlatElement(f4);
var f5_element = createFlatElement(f5);

// append html-nodes as childnodes in website
var parent = document.getElementById('flatlist');
parent.appendChild(f1_element);
parent.appendChild(f2_element);
parent.appendChild(f3_element);
parent.appendChild(f4_element);
parent.appendChild(f5_element);

// gets called by modal service
function get_flat(id){
    switch (id) {
        case 1 : return f1;
        case 2 : return f2;
        case 3 : return f3;
        case 4 : return f4;
        case 5 : return f5;
    }
}