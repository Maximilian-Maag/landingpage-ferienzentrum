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
    //thumbail.attributes("src", Flat.thumbail);
    thumbail.classList.add('img-fluid');
    thumbail.classList.add('product-image');
    flat.appendChild(thumbail);
    var productInfo = document.createElement("div");
    productInfo.classList.add('product-info');
    productInfo.classList.add('d-flex')
    var productTitle = document.createElement("h5");
    productTitle.innerHTML = document.createTextNode('Wohnung' + Flat.id);
    productTitle.classList.add('product-title');
    productTitle.classList.add('mb-0');
    var productDescription = document.createElement("p");
    productDescription.classList.add('product-p');
    productDescription.innerHTML = document.createTextNode(Flat.description);
    var productPrice = document.createElement("small");
    productPrice.classList.add('text-muted');
    productPrice.classList.add('ms-auto');
    productPrice.innerHTML = document.createTextNode(Flat.price+'€');
    productInfo.appendChild(productTitle);
    productInfo.appendChild(productDescription);
    productInfo.appendChild(productPrice);
    flat.appendChild(productInfo);
    return flat;
}

var test = new Flat(56, 199, '/images/product/test.jpeg', 'www.google.de', '/images/product/', '2 Zimmer Küche/Bad');
var flatElement = createFlatElement(test);
console.log(flatElement);

//var parent = document.getElementById('flatlist');
//var test = document.createElement("p");
//const testing = document.createTextNode("Just testing");
//test.appendChild(testing);
//parent.appendChild(test);
 