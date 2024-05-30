class Flat {
    constructor(id, price, thumbail, calenderURL, picsPath, description) {
        this.id = id;
        this.price = price;
        this.thumbail = thumbail;
        this.calenderURL = calenderURL;
        this.picsPath = picsPath;
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


// Testing template only temporarly, will be replaced with json-parser
var test = new Flat('57', '10', 'images/product/test.jpeg', 'www.google.de', '/images/product/', '2 Personen');
var test2 = new Flat('2', '19', 'images/product/test2.jpeg', 'www.google.de', '/images/product/', '4 Personen');
var test3 = new Flat('1111', '20000', 'images/product/test3.jpeg', 'www.google.de', '/images/product/', '20 Personen');
var test4 = new Flat('33', '1', 'images/product/test4.jpeg', 'www.google.de', '/images/product/', '1 Person');
var test5 = new Flat('12', '199', 'images/product/test5.jpeg', 'www.google.de', '/images/product/', '2 Personen');
var test6 = new Flat('19', '199', 'images/product/test7.jpeg', 'www.google.de', '/images/product/', '2 Personen');
var test7 = new Flat('22222', '199', 'images/product/test4.jpeg', 'www.google.de', '/images/product/', '2 Personen');
var test8 = new Flat('1', '199', 'images/product/test4.jpeg', 'www.google.de', '/images/product/', '2 Personen');
var test9 = new Flat('52', '199', 'images/product/test3.jpeg', 'www.google.de', '/images/product/', '2 Personen');
var test10 = new Flat('76', '333333', 'images/product/test7.jpeg', 'www.google.de', '/images/product/', '2 Personen');

var flatElement = createFlatElement(test);
var flatElement2 = createFlatElement(test2);
var flatElement3 = createFlatElement(test3);
var flatElement4 = createFlatElement(test4);
var flatElement5= createFlatElement(test5);
var flatElement6 = createFlatElement(test6);
var flatElement7 = createFlatElement(test6);
var flatElement8 = createFlatElement(test8);
var flatElement9 = createFlatElement(test9);
var flatElement10 = createFlatElement(test10);

var parent = document.getElementById('flatlist');
parent.appendChild(flatElement);
parent.appendChild(flatElement2);
parent.appendChild(flatElement3);
parent.appendChild(flatElement4);
parent.appendChild(flatElement5);
parent.appendChild(flatElement6);
parent.appendChild(flatElement7);
parent.appendChild(flatElement8);
parent.appendChild(flatElement9);
parent.appendChild(flatElement10);