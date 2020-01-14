const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// IMAGES
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let img2 = document.getElementById("cta-img");
img2.setAttribute('src', siteContent["cta"]["img-src"]);

let img3 = document.getElementById("middle-img");
img3.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


// ANCHORS
let anchor = document.querySelectorAll('header nav a')[0];
anchor.textContent = (siteContent["nav"]["nav-item-1"]);
// anchor.style.color = "green";

let anchor2 = document.querySelectorAll('header nav a')[1];
anchor2.textContent = (siteContent["nav"]["nav-item-2"]);
// anchor2.style.color = "green";

let anchor3 = document.querySelectorAll('header nav a')[2];
anchor3.textContent = (siteContent["nav"]["nav-item-3"]);
// anchor3.style.color = "green";

let anchor4 = document.querySelectorAll('header nav a')[3];
anchor4.textContent = (siteContent["nav"]["nav-item-4"]);
// anchor4.style.color = "green";

let anchor5 = document.querySelectorAll('header nav a')[4];
anchor5.textContent = (siteContent["nav"]["nav-item-5"]);
// anchor5.style.color = "green";

let anchor6 = document.querySelectorAll('header nav a')[5];
anchor6.textContent = (siteContent["nav"]["nav-item-6"]);
// anchor6.style.color = "green";
// MAIN-CONTENT

let wordA = document.querySelector('section div h1');
wordA.textContent = (siteContent["cta"]["h1"]);

let wordB = document.querySelector('section div button');
wordB.textContent = (siteContent["cta"]["button"]);

let wordC = document.querySelectorAll('.main-content .top-content .text-content h4')[0];
wordC.textContent = (siteContent["main-content"]["features-h4"]);

let wordD = document.querySelectorAll('.main-content .top-content .text-content p')[0];
wordD.textContent = (siteContent["main-content"]["features-content"]);

let wordE = document.querySelectorAll('.main-content .top-content .text-content h4')[1];
wordE.textContent = (siteContent["main-content"]["about-h4"]);

// let mainH4 = document.querySelectorAll(".main-content .top-content .text-content h4'")
// mainH4.forEach(function(item, index){
//   item.textContent = 
// })
let wordF = document.querySelectorAll('.main-content .top-content .text-content p')[1];
wordF.textContent = (siteContent["main-content"]["about-content"]);

let wordG = document.querySelectorAll('.main-content .bottom-content .text-content h4')[0];
wordG.textContent = (siteContent["main-content"]["services-h4"]);

let wordH = document.querySelectorAll('.main-content .bottom-content .text-content p')[0];
wordH.textContent = (siteContent["main-content"]["services-content"]);

let wordI = document.querySelectorAll('.main-content .bottom-content .text-content h4')[1];
wordI.textContent = (siteContent["main-content"]["product-h4"]);

let wordJ = document.querySelectorAll('.main-content .bottom-content .text-content p')[1];
wordJ.textContent = (siteContent["main-content"]["product-content"]);

let wordK = document.querySelectorAll('.main-content .bottom-content .text-content h4')[2];
wordK.textContent = (siteContent["main-content"]["vision-h4"]);

let wordL = document.querySelectorAll('.main-content .bottom-content .text-content p')[2];
wordL.textContent = (siteContent["main-content"]["vision-content"]);

// CONTACT
let wordM = document.querySelector('.contact h4');
wordM.textContent = (siteContent["contact"]["contact-h4"]);

let wordN = document.querySelectorAll('.contact p')[0];
wordN.textContent = (siteContent["contact"]["address"]);

let wordO = document.querySelectorAll('.contact p')[1];
wordO.textContent = (siteContent["contact"]["phone"]);

let wordP = document.querySelectorAll('.contact p')[2];
wordP.textContent = (siteContent["contact"]["email"]);

// COPYRIGHT

let wordQ = document.querySelector('footer p');
wordQ.textContent = (siteContent["footer"]["copyright"]);

// STYLE

let anchors = document.querySelectorAll('header nav a')

for( var i=0; i < anchors.length; i++){
  anchors[i].style.color = "green";
}

// anchors append preappend

const navA = document.createElement("a")
const navB = document.createElement("a")

navA.textContent = "Tech"
navB.textContent = "Support"
navA.style.color = "green"
navB.style.color = "green"

// headerNav = document.querySelector('header nav').appendChild(navA)
headerNav = document.querySelector('header nav');
headerNav.appendChild(navA); 
headerNav.prepend(navB)
// the end









