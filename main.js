const contentChart = document.getElementById('ul-content');
const detailsDiv = document.getElementById('productDetails');
const dbList = document.getElementById('dbList');
const detailsBtn = document.getElementById('details-btn');
const shippingBtn = document.getElementById('shipping-btn');
const contentTblItem = document.querySelectorAll('.contentTblItem');
const contentTblPrice = document.querySelectorAll('#Pprice');
const imagesArr = document.querySelectorAll('.images');
let cartCnt = document.getElementById('cart-input');
let priceRange = document.getElementById('priceRange');

const db = [{
    stock: [
        {
            bedType: 'סט יחיד',
            price: 469.00,
            size: '90X200',
            comesWith: "ציפית 50X70, סדין 120X200X28, ציפה 150X200",
            stock: 100,
            img: [
                'https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5667906_101_a-16437966322419361.jpg',
                "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5667906_101_c-16437966332873459.jpg",
                "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5667906_101_b-16437966333295780.jpg",
                "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5667906_101_d-16437966342463028.jpg",
                "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5667906_101_f-16437966373549324.jpg",
                "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5667906_101_e-16437966353462080.jpg",
            ]
        },
        {
            bedType: 'סט מיטה וחצי',
            price: 479.00,
            size: '120X200',
            comesWith: "ציפית 50X70 סדין120X200X28, ציפה 150X200",
            stock: 100
        },
        {
            bedType: 'סט זוגי',
            price: 579.00,
            size: '160X200',
            comesWith: "שתי ציפיות50X70, סדין 160X200X30, ציפה 200X220",
            stock: 100
        },
        {
            bedType: 'סט זוגי',
            price: 599.00,
            size: '180X200',
            comesWith: "שתי ציפיות50X70, סדין 160X200X30, ציפה 200X220",
            stock: 100
        },
        {
            bedType: 'סט זוגי',
            price: 619.00,
            size: '200X200',
            comesWith: "שתי ציפיות 50X70, סדין 200X200X30 ציפה 200X220",
            stock: 100
        },
        {
            bedType: 'סט זוגי כפול ',
            price: 669.00,
            size: '160X200',
            comesWith: "שתי ציפיות 50X70, סדין 160X200X30, שתי ציפות 150X200",
            stock: 100
        },

    ],


    name: 'סט מצעי כותנה סאטן מודפסים MIA',
    description: 'סט מצעי כותנה איכותיים ונעימים באריגת סאטן יוקרתית. בד הסאטן מתאפיין בברק הייחודי שלו ובמגעו הנעים על הגוף.',
    composition: '100%כותנה סאטן',
    density: "220 חוטים לאינץ' ",
    instructions: "כביסה עם גוון צבע דומה כביסה ללא חומרי הלבנה ניתן לגהץ בחום נמוך אין לבצע ניקוי יבש",
    modelNumber: 86680059900,
    madeIn: 'טורקיה'
}]
const dbStock = db[0].stock
const arr = []

fillData();
fillDbData();
let price;
changePrice();
setPriceRange();

function setPriceRange(){
for (let i = 0; i < dbStock.length; i++) {
    arr.push(dbStock[i].price)
}
priceRange.innerHTML = `${Math.max(...arr)}₪ - ${Math.min(...arr)}₪`
}

function changePrice(){
for (let i = 0; i < contentTblItem.length; i++) {
    contentTblItem[i].addEventListener("click", function(){
        priceRange.innerHTML = contentTblItem[i].children[1].innerHTML
        price = priceRange.innerHTML

        return
    })}  
}

function setImages(){
for (let j = 0; j < imagesArr.length; j++) {
    const a = dbStock.filter((p)=> p.price = price)             
    console.log("a", a);
 }}

function fillData() {
    for (let i = 0; i < contentChart.children.length ; i++) {
        contentChart.children[i].children[0].children[0].innerHTML = `${db[0].stock[i].bedType} ${db[0].stock[i].size}`
        contentChart.children[i].children[0].children[1].innerHTML = `${db[0].stock[i].price} ₪`
    }
}

function cartCounter(act) {
    if (act === '+' && cartCnt.value < 10) {
        cartCnt.value++;
    }
    else if (act === '-' && cartCnt.value > 1) {
        cartCnt.value--;
    }
    return
}

function fillDbData() {
    detailsDiv.children[1].innerHTML = db[0].description;
    detailsDiv.children[3].innerHTML = db[0].composition;
    detailsDiv.children[7].innerHTML = db[0].density;
    detailsDiv.children[9].innerHTML = db[0].instructions;
    detailsDiv.children[11].innerHTML = db[0].modelNumber;
    detailsDiv.children[12].innerHTML = `ארץ ייצור: ${db[0].madeIn}`
    for (let i = 0; i < dbList.children.length; i++) {
        dbList.children[i].innerHTML = `${dbStock[i].bedType} ${dbStock[i].size}: ${dbStock[i].comesWith}`
    }

}

