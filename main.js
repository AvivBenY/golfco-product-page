//HTML elements
const contentChart = document.getElementById('ul-content');
const detailsDiv = document.getElementById('productDetails');
const dbList = document.getElementById('dbList');
const contentTblItem = document.querySelectorAll('.contentTblItem');
const imagesArr = document.querySelectorAll('.images');
const Dbtn = document.getElementById('detailsBtn');
const Sbtn = document.getElementById('shippingBtn');
const shippingDiv = document.getElementById('shippingDiv');
const zoomImgs = document.querySelectorAll('.zoom');
let cartCnt = document.getElementById('cart-input');
let priceRange = document.getElementById('priceRange');
const slides = document.querySelectorAll(".slide");
const imgSlides = document.querySelectorAll(".slider-image");
const gallery = document.querySelector(".productGallery")
const carousel = document.querySelector(".carousel")
const emptyHeart = document.querySelector(".emptyHeart")
const redHeart = document.querySelector(".redHeart")
const nextSlide = document.querySelector(".btn-next");
const prevSlide = document.querySelector(".btn-prev");


// Variables
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
            stock: 100,
            img: [
                'https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5667923_121_a-16437263982850684.jpg',
                "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5667923_121_c-16437264002920414.jpg",
                "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5667923_121_b-16437263993142695.jpg",
                "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5667923_121_d-16437264013142497.jpg",
                "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5667923_121_f-16437264033057090.jpg",
                "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5667923_121_e-16437264024554319.jpg",
            ]
        },
        {
            bedType: 'סט זוגי',
            price: 579.00,
            size: '160X200',
            comesWith: "שתי ציפיות50X70, סדין 160X200X30, ציפה 200X220",
            stock: 100,
            img: [
                'https://www.golfco.co.il/pub/media/catalog/product/cache/14a810e8196b0edc557c35b1c718dcf2/5/1/5169104_170_a-16479533562513055.jpg',
                "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/1/5169104_170_c-16479533583225806.jpg",
                "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/1/5169104_170_b-16479533572740944.jpg",
                "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/1/5169104_170_d-16479533593473404.jpg",
                "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/1/5169104_170_f-16479533614090284.jpg",
                "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/1/5169104_170_e-16479533603477620.jpg",
            ]
        },
        {
            bedType: 'סט זוגי',
            price: 599.00,
            size: '180X200',
            comesWith: "שתי ציפיות50X70, סדין 160X200X30, ציפה 200X220",
            stock: 0,
            img: [
                'https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/1/5169100_133_a-16498401722717037.jpg',
                "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/1/5169100_133_c-16480436081992813.jpg",
                "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/1/5169100_133_b-16480436071740796.jpg",
                "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/1/5169100_133_d-16480436092945555.jpg",
                "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/1/5169100_133_e-16480436102435254.jpg",
                "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/1/5169100_133_b-16480436071740796.jpg",
            ]
        },
        {
            bedType: 'סט זוגי',
            price: 619.00,
            size: '200X200',
            comesWith: "שתי ציפיות 50X70, סדין 200X200X30 ציפה 200X220",
            stock: 0,
            img: [
                'https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5667947_170_a-16437264222851329.jpg',
                "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5667947_170_c-16437264241913609.jpg",
                "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5667947_170_b-16437264233219875.jpg",
                "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5667947_170_d-16437264252493445.jpg",
                "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5667947_170_e-16437264263705600.jpg",
                "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5667947_170_c-16437264241913609.jpg",
            ]
        },
        {
            bedType: 'סט זוגי כפול ',
            price: 669.00,
            size: '160X200',
            comesWith: "שתי ציפיות 50X70, סדין 160X200X30, שתי ציפות 150X200",
            stock: 100,
            img: [
                'https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5668041_167_a-16479533812255596.jpg',
                "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5668041_167_c-16479533832442236.jpg",
                "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5668041_167_b-16479533821957113.jpg",
                "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5668041_167_d-16479533842957170.jpg",
                "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5668041_167_e-16479533853038643.jpg",
                "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5668041_167_a-16479533812255596.jpg",
            ]
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

let curSlide = 0;
let maxSlide = slides.length - 1;
let w = window.innerWidth;
const dbStock = db[0].stock
const arr = []
let index;

//functions
fillData();
fillDbData();
setPriceRange();
setPrice();

//Price Change & decore
function setPrice(){
    for (let j = 0; j < contentTblItem.length; j++) {
        contentTblItem[j].children[0].classList.remove('bold');
        contentTblItem[j].children[1].classList.remove('bold');
    }
for (let i = 0; i < contentTblItem.length; i++) {
    contentTblItem[i].addEventListener("click", function(){
        index = i;
        priceRange.innerHTML = contentTblItem[i].children[1].innerHTML
        contentTblItem[i].children[0].classList.add('bold');
        contentTblItem[i].children[1].classList.add('bold');
    return
})}  }

//Set Information 
function setPriceRange(){
    for (let i = 0; i < dbStock.length; i++) {
        arr.push(dbStock[i].price)
    }
    priceRange.innerHTML = `${Math.max(...arr)}₪ - ${Math.min(...arr)}₪`
    }
function setImages(id){    
    for (let i = 0; i < imagesArr.length; i++) {
        imagesArr[i].src = dbStock[+id].img[i] 
        zoomImgs[i].style.backgroundImage = `url(${dbStock[+id].img[i]})` 
        imgSlides[i].src = dbStock[+id].img[i] 
    }

}

function fillData() {
    for (let i = 0; i < contentChart.children.length ; i++) {
        contentChart.children[i].children[0].children[0].innerHTML = `${db[0].stock[i].bedType} ${db[0].stock[i].size}`;
        contentChart.children[i].children[0].children[1].innerHTML = `${db[0].stock[i].price} ₪`;
        if(db[0].stock[i].stock === 0){
            contentChart.children[i].children[0].children[0].classList.add('outOfStock');
            contentChart.children[i].children[0].children[1].classList.add('outOfStock');
        }
    }
}

function fillDbData() {
    detailsDiv.children[0].innerHTML = db[0].description;
    detailsDiv.children[2].innerHTML = db[0].composition;
    detailsDiv.children[6].innerHTML = db[0].density;
    detailsDiv.children[8].innerHTML = db[0].instructions;
    detailsDiv.children[10].innerHTML = db[0].modelNumber;
    detailsDiv.children[11].innerHTML = `ארץ ייצור: ${db[0].madeIn}`
    for (let i = 0; i < dbList.children.length; i++) {
        dbList.children[i].innerHTML = `${dbStock[i].bedType} ${dbStock[i].size}: ${dbStock[i].comesWith}`
    }
}

// -/+ Button
function cartCounter(act) {
    console.log('a');
    if (act === '+' && cartCnt.value < 10) {
        cartCnt.value++;
    }
    else if (act === '-' && cartCnt.value > 1) {
        cartCnt.value--;
    }
    return
}



//Tabs Toggle
function changeToDisplay(){
    detailsDiv.style.display = "block";
    shippingDiv.style.display = "none";
    Dbtn.classList.add('bottom-border')
    Sbtn.classList.remove('bottom-border')
}

function changeToShipping(){
    detailsDiv.style.display = "none";
    shippingDiv.style.display = "block";
    Sbtn.classList.add('bottom-border')
    Dbtn.classList.remove('bottom-border')
}	

//Img Zoom
function zoom(e){
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX/zoomer.offsetWidth*100
    y = offsetY/zoomer.offsetHeight*100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
  }

//CAROUSEL

slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
  });

nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});


prevSlide.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

//Hearts Event
function likeEvent(isLike){
    if(isLike=== 1){
        emptyHeart.style.display = 'none';
        redHeart.style.display = 'block';
    }else if(isLike === 0){
        emptyHeart.style.display = 'block'
        redHeart.style.display = 'none'
    }
}