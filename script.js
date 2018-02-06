let product_list_link = "http://kea-alt-del.dk/t5/api/productlist";
let product_link = "http://kea-alt-del.dk/t5/api/product?id=";
let image_path = "http://kea-alt-del.dk/t5/site/imgs/small/";
let categories_link = "http://kea-alt-del.dk/t5/api/categories";

//1 grab the template
const menu_items = document.querySelector("#menu_items");
const template = document.querySelector("#menu_template").content;

function loadData(link) {
    fetch(link).then(e => e.json()).then(data => show(data));
}

//2 clone the template
function show(data) {
    data.forEach(element => {
        const clone = template.cloneNode(true);
        console.log(clone);
        clone.querySelector('.product-img').src = image_path + element.image + "-sm.jpg";
        clone.querySelector('.name').textContent = element.name;
        clone.querySelector('#short_description').textContent = element.shortdescription;
        clone.querySelector('.price').textContent = element.price;
        menu_items.appendChild(clone);
    })
}

loadData(product_list_link);
