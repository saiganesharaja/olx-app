const MOCK_ITEMS = [];
/*{
    image: "https://placehold.it/280X150",
    name: "IPhone 11 Pro Ultra Max",
    price: 5,
    location: "Pedakallepalli, Mopidevi",
    postedDate: "20-08-2023",
},
{
    image: "https://placehold.it/280X150",
    name: "IPhone 11 Pro Ultra Max",
    price: 10,
    location: "Pedakallepalli, Mopidevi",
    postedDate: "20-08-2023",
},
{
    image: "https://placehold.it/280X150",
    name: "IPhone 11 Pro Ultra Max",
    price: 20,
    location: "Pedakallepalli, Mopidevi",
    postedDate: "20-08-2023",
},
{
    image: "https://placehold.it/280X150",
    name: "IPhone 11 Pro Ultra Max",
    price: 30,
    location: "Pedakallepalli, Mopidevi",
    postedDate: "20-08-2023",
},
{
    image: "https://placehold.it/280X150",
    name: "IPhone 11 Pro Ultra Max",
    price: 40,
    location: "Pedakallepalli, Mopidevi",
    postedDate: "20-08-2023",
},
{
    image: "https://placehold.it/280X150",
    name: "IPhone 11 Pro Ultra Max",
    price: 50,
    location: "Pedakallepalli, Mopidevi",
    postedDate: "20-08-2023",
},
{
    image: "https://placehold.it/280X150",
    name: "IPhone 11 Pro Ultra Max",
    price: 60,
    location: "Pedakallepalli, Mopidevi",
    postedDate: "20-08-2023",
},
{
    image: " https://scontent.fvga4-1.fna.fbcdn.net/v/t39.30808-6/355032005_2201270960210622_4892032725638016980_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=ClJzR1Dxh8QAX_fvN1j&_nc_ht=scontent.fvga4-1.fna&oh=00_AfC-HWg4rDYwRpmL3ICPTnzYhsTHIB2EDjeOAd2synDZ0w&oe=64EA29C0",
    name: "IPhone 11 Pro Ultra Max",
    price: 70,
    location: "Pedakallepalli, Mopidevi",
    postedDate: "20-08-2023",
},
{
    image: "https://placehold.it/280X150",
    name: "IPhone 11 Pro Ultra Max",
    price: 80,
    location: "Pedakallepalli, Mopidevi",
    postedDate: "20-08-2023",
},
{
    image: "https://placehold.it/280X150",
    name: "IPhone 11 Pro Ultra Max",
    price: 90,
    location: "Pedakallepalli, Mopidevi",
    postedDate: "20-08-2023",
},
];*/

function addItems(event) {
    const root = document.getElementById("items");
    MOCK_ITEMS.forEach(function (item, i) {
        const div = createItem(item, i);
        root.appendChild(div);
    });
}
class OlxItem {
    id;
    name;
    price;
    location;
    image;
    postdate;
    constructor(name, price, location, image, postdate) {
        this.id = Math.random();
        this.name = name;
        this.price = price;
        this.location = location;
        this.image = image;
        this.postdate = postdate;

    }

}
for (let i = 0; i < 100; i++) {
    MOCK_ITEMS.push(
        new OlxItem(
            "dell laptop" + (1 + 1),
            22,
            "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/16-5620/media-gallery/notebook-inspiron-16-5620-2-in-1-gy-fpr-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=570&qlt=100,1&resMode=sharp2&size=570,402&chrss=full",
            new Date()


        )
    );
}
console.log(MOCK_ITEMS);

// function addItems(event) {
//     const root = document.getElementById("items");
//     MOCK_ITEMS.forEach(function (item, i) {
//         const div = createItem(item, i);
//         root.appendChild(div);
//     });
// }

function createItem(item, i) {
    const div = document.createElement("div");
    div.classList.add("list");

    const anchor = document.createElement("a");
    anchor.setAttribute("href", `/item.html?id=${i}`);

    div.appendChild(anchor);

    const img = document.createElement("img");
    img.setAttribute("src", item.image);

    const price = document.createElement("p");
    price.innerHTML = item.price;

    const name = document.createElement("p");
    name.innerHTML = item.name;

    const location = document.createElement("p");
    location.innerHTML = item.location;

    anchor.append(img, price, name, location);
    return div;
}
function itemView(item) {
    const pageview = document.createElement("div");
    pageview.classList.add("page");
    const wrap = document.createElement("div");
    wrap.classList.add("view");
    const img = document.createElement("img");
    img.setAttribute("src", item.image);
    wrap.appendChild(img);
    const information = document.createElement("div");
    information.classList.add("info");
    const price = document.createElement("p");
    price.innerHTML = item.price;
    const name = document.createElement("p");
    name.innerHTML = item.name;
    const location = document.createElement("p");
    location.innerHTML = item.location;
    information.append(img, price, name, location);
    pageview.append(wrap, information);
    return pageview;
}

